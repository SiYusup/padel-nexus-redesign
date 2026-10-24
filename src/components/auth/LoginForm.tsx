"use client";

import { useEffect, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { isLoggedIn, login, logout } from "@/lib/demo-auth";
import { whatsappUrl } from "@/lib/site";

const fieldCls =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-b-2 focus:border-signal";

const WA_MESSAGE = "Halo Padel Demo, saya sudah masuk dari situs demo.";

export function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = String(data.get("username") ?? "");
    const pass = String(data.get("password") ?? "");

    if (!login(user, pass)) {
      setError("Username atau password salah. Gunakan demo / demo.");
      return;
    }

    setError("");
    setLoggedIn(true);
    window.location.assign(whatsappUrl(WA_MESSAGE));
  }

  if (loggedIn) {
    return (
      <div className="flex flex-col gap-6 border border-line bg-surface p-6 md:p-8">
        <p className="eyebrow text-ink-faint">Sesi demo</p>
        <h2 className="t-3">Kamu sudah masuk.</h2>
        <p className="text-ink-soft">
          Lanjutkan ke WhatsApp atau keluar dari sesi demo di browser ini.
        </p>
        <ButtonLink href={whatsappUrl(WA_MESSAGE)} external variant="signal">
          <Icon name="MessageCircle" size={20} />
          Buka WhatsApp
        </ButtonLink>
        <button
          type="button"
          onClick={() => {
            logout();
            setLoggedIn(false);
          }}
          className="inline-flex min-h-11 items-center gap-2 self-start font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] underline underline-offset-4"
        >
          <Icon name="LogIn" size={16} />
          Keluar dari sesi demo
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="flex flex-col gap-8 border border-line bg-surface p-6 md:p-8"
    >
      <div>
        <p className="eyebrow text-ink-faint">Masuk</p>
        <h2 className="t-3 mt-3">Akun demo</h2>
      </div>

      {error && (
        <p role="alert" className="text-sm font-semibold text-signal-deep">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="eyebrow text-ink-soft">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          className={fieldCls}
          aria-invalid={error ? true : undefined}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="eyebrow text-ink-soft">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={fieldCls}
          aria-invalid={error ? true : undefined}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button type="submit" variant="primary" className="w-full">
          Masuk & chat WhatsApp
          <Icon name="MessageCircle" size={18} />
        </Button>
        <p className="text-sm leading-6 text-ink-soft">
          Demo: <span className="font-semibold text-ink">demo / demo</span>.
          Tidak ada data yang dikirim ke server.
        </p>
      </div>
    </form>
  );
}
