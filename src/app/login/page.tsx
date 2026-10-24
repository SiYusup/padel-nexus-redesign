import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk ke akun demo Padel Demo lalu lanjutkan ke WhatsApp.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="wrap pb-[var(--section)] pt-24 md:pt-32">
      <div className="grid gap-12 border-t-2 border-ink pt-5 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-signal-deep">Akun demo</p>
          <h1 className="t-display mt-6 max-w-[12ch]">
            Masuk, lalu lanjut ke WhatsApp.
          </h1>
          <p className="mt-8 max-w-[42ch] text-lg leading-8 text-ink-soft">
            Halaman ini adalah contoh alur login untuk situs statis. Setelah
            berhasil masuk, kamu akan diarahkan ke WhatsApp.
          </p>
          <p className="mt-8 max-w-[46ch] border border-line bg-surface p-5 text-sm leading-6 text-ink-soft">
            Gunakan akun demo <strong className="text-ink">demo / demo</strong>.
            Kredensial tersimpan di browser dan bukan autentikasi yang aman.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
