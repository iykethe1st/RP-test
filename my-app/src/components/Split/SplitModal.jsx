import { addCommasToNumber } from "@/utils";
import Image from "next/image";
import { Button } from "../wrapped";
import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SplitModal = ({
  onClose,
  splitAmount,
  lowerSplit,
  upperSplit,
  selectedToken,
}) => {
  const [step, setStep] = useState("confirm");

  const renderBtnText = () => {
    if (lowerSplit === 300 || upperSplit === 300) {
      return "Split";
    } else return "Split & Swap";
  };

  const processSplitSwap = () => {
    setStep("processing");
  };

  useEffect(() => {
    if (step === "processing") {
      setTimeout(() => {
        setStep("failed");
      }, 3000);
    }
  }, [step]);

  return (
    <>
      {step === "confirm" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#294B63] bg-opacity-50 backdrop-blur-[2px]	">
          <div className="bg-white p-6 rounded-[30px] w-[642px] relative flex flex-col">
            <div
              className="cursor-pointer absolute top-[15px] right-[20px]"
              onClick={onClose}
            >
              <Image
                width={12}
                height={12}
                src={"/close.png"}
                alt="close-modal"
              />
            </div>
            <div className="text-[24px] mb-4 text-center pt-2">
              Confirm Transaction
            </div>
            <div className="flex mb-4 items-center">
              <div className="w-[45%] flex flex-col gap-1 pl-4">
                <div className="text-xs text-[#222222]">I deposit</div>

                <div className="flex items-center gap-1.5 text-[24px] text-[#222222] cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src={`/${selectedToken}.png`}
                    alt={selectedToken}
                  />
                  {splitAmount} {selectedToken}
                </div>
                <div className="text-[#8CA8C3] text-[13px]">
                  ${" "}
                  {addCommasToNumber(
                    parseFloat(splitAmount * 3200).toFixed(2)
                  ) || 0}
                </div>
              </div>
              <div className="w-[10%] flex items-center justify-center relative">
                <div className="h-[120px] w-[1px] bg-[#E4E4E4]"></div>
                <div className="absolute left-[30%]">
                  <Image
                    width={27}
                    height={27}
                    src={"/arrow-right.png"}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-[45%] flex flex-col gap-1 pr-4">
                <div className="text-xs text-[#222222]">I receive</div>

                <div>
                  {lowerSplit === 300 && (
                    <div className="text-[24px] text-[#222222] flex items-center gap-2">
                      <div className="w-[24px] h-[24px] bg-[#FF0000]"></div>
                      {lowerSplit} ronETH
                    </div>
                  )}

                  {upperSplit === 300 && (
                    <div className="text-[24px] text-[#222222] flex items-center gap-2">
                      <div className="w-[24px] h-[24px] bg-[#FF0000]"></div>
                      {upperSplit} RiskOFF ETH
                    </div>
                  )}

                  {lowerSplit < 300 && upperSplit < 300 && (
                    <div>
                      <div className="text-[24px] text-[#222222] flex items-center gap-2">
                        <div className="w-[24px] h-[24px] bg-[#FF0000]"></div>
                        {lowerSplit} ronETH
                      </div>
                      <div className="text-[24px] text-[#222222] flex items-center gap-2">
                        <div className="w-[24px] h-[24px] bg-[#FF0000]"></div>
                        {upperSplit} roffETH
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[#8CA8C3] text-[13px]">
                  {" "}
                  ${" "}
                  {addCommasToNumber(
                    parseFloat(splitAmount * 3200).toFixed(2)
                  ) || 0}
                </div>
              </div>
            </div>

            {lowerSplit < 300 && upperSplit < 300 && (
              <div className="flex flex-col gap-2 w-full text-xs pt-4">
                <div className="flex justify-between items-center">
                  <div>Split Exchange Rate</div>
                  <div>1 ETH = 1 ronETH + 1 roffETH</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>Split Fee</div>
                  <div>$0</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>Estimated GAS</div>
                  <div>$2</div>
                </div>
              </div>
            )}

            {lowerSplit === 300 && (
              <div className="flex flex-col gap-2 w-full text-xs pt-4">
                <div className="flex justify-between items-center">
                  <div>Exchange Rate</div>
                  <div className="flex items-center gap-1">
                    1 ETH = 1.5 RiskON
                    <Image
                      width={16}
                      height={16}
                      src={"/chevdown-dark.png"}
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>Split + Swap Fee</div>
                  <div>$0+$1</div>
                </div>

                <div className="flex justify-between items-center">
                  <div>Estimated GAS</div>
                  <div>$2</div>
                </div>
              </div>
            )}

            {upperSplit === 300 && (
              <div className="flex flex-col gap-2 w-full text-xs pt-4">
                <div className="flex justify-between items-center">
                  <div>Exchange Rate</div>
                  <div className="flex items-center gap-1">
                    1 ETH = 1.5 RiskON
                    <Image
                      width={16}
                      height={16}
                      src={"/chevdown-dark.png"}
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>Swap Price Impact</div>
                  <div>1%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Swap Slippage Protection</div>
                  <div>0.5%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Split + Swap Fee</div>
                  <div>$0+$1</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>Estimated GAS</div>
                  <div>$2</div>
                </div>
              </div>
            )}

            <div className="w-full pt-4 pb-1">
              <Button onClick={processSplitSwap} label={renderBtnText()} />
            </div>
          </div>
        </div>
      )}

      {step === "processing" && (
        <div className="fixed inset-0 z-50 flex items-start py-32 justify-center bg-[#294B63] bg-opacity-50 backdrop-blur-[2px]	">
          <div className="bg-white border border-[#F29C35] pl-[30px] pr-[14px] py-[14px] rounded-[30px] w-[463px] relative flex items-center justify-between">
            <div className="flex items-center gap-[10px] text-[#F29C35]">
              <div>
                <Image width={25} height={25} src={"/timer.png"} alt="timer" />
              </div>
              <div>Transaction Processing</div>
            </div>
            <div>
              <div
                onClick={onClose}
                className="relative w-6 h-6 cursor-pointer"
              >
                <ImSpinner2 className="absolute inset-0 animate-spin text-[#8CA8C3] w-6 h-6" />
                <div className="absolute inset-0 flex items-center justify-center text-black">
                  <IoCloseOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === "successfull" && (
        <div className="fixed inset-0 z-50 flex items-start py-[105px] justify-center	">
          <div className="bg-white border border-[#68C269] pl-[30px] pr-[14px] py-[14px] rounded-[30px] w-[463px] relative flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px] text-[#68C269]">
                <div>
                  <Image
                    width={25}
                    height={25}
                    src={"/successful.png"}
                    alt="timer"
                  />
                </div>
                <div>Transaction Successfully Completed!</div>
              </div>
              <div>
                <div
                  onClick={onClose}
                  className="relative w-6 h-6 cursor-pointer"
                >
                  <ImSpinner2 className="absolute inset-0 animate-spin text-[#8CA8C3] w-6 h-6" />
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    <IoCloseOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm">
              New SMART Tokens have been deposited into your wallet. View
              transaction on <span className="underline">etherscan</span>.
            </div>
          </div>
        </div>
      )}

      {step === "failed" && (
        <div className="fixed inset-0 z-50 flex items-center py-32 justify-center bg-[#294B63] bg-opacity-50 backdrop-blur-[2px]	">
          <div className="bg-white p-[14px] rounded-[30px] w-[642px] relative flex flex-col items-center justify-between gap-4 px-10 py-8">
            <div
              className="cursor-pointer absolute top-[15px] right-[20px]"
              onClick={onClose}
            >
              <Image
                width={12}
                height={12}
                src={"/close.png"}
                alt="close-modal"
              />
            </div>
            <div>
              <IoIosCloseCircleOutline className="w-[30px] h-[30px] text-red-500" />
            </div>

            <div className="text-red-500 text-[24px]">Transaction Failed!</div>
            <div className="text-center text-sm">
              Please check your wallet for possible issues affecting the
              transaction. If the problem persists, contact our support team for
              assistance.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SplitModal;
