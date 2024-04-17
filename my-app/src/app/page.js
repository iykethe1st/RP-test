"use client";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Split } from "../components/Split";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col bg-cover bg-center bg-custom text-[#222222] px-20 pb-16">
      <NavBar connected={isConnected} />
      <div className="self-end">
        <Split connected={isConnected} />
      </div>
    </main>
  );
}
