import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}
function CardWrapper({ children, className }: CardWrapperProps) {
  return <div className={`rounded-xl bg_sec ${className}`}>{children}</div>;
}

export default CardWrapper;
