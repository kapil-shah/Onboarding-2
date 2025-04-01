import React from "react";
import { CopyrightIcon } from "@/components/ui/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="flex items-center gap-2 text-[#626B76] text-base">
      <CopyrightIcon className="w-4 h-4" />
      <span>2025 Wizly. All rights reserved.</span>
    </footer>
  );
};
