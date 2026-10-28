import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#070809] px-6 text-[#f4f1e8]">
      <div className="text-center">
        <p className="font-mono2 text-[12px] tracking-[0.3em] text-[#d7ff3e] uppercase">[404] — Route not found</p>
        <h1 className="mt-4 font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-none">
          4<span className="text-stroke-lime">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-[#a7adb5]">This interface doesn&apos;t exist. The homepage does — and it&apos;s considerably more impressive.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-[#d7ff3e] px-8 py-4 font-display text-sm font-bold text-black">
          ← BACK TO BASE
        </Link>
      </div>
    </main>
  );
}
