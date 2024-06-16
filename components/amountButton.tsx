"use client";

import React from "react";
import { Button } from "@nextui-org/button";

export const AmountButton = ({ }) => {
    const [amount, setAmount] = React.useState(0);

    const [isClient, setIsClient] = React.useState(false)
    React.useEffect(() => {
        setIsClient(true)
    }, []);

    if (!isClient) return null;
    if (amount === 0) {
        return (
            <Button onPress={() => setAmount(amount + 1)} radius="md" className="mt-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full">
                Добавить
            </Button>
        );
    } else {
        return (
            <div className="z-10 flex items-center rounded-xl mt-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full">
                <Button className="min-w-[3rem] text-3xl bg-black bg-opacity-10 rounded-r-none" onPress={() => setAmount(amount - 1)}>-</Button>
                <span className="w-full flex-grow text-center">{amount}</span>
                <Button className="min-w-[3rem] text-3xl bg-black bg-opacity-10 rounded-l-none" onPress={() => setAmount(amount + 1)}>+</Button>
            </div>
        );
    }
};