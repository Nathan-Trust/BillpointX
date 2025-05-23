import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import AppStoreButton from "./app-store-button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="h-8 w-auto mb-6" isWhite />
            <p className="text-gray-300 mb-4">
              BillPointX is a fast, secure, and convenient bill payment app
              designed to simplify how you manage your everyday bills. From
              electricity to airtime, we help you stay in control of your
              finances—anytime, anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  T & C
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">+234 902 479 5274</p>
            <p className="text-gray-300 mb-6">billpointx@gmail.com</p>

            <h3 className="text-lg font-semibold mb-4">Get App</h3>
            <div className="flex flex-col space-y-3">
              <AppStoreButton
                iconSrc="/apple-icon.png"
                topText="Download on the"
                bottomText="App Store"
                href="https://your-app-store-link"
                variant="apple"
                className="max-w-[200px] border "
              />

              <AppStoreButton
                iconSrc="/google-icon.png"
                topText="GET IT ON"
                bottomText="Google Play"
                href="https://your-play-store-link"
                variant="google"
                className="max-w-[200px]  border"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="w-full h-px bg-gray-800"></div>
        </div>
      </div>
    </footer>
  );
}
