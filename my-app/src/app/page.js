"use client";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Split } from "../components/Split";

export default function Home() {
  const [connected, setConnected] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-cover bg-center bg-custom text-[#222222] px-20 pb-16">
      <NavBar
        connected={connected}
        handleDisconnect={() => setConnected(false)}
        handleConnect={() => setConnected(true)}
      />
      <div className="self-end">
        <Split connected={connected} handleConnect={() => setConnected(true)} />
      </div>
    </main>
  );
}
