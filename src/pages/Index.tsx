import React from "react";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { LinkedInConnectForm } from "@/components/onboarding/LinkedInConnectForm";

const Index = () => {
  return (
    <OnboardingLayout
      currentStep={1}
      title="Join the Knowledge Hub"
      subtitle="Your personalized AI knowledge platform."
    >
      <LinkedInConnectForm />
    </OnboardingLayout>
  );
};

export default Index;
