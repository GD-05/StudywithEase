"use client";

import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Upload, Zap, BookOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [quizSize, setQuizSize] = useState("10");

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-3xl w-full text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">Quizzy AI</h1>
            <p className="text-xl text-muted-foreground">Learn any topic with fun</p>
          </div>

          {/* Generator Card */}
          <Card className="p-8 md:p-10 shadow-xl border-none bg-card/40 backdrop-blur-xl ring-1 ring-border/50">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Drop Zone */}
              <div className="relative group">
                <div className="h-64 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-4 bg-muted/30 group-hover:bg-muted/50 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Drop your notes here</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, TXT or paste text</p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="flex flex-col justify-between py-2">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Mode</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-16 flex-col gap-1 border-2 border-primary/20 bg-primary/5 hover:bg-primary/10">
                        <Zap className="w-5 h-5" />
                        Quiz
                      </Button>
                      <Button variant="outline" className="h-16 flex-col gap-1 opacity-50">
                        <BookOpen className="w-5 h-5" />
                        Flash card
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quiz Size</p>
                    <div className="flex gap-2">
                      {["8", "10", "12"].map((size) => (
                        <Button
                          key={size}
                          variant={quizSize === size ? "default" : "outline"}
                          className="flex-1 h-12 text-lg"
                          onClick={() => setQuizSize(size)}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Link href="/quiz">
                    <Button size="icon" className="w-16 h-16 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                      <ArrowRight className="w-8 h-8" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
