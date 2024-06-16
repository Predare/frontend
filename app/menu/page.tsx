import MenuCards from "@/components/menuCards";
import { title } from "@/components/primitives";

export default function MenuPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>Меню</h1>
      <MenuCards />
    </div>
  );
}
