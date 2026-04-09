"use client";

import { History, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const mockHistory = [
  { id: 1, title: "French Revolution Quiz", date: "2 mins ago" },
  { id: 2, title: "Javascript Basics", date: "1 hour ago" },
  { id: 3, title: "Biology: Cells", date: "Yesterday" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card/50 backdrop-blur-sm flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            Q
          </div>
          Quizzy AI
        </Link>
      </div>

      <div className="px-4 mb-4">
        <Button className="w-full justify-start gap-2" variant="outline">
          <Plus className="w-4 h-4" />
          New Session
        </Button>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col px-4">
        <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 px-2 tracking-wider flex items-center gap-2">
          <History className="w-3 h-3" />
          History
        </h3>
        <ScrollArea className="flex-1">
          <div className="space-y-1">
            {mockHistory.map((item) => (
              <button
                key={item.id}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm group"
              >
                <p className="font-medium truncate">{item.title}</p>
                <p className="text-[10px] text-muted-foreground">{item.date}</p>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">Gaurav</p>
            <p className="text-[10px] text-muted-foreground">Pro Account</p>
          </div>
        </Button>
      </div>
    </aside>
  );
}
