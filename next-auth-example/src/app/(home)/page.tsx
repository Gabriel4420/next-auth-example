import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link as="/auth/signin" href="/auth/signin" className="text-white bg-red-400 px-20 py-5 font-bold text-[30px] rounded-xs">Login</Link>
      </main>
   
    </div>
  );
}
