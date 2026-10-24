const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "out");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let file = path.resolve(root, pathname.replace(/^\/+/, ""));

    if (!file.startsWith(root)) {
      res.statusCode = 403;
      res.end("Forbidden");
      return;
    }

    if (
      pathname.endsWith("/") ||
      (fs.existsSync(file) && fs.statSync(file).isDirectory())
    ) {
      file = path.join(file, "index.html");
    }

    if (!fs.existsSync(file)) {
      if (fs.existsSync(`${file}.html`)) {
        file = `${file}.html`;
      } else {
        res.statusCode = 404;
        file = path.join(root, "404.html");
      }
    }

    res.setHeader(
      "Content-Type",
      types[path.extname(file)] || "application/octet-stream",
    );
    fs.createReadStream(file)
      .on("error", () => res.end())
      .pipe(res);
  })
  .listen(port, () => {
    console.log(`Static preview: http://localhost:${port}`);
  });
