"use client";

import React from "react";
import { CreditCardIcon, HomeIcon, Layers2Icon, LockIcon } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
const routes = [
    {
        label: "Home",
        href: "",
        icon: HomeIcon,
    },
    {
        label: "Workers",
        href: "/workers",
        icon: Layers2Icon,
    },
    {
        label: "Secrets",
        href: "/secrets",
        icon: LockIcon,
    },
    {
        label: "Payments",
        href: "/payments",
        icon: CreditCardIcon,
    }
];
export default function Sidebar() {

    const pathname = usePathname();
    const isActiveRoute = routes.find((route) => route.href.length > 0 && pathname.includes(route.href)) || routes[0];

    return (
        <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 
        dark: text-foreground text-muted-foreground border-r-2 border-separate">
            <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
                <Logo />
            </div>
            <div className="flex flex-col p-2">
                {routes.map((route) => (
                    <Link href={route.href} key={route.href} className={buttonVariants({variant: isActiveRoute.href ===  route.href? "sidebarItemActive" : "sidebarItem"})}>
                        <route.icon size={20} />
                        <span>{route.label}</span>
                    </Link>
                ))}

            </div>
        </div>
    );
}
