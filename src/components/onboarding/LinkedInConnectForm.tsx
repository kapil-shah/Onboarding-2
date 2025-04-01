import React, { useState } from "react";
import { LinkedInIcon } from "@/components/ui/icons";

export const LinkedInConnectForm: React.FC = () => {
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const isValidUrl = linkedInUrl.trim().startsWith("https://linkedin.com/in/");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedInUrl(e.target.value);
  };

  const handleImport = () => {
    if (isValidUrl) {
      // Handle the import logic here
      console.log("Importing profile from:", linkedInUrl);
    }
  };

  return (
    <section className="w-[714px] mb-[228px] p-[27px] rounded-[20px] max-md:w-[90%] max-md:max-w-[714px] max-sm:p-5">
      <h2 className="text-[#3D3D3D] text-xl font-semibold text-center mb-[11px]">
        Connect Your LinkedIn
      </h2>
      <p className="text-[#626B76] text-base text-center mb-[75px]">
        We'll use your professional details to help create your expert profile.
      </p>
      <div className="w-[462px] mx-auto my-0 max-md:w-full">
        <label
          htmlFor="linkedin-url"
          className="text-[#3D3D3D] text-base font-semibold mb-2 block"
        >
          LinkedIn Profile URL
        </label>
        <div className="flex gap-[19px] max-sm:flex-col">
          <div className="relative flex-1">
            <LinkedInIcon
              className="absolute left-[15px] top-[15px] w-[18px] h-[18px] text-[#626B76]"
              aria-hidden="true"
            />
            <input
              id="linkedin-url"
              type="text"
              placeholder="https://linkedin.com/in/yourprofile"
              value={linkedInUrl}
              onChange={handleInputChange}
              className="w-full h-12 border text-sm text-[rgba(98,107,118,0.6)] bg-[#F7F7F5] pl-[45px] rounded-xl border-solid border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#5683D2]"
            />
          </div>
          <button
            onClick={handleImport}
            disabled={!isValidUrl}
            className="w-[89px] h-[43px] text-white text-base bg-[#5683D2] rounded-[9px] border-none max-sm:w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Import
          </button>
        </div>
      </div>
    </section>
  );
};
