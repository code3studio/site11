"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AssignToIcon,
  BacklogIcon,
  NoPriorityIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from "./icons/command-bar";

const commandOptions = [
  {
    label: "Check Balance",
    icon: PersonIcon, // Replace with a relevant Solana-specific icon if available
    subOptions: [
      { label: "My Wallet", icon: PersonIcon },
      { label: "Another Wallet", icon: AssignToIcon },
    ],
  },
  {
    label: "View Blockchain Info",
    icon: ChangeStatusIcon, // Replace with an icon that represents "info" or "blockchain"
    subOptions: [
      { label: "Current Block", icon: BacklogIcon },
      { label: "Current Epoch", icon: InProgressIcon },
      { label: "Transaction Count", icon: DoneIcon },
    ],
  },
  {
    label: "Analyze Wallet Activity",
    icon: ChangePriorityIcon, // Replace with an activity analysis-related icon
    subOptions: [
      { label: "Transaction History", icon: NoPriorityIcon },
      { label: "Token Holdings", icon: UrgentIcon },
      { label: "NFT Collection", icon: TodoIcon },
    ],
  },
  {
    label: "Submit Transactions",
    icon: AddLabels, // Replace with a transaction-related icon
    subOptions: [
      { label: "Send SOL", icon: () => <LabelIcon type="send" /> },
      { label: "Stake SOL", icon: () => <LabelIcon type="stake" /> },
      { label: "Delegate Stake", icon: () => <LabelIcon type="delegate" /> },
    ],
  },
] as const;


export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    // If no search value is provided, we return all options.
    if (searchValue === "") return options;

    // If a search value is provided, we do a simple search based on that input.
    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
          opened && "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
        AI-Powered Dashboard Demo
        </span>
        <input
          placeholder="Type a command or search..."
          className="w-full bg-transparent p-5 text-lg outline-none"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <div className="flex w-full flex-col text-sm text-off-white">
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              key={label}
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSetSelectedOption(clickedRootItem ? index : null);
                setSearchValue("");
                if (!clickedRootItem) {
                  setOpened(false);
                  // We stop propagation to prevent the click event from
                  // bubbling up to the window and triggering toggleCommandMenu.
                  // This should be prevented because if that funtion ran, it would
                  // oterwise reopen the menu again, because it registers a click
                  // INSIDE the menu.
                  ev.stopPropagation();
                }
              }}
              className="command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
