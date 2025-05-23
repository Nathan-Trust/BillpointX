import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneMockup } from "@/components/phone-mockup";
import AppStoreButton from "@/components/app-store-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Simplify your bill payments with
              <br />
              <span className="font-extrabold">BillPointX</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Pay electricity, data, airtime, and more with just a tap. Fast,
              secure, and hassle-free!
            </p>
            <div className="flex space-x-4">
              <AppStoreButton
                iconSrc="/apple-icon.png"
                topText="Download on the"
                bottomText="App Store"
                href="https://your-app-store-link"
                variant="apple"
                className="max-w-[200px]"
              />

              <AppStoreButton
                iconSrc="/google-icon.png"
                topText="GET IT ON"
                bottomText="Google Play"
                href="https://your-play-store-link"
                variant="google"
                className="max-w-[200px]"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <PhoneMockup />
          </div>
        </section>
      </main>
    </div>
  );
}
