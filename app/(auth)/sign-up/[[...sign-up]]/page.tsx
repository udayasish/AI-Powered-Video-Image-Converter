import React from 'react';
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#14161C] p-4">
      <div className="w-full max-w-md p-6 space-y-8 bg-[#14161C] rounded-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Welcome to AI Image Video Converter
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign up to access your account
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              card: "bg-transparent shadow-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary: 
                'bg-indigo-600 hover:bg-indigo-700 text-white',
              footerActionLink: 
                'text-indigo-400 hover:text-indigo-300',
              formFieldInput: "bg-[#2C3037] border-gray-700 text-white",
              formFieldLabel: "text-gray-400",
              dividerLine: "bg-gray-700",
              dividerText: "text-gray-400",
              socialButtonsBlockButton: "bg-[#2C3037] border-gray-700 text-white hover:bg-[#35383F]",
              socialButtonsBlockButtonText: "text-white",
              formFieldInputShowPasswordButton: "text-gray-400",
            },
          }}
        />
      </div>
    </div>
  );
}
