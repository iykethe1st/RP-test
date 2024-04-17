import Image from "next/image";
import SplitInput from "./SplitInput";
import { useState } from "react";
import TransactionSteps from "./TransactionSteps";

const Split = ({ connected, handleConnect }) => {
  const [toggleFaq, setToggleFaq] = useState(false);

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
          <div>
            <Image
              className=""
              width={20}
              height={20}
              src={"/chevdown-dark.png"}
              alt="down"
            />
          </div>
        </div>

        {toggleFaq && (
          <div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Split;
