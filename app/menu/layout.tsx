import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Меню",
    description: "Просмотр меню",
};

export default function MenuLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block w-full lg:max-w-3xl xl:max-w-5xl text-center justify-center">
          {children}
        </div>
      </section>
    );
  }
  