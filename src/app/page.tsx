import { UseCase4 } from "@/components/beste/useCase4";
import { UseCase4DemoData } from "@/lib/demo-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <UseCase4 heading={UseCase4DemoData.heading} columns={4} items={UseCase4DemoData.items} />
      </main>
    </div>
  );
}
