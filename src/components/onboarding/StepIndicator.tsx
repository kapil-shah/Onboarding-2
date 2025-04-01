import React from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="relative flex justify-between w-[552px] mb-12 max-sm:w-full max-sm:max-w-[552px]">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center justify-center w-8 h-8 text-[#5F5F5F] font-semibold text-base bg-[#DADADA] rounded-[50%]",
            index + 1 <= currentStep && "bg-[#5683D2] text-white",
          )}
          aria-current={index + 1 === currentStep ? "step" : undefined}
        >
          {index + 1}
        </div>
      ))}

      {/* Connector lines */}
      {Array.from({ length: totalSteps - 1 }).map((_, index) => (
        <div
          key={`line-${index}`}
          className={cn(
            "absolute h-px w-[98px] bg-[#DADADA] top-2/4 max-sm:w-[calc((100%_-_160px)_/_4)]",
            index === 0
              ? "left-8"
              : index === 1
                ? "left-[162px]"
                : index === 2
                  ? "left-[292px]"
                  : "left-[422px]",
            index < currentStep - 1 && "bg-[#5683D2]",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};
