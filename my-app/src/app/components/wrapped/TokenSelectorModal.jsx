import Image from "next/image";
import React from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

const FREQUENTLY_USED_TOKENS = [
  "eth",
  "arb",
  "dai",
  "usdc",
  "usdt",
  "wbtc",
  "weth",
];

const TOKENS = [
  {
    name: "Ether",
    value: 1.9999,
    symbol: "eth",
  },
  {
    name: "Wrapped Ether",
    value: 0,
    symbol: "weth",
  },
  {
    name: "Gitcoin",
    value: 20,
    symbol: "gtc",
  },
  {
    name: "1inch",
    value: 0,
    symbol: "1inch",
  },
  {
    name: "Aave",
    value: 0,
    symbol: "aave",
  },
  {
    name: "Arcblock",
    value: 0,
    symbol: "abt",
  },
  {
    name: "Ambire AdEx",
    value: 0,
    symbol: "adx",
  },
];

const TokenSelectorModal = ({ onClose, setSelectedToken }) => {
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end px-[15rem] bg-[#294B63] bg-opacity-50 backdrop-blur-[2px]">
      <div className="bg-white text-[#222222] w-[420px] pt-4 pb-2 absolute flex flex-col right-[12rem] rounded-[30px] text-[14px]">
        <IoCloseOutline
          onClick={onClose}
          className="self-end mr-2 cursor-pointer w-6 h-6"
        />
        <div className="mx-6 rounded-[30px] text-[12px] flex gap-2 items-center border border-[#E4E4E4] p-[10px] w-[330px]">
          <IoSearchOutline />

          <input
            className="focus:outline-none rounded-[30px]"
            placeholder="Search Token"
            type="text"
          />
        </div>
        <div className="px-6">
          <div className="py-4">Frequently Used Tokens</div>
          <div className="flex gap-3 flex-wrap">
            {FREQUENTLY_USED_TOKENS.map((token, index) => (
              <div
                onClick={() => handleTokenSelect(token.toUpperCase())}
                key={index}
                className="cursor-pointer flex items-center gap-2 border border-[#E4E4E4] rounded-[15px] py-[10px] pr-[11px] pl-[5px]"
              >
                <Image
                  width={24}
                  height={24}
                  src={`/${token}.png`}
                  alt={token}
                />
                <div className="font-bold text-[16px]">
                  {token.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t px-6 border-t-[#E4E4E4] w-full flex flex-col my-8 ">
          {TOKENS.map((token, index) => (
            <div
              onClick={() => handleTokenSelect(token.symbol.toUpperCase())}
              key={index}
              className="flex items-center justify-between py-2 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div>
                  <Image width={36} height={36} src={`/${token.symbol}.png`} />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-[16px]">{token.name}</div>
                  <div className="text-[12px] text-[#BBBFCF]">
                    {token.symbol.toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="text-[16px]">{token.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenSelectorModal;
