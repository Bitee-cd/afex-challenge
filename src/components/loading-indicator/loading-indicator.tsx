import React from "react";
import { CircularProgress } from "@mui/material";

function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress size={10} />
    </div>
  );
}

export default LoadingIndicator;
