import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-4 py-16">
      <section className="text-center space-y-6">
        <img src="/favicon.ico" alt="Noēsis Logo" className="mx-auto w-16 h-16 mb-2" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Noēsis</h1>
        <p className="text-lg md:text-xl text-gray-400">Decentralized Evolving Intelligence</p>
      </section>
    </main>
  );
}