import { useMemo } from "react";

const TextLabelForPhoneNumber = ({
  lastAddress,
  mojo,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propPadding,
}) => {
  const textLabelForPhoneNumberStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propPadding]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[10px_0px] min-w-[170px] text-left text-sm text-others-white font-aeonik-pro"
      style={textLabelForPhoneNumberStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[0px_2px]">
        <div className="relative leading-[160%]">{lastAddress}</div>
        <div className="relative leading-[160%] font-medium font-body-medium-medium text-alerts-error-base">
          *
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-gray-700 flex flex-row items-start justify-start pt-4 pb-[15px] pr-6 pl-[10.899999999999636px] text-lg border-[1.5px] border-solid border-gray-600">
        <div className="flex-1 relative leading-[160%] font-medium">{mojo}</div>
      </div>
    </div>
  );
};

export default TextLabelForPhoneNumber;
