"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-8 w-full max-w-2xl">
        {/* Loading Indicator */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-tighter opacity-50">AI</span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Generating your session</h2>
            <p className="text-muted-foreground animate-pulse text-sm">Our AI is analyzing your notes...</p>
          </div>
        </div>

        {/* Skeleton Mockup */}
        <Card className="p-8 md:p-12 space-y-6 border-none bg-card/40 backdrop-blur-sm">
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto opacity-50" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
          </div>
        </Card>
      </div>
    </div>
  );
}
