"""Kompres gambar /ai untuk static export (jalankan sekali saat aset berubah).

Original sudah dibackup di _arsip-public/public-original/ai.
"""

from pathlib import Path
import os

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
AI_DIR = ROOT / "public" / "ai"
MAX_EDGE = 1600
QUALITY = 76


def human(size: int) -> str:
    return f"{size / 1024:.0f} KB"


def optimize(path: Path) -> None:
    before = path.stat().st_size
    with Image.open(path) as img:
        img = img.convert("RGB")
        img.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        tmp = path.with_suffix(".tmp.webp")
        img.save(tmp, "WEBP", quality=QUALITY, method=6)
    after = tmp.stat().st_size
    os.replace(tmp, path)
    print(f"{path.name}: {human(before)} -> {human(after)}")


def make_og() -> None:
    source = AI_DIR / "lapangan-kanopi.webp"
    target = AI_DIR / "og-image.jpg"
    with Image.open(source) as img:
        img = img.convert("RGB")
        og = ImageOps.fit(
            img,
            (1200, 630),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )
        og.save(target, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{target.name}: {human(target.stat().st_size)}")


def main() -> None:
    total_before = 0
    total_after = 0
    for path in sorted(AI_DIR.glob("*.webp")):
        total_before += path.stat().st_size
        optimize(path)
        total_after += path.stat().st_size
    make_og()
    print(f"Total webp: {human(total_before)} -> {human(total_after)}")


if __name__ == "__main__":
    main()
