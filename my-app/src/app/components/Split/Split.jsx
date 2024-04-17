import Image from "next/image";
import SplitInput from "./SplitInput";
import { useState } from "react";
import TransactionSteps from "./TransactionSteps";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

const Split = ({ connected, handleConnect }) => {
  const [toggleFaq, setToggleFaq] = useState(false);
  const [toggleSplitFaqIndex, setToggleSplitFaqIndex] = useState(false);
  const [toggleRiskFaqIndex, setToggleRiskFaqIndex] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-8">
        <Image width={171} height={58} src={"/split-title.png"} alt="split" />
        <div className="text-sm pb-8">
          Tokenize risk. Mint SMART Tokens with unique risk/return payoffs.
        </div>
      </div>
      <div>
        <SplitInput connected={connected} handleConnect={handleConnect} />
      </div>

      {connected && <TransactionSteps />}
      <div className="bg-white/50 rounded-[20px] px-[15px] py-3 mt-[60px] cursor-pointer">
        <div className="w-full flex items-center justify-between">
          <div>FAQ</div>
          <div onClick={() => setToggleFaq(!toggleFaq)}>
            <Image
              className=""
              width={20}
              height={20}
              src={`/${toggleFaq ? "chevup-dark" : "chevdown-dark"}.png`}
              alt="down"
            />
          </div>
        </div>

        {toggleFaq && (
          <div className="w-full flex flex-col gap-4 mt-2">
            <div className="bg-[#D3E3EB] rounded-[24px] pl-[15px] pr-[25px] py-[14px]">
              <div className="flex justify-between items-center">
                <div className="font-medium text-[14px]">
                  How does the split functionality work?
                </div>
                <div
                  onClick={() => setToggleSplitFaqIndex(!toggleSplitFaqIndex)}
                  className="font-light text-[13px] text-[#7A8AA0]"
                >
                  {toggleSplitFaqIndex ? (
                    <HiOutlineMinus className="w-4 h-4" />
                  ) : (
                    <HiOutlinePlus className="w-4 h-4" />
                  )}
                </div>
              </div>
              {toggleSplitFaqIndex && (
                <div className="font-light text-[13px] text-[#7A8AA0] pt-2">
                  XXXXXX
                </div>
              )}
            </div>

            <div className="bg-[#D3E3EB] rounded-[24px] pl-[15px] pr-[25px] py-[14px]">
              <div className="flex justify-between items-center">
                <div className="font-medium text-[14px]">
                  {" "}
                  What are RiskON BTC and RiskOFF BTC, and how do they differ
                  from each other?
                </div>
                <div
                  onClick={() => setToggleRiskFaqIndex(!toggleRiskFaqIndex)}
                  className="font-light text-[13px] text-[#7A8AA0]"
                >
                  {toggleRiskFaqIndex ? (
                    <HiOutlineMinus className="w-4 h-4" />
                  ) : (
                    <HiOutlinePlus className="w-4 h-4" />
                  )}
                </div>
              </div>
              {toggleRiskFaqIndex && (
                <div className="font-light text-[13px] text-[#7A8AA0] pt-2">
                  XXXXXX
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Split;
