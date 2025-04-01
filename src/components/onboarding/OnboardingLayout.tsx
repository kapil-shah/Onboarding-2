import React, { ReactNode } from "react";
import { Footer } from "@/components/common/Footer";
import { StepIndicator } from "@/components/onboarding/StepIndicator";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps?: number;
  title: string;
  subtitle: string;
  logoUrl?: string;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps = 5,
  title,
  subtitle,
  logoUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/3a6c2efac3e15b0134bbeeea8ecd09a7af2dd2e2", // Default logo URL placeholder
}) => {
  return (
    <div className="max-w-none relative w-full min-h-screen flex flex-col items-center bg-[#F7F7F5] mx-auto px-5 py-[62px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <header className="mb-[49px]">
        <img src={logoUrl} alt="Wizly Logo" className="w-[131px] h-10" />
      </header>

      <h1 className="text-[#3D3D3D] text-[25px] font-semibold mb-[11px]">
        {title}
      </h1>

      <p className="text-[#626B76] text-base mb-12">{subtitle}</p>

      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
