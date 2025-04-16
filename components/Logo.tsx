import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo({
    fontSize = "text-2xl", iconSize = 20
}: {
    fontSize?: string;
    iconSize?: number;
}) {
    return (<Link href="/" className={cn("text-2xl font-extrabold flex items-center gap-2",
        fontSize
    )}>
        <div className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
            <SquareDashedMousePointer size={iconSize} className="stroke-white" />
        </div>
        <div>
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">Scrape</span>
            <span className="text-stone-700 dark:text-stone-300">Workers</span>
        </div>
    </Link>
    );
}