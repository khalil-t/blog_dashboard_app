'use client';

import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const TooltipProvider = RadixTooltip.Provider;
const TooltipRoot = RadixTooltip.Root;
const TooltipTrigger = RadixTooltip.Trigger;
const TooltipContent = RadixTooltip.Content;
const TooltipArrow = RadixTooltip.Arrow;

export {
  TooltipProvider,
  TooltipRoot as Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
};
