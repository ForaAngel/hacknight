import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
      <Hero />
    </main>
  );
}
