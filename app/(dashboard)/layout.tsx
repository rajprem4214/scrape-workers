import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";
import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen">
                <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
                    Scrape Workers
                </header>
                <Separator />
                <div className="flex-1 container py-4 text-accent-foreground">
                    {children}
                </div>
            </div>
        </div>
    );
}

