"use client";

import React from "react";

import { Tabs, Tab } from "@nextui-org/tabs";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export const BottomNavbar = ( { className }: { className?: string }) => {
    const pathname = usePathname();
    return (
        <div className={ className + " w-full flex-col items-center justify-center" } >
            <Tabs aria-label="Options" color="primary" variant="underlined" selectedKey={pathname}>
                {siteConfig.navItems.map((item) => (
                    <Tab
                        key={item.href}
                        title={
                            <div className="flex items-center space-x-2">
                                <item.icon />
                                <span>{item.label}</span>
                            </div>
                        }
                        href={item.href}
                    />
                ))}
            </Tabs>
        </div>
    );
};