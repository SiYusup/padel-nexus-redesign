import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80svh] flex-col justify-center gap-8 pb-20 pt-40">
      <p className="eyebrow text-ink-faint">404</p>
      <h1 className="t-display max-w-[8ch]">Out of bounds.</h1>
      <p className="max-w-[44ch] text-lg leading-8 text-ink-soft">
        Alamat yang kamu buka tidak ada atau sudah dipindahkan. Kembali ke
        beranda untuk melanjutkan permainan.
      </p>
      <div className="mt-2">
        <ButtonLink href="/" variant="primary">
          Kembali ke beranda
        </ButtonLink>
      </div>
    </section>
  );
}
