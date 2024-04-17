import Image from "next/image";
import { useState } from "react";

const ListItem = ({ item }) => (
  <li className="relative">
    <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>

    <div className="flex justify-between w-full pl-2">
      <div>{item?.label}</div>
      <div>{item?.value}</div>
    </div>
  </li>
);

const ListWithLines = ({ items }) => (
  <ul className="relative w-full mb-2 text-[#5A7490]">
    {items.map((item, index) => (
      <div key={index} className="flex flex-col gap-2 pb-2">
        {index > 0 && (
          <div className="absolute w-[1px] left-[-3.5px] top-[10%] h-[70%] bg-white"></div>
        )}

        <ListItem item={item} />
      </div>
    ))}
  </ul>
);

const TransactionSteps = () => {
  const [toggleSteps, setToggleSteps] = useState(false);
  const items = [
    {
      label: "Collateral Deposited",
      value: "150ETH",
    },

    {
      label: "Smart Tokens Minted",
      value: "150 RiskON ETH and 150 RiskOFF ETH",
    },

    {
      label: "Swap From",
      value: "150 RiskON ETH",
    },

    {
      label: "Swap To",
      value: "150 RiskOFF ETH",
    },
  ];

  return (
    <div className="py-4">
      <div className="rounded-[20px] border border-white">
        <div
          onClick={() => setToggleSteps(!toggleSteps)}
          className="flex items-center justify-between px-[10px] py-[5px] text-xs cursor-pointer"
        >
          <div>Transaction Steps</div>
          <div>
            <Image
              className=""
              width={20}
              height={20}
              src={`/${toggleSteps ? "chevup-dark" : "chevdown-dark"}.png`}
              alt="down"
            />
          </div>
        </div>
        {toggleSteps && (
          <div className="flex items-center px-[12px] gap-0 pt-[8px] text-xs">
            <ListWithLines items={items} />
          </div>
        )}
      </div>

      <div className="text-xs py-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>Split Exchange Rate</div>
          <div>1 ETH = 1 ronETH + 1 roffETH</div>
        </div>

        <div className="flex items-center justify-between">
          <div>Split Fee</div>
          <div>$0</div>
        </div>

        <div className="flex items-center justify-between">
          <div>Estimated GAS</div>
          <div>$2</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSteps;
