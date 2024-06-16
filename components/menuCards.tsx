'use client';

import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { AmountButton } from "./amountButton";

export default function MenuCards() {
    const list = [
        {
            title: "Апельсин",
            img: "/images/fruit-1.jpeg",
            price: "500₽",
            weight: "1 кг",
        },
        {
            title: "Мандарин",
            img: "/images/fruit-2.jpeg",
            price: "300₽",
            weight: "1.5 кг",
        },
        {
            title: "Вишня",
            img: "/images/fruit-3.jpeg",
            price: "1000₽",
            weight: "1.2 кг",
        },
        {
            title: "Лимон",
            img: "/images/fruit-4.jpeg",
            price: "530₽",
            weight: "0.5 кг",
        },
        {
            title: "Авокадо",
            img: "/images/fruit-5.jpeg",
            price: "1570₽",
            weight: "12.75 кг",
        },
        {
            title: "Египетский лимон",
            img: "/images/fruit-6.jpeg",
            price: "800₽",
            weight: "500 гр",
        },
        {
            title: "Банан латиноамериканский классический",
            img: "/images/fruit-7.jpeg",
            price: "750₽",
            weight: "225 гр",
        },
        {
            title: "Арбуз азербайджанский",
            img: "/images/fruit-8.jpeg",
            price: "1220₽",
            weight: "75 гр",
        },
    ];

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0 grow-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[200px]"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-left w-full flex flex-col gap-1">
                        <p className="text-default-500 w-full">{item.price}</p>
                        <b className="w-full h-[38px] overflow-hidden text-ellipsis leading-5 line-clamp-2">{item.title}</b>
                        <p className="mt-2 text-secondary-500 w-full">{item.weight}</p>
                        <AmountButton />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

