import classNames from "classnames";

type LabelType = "send" | "stake" | "delegate";

const typeClassNames = {
  send: "bg-[#eb5757]",
  stake: "bg-[#bb87fc]",
  delegate: "bg-[#4da7fc]",
};

export const LabelIcon = ({ type }: { type: LabelType }) => (
  <div
    className={classNames(
      "flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full",
      typeClassNames[type]
    )}
  />
);
