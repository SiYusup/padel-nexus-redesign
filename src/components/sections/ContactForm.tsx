"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/lib/site";

type Errors = {
  name?: string;
  phone?: string;
  message?: string;
};

const fieldCls =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink-faint transition-colors duration-300 focus:border-b-2 focus:border-signal aria-[invalid=true]:border-signal-deep focus:aria-[invalid=true]:border-signal-deep";

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-ink-soft">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-ink-soft">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm font-semibold text-signal-deep"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Nama minimal 2 karakter.";
    if (phone && !/^[0-9+\-\s()]*$/.test(phone)) {
      next.phone = "Nomor telepon hanya boleh berisi angka.";
    }
    if (message.length < 10) next.message = "Pesan minimal 10 karakter.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("Periksa kembali isian yang ditandai.");
      return;
    }

    const lines = [`Halo Padel Demo, saya ${name}.`, message];
    if (phone) lines.push(`Nomor saya: ${phone}.`);

    setStatus("Membuka WhatsApp…");
    formRef.current?.reset();
    window.location.assign(whatsappUrl(lines.join("\n\n")));
  }

  const err = (key: keyof Errors) => errors[key];
  const aria = (key: keyof Errors, hint = false) => ({
    "aria-invalid": err(key) ? true : undefined,
    "aria-describedby": err(key)
      ? `${key}-error`
      : hint
        ? `${key}-hint`
        : undefined,
  });

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="flex flex-col gap-8">
      <div
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={
          status
            ? "border border-signal bg-surface p-5 text-sm font-semibold text-ink"
            : "sr-only"
        }
      >
        {status}
      </div>

      <Field id="name" label="Nama" error={err("name")}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldCls}
          {...aria("name")}
        />
      </Field>

      <Field
        id="phone"
        label="Nomor telepon (opsional)"
        error={err("phone")}
        hint="Isi jika ingin dihubungi lewat telepon atau WhatsApp."
      >
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={fieldCls}
          {...aria("phone", true)}
        />
      </Field>

      <Field
        id="message"
        label="Pesan"
        error={err("message")}
        hint="Minimal 10 karakter. Pesan akan dibuka di WhatsApp."
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldCls}
          {...aria("message", true)}
        />
      </Field>

      <div className="flex flex-col gap-4">
        <Button type="submit" variant="primary" className="min-w-[12rem]">
          Buka WhatsApp
          <Icon name="MessageCircle" size={18} />
        </Button>
        <p className="text-sm leading-6 text-ink-soft">
          Pesan tidak dikirim ke server. Kamu akan diarahkan ke WhatsApp dengan
          isi pesan yang sudah disiapkan.
        </p>
      </div>
    </form>
  );
}
