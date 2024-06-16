import { title } from "@/components/primitives";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказ",
  description: "Отправить заказ",
};

export default function OrderPage() {
  return (
    <div>
      <h1 className={title()}>Заказ</h1>
    </div>
  );
}
