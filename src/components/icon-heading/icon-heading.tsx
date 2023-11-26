import React from "react";
interface IconHeadingProps {
  text: string;
  icon?: React.ReactNode;
}

function IconHeading(props: IconHeadingProps) {
  return (
    <div className="flex items-center gap-2 pb-4 border-b w-full border-b-border_gray">
      {props.icon}
      <p className="h4_text">{props.text}</p>
    </div>
  );
}

export default IconHeading;
