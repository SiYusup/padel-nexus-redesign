"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="wrap flex min-h-[80svh] flex-col justify-center gap-8 pb-20 pt-40">
      <p className="eyebrow text-ink-faint">Kesalahan</p>
      <h1 className="t-display max-w-[10ch]">Terjadi kendala</h1>
      <p className="max-w-[44ch] text-lg leading-8 text-ink-soft">
        Halaman ini gagal dimuat. Coba muat ulang, atau kembali beberapa saat
        lagi.
      </p>
      <div className="mt-2">
        <Button variant="primary" onClick={reset}>
          Coba lagi
        </Button>
      </div>
    </section>
  );
}
