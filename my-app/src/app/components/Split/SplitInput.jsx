import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { Button, TokenSelectorModal } from "../wrapped";
import { useEffect, useState } from "react";
import SplitSlider from "./SplitSlider";
import InputSlider from "react-input-slider";
import SplitModal from "./SplitModal";

const SplitInput = ({ connected, handleConnect }) => {
  const [toggleSplitModal, setToggleSplitModal] = useState(false);
  const [splitAmount, setSplitAmount] = useState("");
  const [lowerSplit, setLowerSplit] = useState(150);
  const [upperSplit, setUpperSplit] = useState(150);
  const [value, setValue] = useState(150); // Initial value set to 150
  const [splitValue, setSplitValue] = useState({ x: 0.5 });
  const [toggleTokenSelector, setToggleTokenSelector] = useState(false);
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [walletBalance, setWalletBalance] = useState(200.0234988);

  const handleSliderChange = (x) => {
    setSplitValue({ x: parseFloat(x.toFixed(2)) });
    const upperSplit = Math.round(parseFloat(x) * 300);
    const lowerSplit = Math.round((1 - parseFloat(x)) * 300);
    setLowerSplit(lowerSplit);
    setUpperSplit(upperSplit);
  };

  const handleChange = (e) => {
    // Allow only positive numbers
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numeric characters and dot
    setSplitAmount(value);
  };

  const renderBtnText = () => {
    if (!connected) {
      return "Connect Wallet";
    } else if (!splitAmount || parseFloat(splitAmount) <= 0) {
      return "Enter Amount To Split";
    } else {
      if (lowerSplit === 150) {
        return "Split";
      } else return "Split & Swap";
    }
  };

  const calculateUSD = () => {
    if (!splitAmount || parseFloat(splitAmount) === 0) {
      return 0;
    }
    return parseFloat(splitAmount * 3200).toFixed(2);
  };

  useEffect(() => {
    setSplitAmount("");
  }, [selectedToken]);

  return (
    <>
      {toggleTokenSelector && (
        <TokenSelectorModal
          setSelectedToken={(token) => setSelectedToken(token)}
          onClose={() => setToggleTokenSelector(false)}
        />
      )}

      {toggleSplitModal && (
        <SplitModal
          selectedToken={selectedToken}
          splitAmount={splitAmount}
          upperSplit={upperSplit}
          lowerSplit={lowerSplit}
          onClose={() => setToggleSplitModal(false)}
        />
      )}
      <div className="bg-white p-[20px] rounded-[30px] flex flex-col min-w-[642px]">
        <div className="flex items-center gap-1 self-end">
          <Image width={12} height={11} src={"/signal.png"} alt="signal" />
          <Image width={12} height={12} src={"/setting.png"} alt="setting" />
        </div>
        <div className="px-[15.86px] py-[13.75px] flex flex-col gap-0.5">
          <div className="text-xs">I deposit</div>
          <div className="flex items-center w-full justify-between">
            <div
              onClick={() => setToggleTokenSelector(true)}
              className="flex items-center gap-1.5 font-semibold text-[20px] cursor-pointer"
            >
              <Image
                width={24}
                height={24}
                src={`/${selectedToken.toLowerCase()}.png`}
                alt="eth"
              />
              {selectedToken}
              <Image
                className=""
                width={20}
                height={20}
                src={"/chevdown-dark.png"}
                alt="down"
              />
            </div>
            <div className="">
              <input
                onChange={handleChange}
                className="focus:outline-none bg-transparent text-[24px] text-right"
                value={splitAmount || "0.0"}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {connected && (
                <div className="text-[13px] text-[#8CA8C3] flex gap-2 items-center py-2">
                  <div>
                    <Image
                      className=""
                      width={16}
                      height={16}
                      src={"/wallet.png"}
                      alt="wallet"
                    />
                  </div>
                  <div>
                    {walletBalance} {selectedToken}
                  </div>
                  <div
                    onClick={() => setSplitAmount(walletBalance.toString())}
                    className="text-[#3290FF] font-bold cursor-pointer"
                  >
                    Max
                  </div>
                </div>
              )}
            </div>
            <div className="text-[13px] text-[#8CA8C3]">
              $ {calculateUSD() || 0}
            </div>
          </div>
          {connected && parseFloat(splitAmount) > 0 && (
            <div className="relative flex justify-center items-center">
              <div className="w-full h-[1px] bg-[#E4E4E4]"></div>
              <div className="absolute">
                <Image width={27} height={27} src={"/arrow-down.png"} alt="" />
              </div>
            </div>
          )}
        </div>

        {connected && parseFloat(splitAmount) > 0 && (
          <div>
            <div className="py-[16px] px-[15.86px]">
              <div className="flex items-center gap-1.5">
                <div className="text-xs">I receive</div>
                <Image width={10} height={10} src={"/info.png"} alt="" />
              </div>
              <div className="flex justify-between py-2">
                <div className="w-3/12">{lowerSplit} RiskON ETH</div>
                <div className="my-auto relative">
                  <InputSlider
                    axis="x"
                    xstep={0.1}
                    xmin={0}
                    xmax={1}
                    x={splitValue.x}
                    onChange={({ x }) => handleSliderChange(x)}
                    styles={{
                      track: {
                        backgroundColor: "#D3E3EB",
                        width: "268px",
                        height: "6px",
                      },
                      active: {
                        backgroundColor: "#D3E3EB",
                      },
                      thumb: {
                        width: 2,
                        height: 40,
                        backgroundColor: "#322F35",
                        borderRadius: 0,
                        position: "relative", // Make sure the parent div is relatively positioned
                      },
                    }}
                  />
                  {/* Render the "%" text dynamically */}
                  <div
                    className="absolute -top-[8px] left-0 transform -translate-x-1/2 -translate-y-full text-xs p-1 text-[#F5EFF7] bg-[#322F35] rounded-[3px]"
                    style={{ left: `${splitValue.x * 100}%` }}
                  >
                    {`${(splitValue.x * 100).toFixed(0)}%`}
                  </div>
                </div>
                <div className="w-3/12 text-end">{upperSplit} RiskOFF ETH</div>
              </div>
            </div>
          </div>
        )}

        {connected && parseFloat(splitAmount) > 0 && (
          <>
            {lowerSplit < 300 && upperSplit < 300 && (
              <div className="text-[#7A8AA0] text-[12px] pb-4 w-[320px] text-center self-center font-light">
                I want to hold both RiskON ETH and RiskOFF ETH and receive{" "}
                <span className="font-medium">{lowerSplit} ronETH</span> and{" "}
                <span className="font-medium">{upperSplit} roffETH</span>{" "}
                respectively
              </div>
            )}

            {lowerSplit === 300 && (
              <div className="text-[#7A8AA0] text-[12px] pb-4 w-[320px] text-center self-center font-light">
                I keep only RiskOn and receive <strong>150 RiskON ETH</strong>
              </div>
            )}

            {upperSplit === 300 && (
              <div className="text-[#7A8AA0] text-[12px] pb-4 w-[320px] text-center self-center font-light">
                I want to hold just RiskOFF ETH and receive{" "}
                <span className="font-medium">{upperSplit} roffETH</span>
              </div>
            )}
          </>
        )}

        <div>
          <Button
            onClick={() => setToggleSplitModal(true)}
            disabled={
              !connected || splitAmount === "" || parseFloat(splitAmount) <= 0
            }
            label={renderBtnText()}
          />
          <div className=" text-[#8CA8C3] text-[10px] pt-2">
            Price is updated every 15s
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitInput;
