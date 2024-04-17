"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./wrapped";
import {
  ConnectButton,
  useAccountModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { shortenWalletAddress } from "@/utils";

const NavBar = ({ connected, handleConnect, handleDisconnect, loading }) => {
  const [activeTab, setActive] = useState("Split");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount();
  const { openAccountModal } = useAccountModal();

  console.log({ isConnected });
  console.log({ address });

  return (
    <div className="flex justify-between items-center py-10">
      <div className="animate__animated animate__fadeInLeft">
        <Image
          className=""
          src={"/logo.png"}
          width={120}
          height={80}
          alt="logo"
        />
      </div>
      <div className="flex gap-8 animate__animated animate__fadeInDown">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={19} height={19} src={"/split.png"} alt="" />
          <div
            className={`${activeTab === "Split" ? "font-bold" : "font-light"}`}
          >
            Split
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={19} height={19} src={"/swap.png"} alt="" />
          <div
            className={`${activeTab === "Swap" ? "font-bold" : "font-light"}`}
          >
            Swap
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={19} height={19} src={"/redeem.png"} alt="" />
          <div
            className={`${activeTab === "Redeem" ? "font-bold" : "font-light"}`}
          >
            Redeem
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Image width={19} height={19} src={"/liquidity.png"} alt="" />
          <div
            className={`${
              activeTab === "Liquidity" ? "font-bold" : "font-light"
            }`}
          >
            Liquidity
          </div>
        </div>
      </div>
      <div>
        {isConnected ? (
          <div className="w-full bg-[#9AB1BD] text-white p-1 rounded-[30px] flex items-center gap-4 relative">
            <div className="bg-[#EAEEF2] w-[32px] h-[32px] rounded-full relative">
              {" "}
              <Image
                className="absolute -right-[5px] bottom-0"
                width={18}
                height={18}
                src={"/metamask.png"}
                alt="meta"
              />
            </div>

            <div>{shortenWalletAddress(address)}</div>

            <div
              onClick={() => setToggleDropdown(!toggleDropdown)}
              className="pr-1 cursor-pointer hover:scale-110 transition ease-in-out"
            >
              <Image
                className=""
                width={20}
                height={20}
                src={"/chevdown.png"}
                alt="meta"
              />
            </div>
            {toggleDropdown && (
              <div className="absolute w-full top-[44px] text-[11px] px-[20px] py-[10px] text-[#222222] rounded-[24px] flex flex-col gap-2 bg-[#E9F1F5]">
                <div className="flex justify-between items-center">
                  <div>ETH</div>
                  <div>0.123000</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>BTC </div>
                  <div>0.005533</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>RonBTC</div>
                  <div> 150</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>RoffBTC</div>
                  <div>300</div>
                </div>

                <button
                  onClick={openAccountModal}
                  className="w-full text-right font-bold text-[#9AB1BD] hover:text-black/20 transition ease-in-out"
                >
                  Disconnect Wallet
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="animate__animated animate__fadeInRight">
            <Button
              // onClick={handleConnect}
              onClick={openConnectModal}
              label="Connect Wallet"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
