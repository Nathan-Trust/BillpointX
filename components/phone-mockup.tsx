import { Phone, Wifi, Tv, Lightbulb, Globe, CreditCard, Gift } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"

export function PhoneMockup() {
  return (
    <div className="bg-black rounded-3xl p-8 relative max-w-sm">
      <div className="bg-white rounded-3xl overflow-hidden border-8 border-gray-800 relative">
        <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-lg z-10 flex items-center justify-center">
          <div className="w-20 h-4 bg-black rounded-b-lg"></div>
        </div>
        <div className="pt-8 px-4 pb-6">
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs">9:41</div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4"></div>
              <div className="w-4 h-4"></div>
              <div className="w-4 h-4"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-1">Features</h2>
          <p className="text-sm text-gray-600 mb-6">Explore our range of features designed to simplify your life.</p>

          <div className="grid grid-cols-3 gap-4">
            <FeatureCard icon={<Phone className="h-5 w-5" />} title="Top-Up" />
            <FeatureCard icon={<Wifi className="h-5 w-5" />} title="Data" />
            <FeatureCard icon={<Tv className="h-5 w-5" />} title="CableTV" />
            <FeatureCard icon={<Lightbulb className="h-5 w-5" />} title="Power" />
            <FeatureCard icon={<Globe className="h-5 w-5" />} title="Internet" />
            <FeatureCard icon={<CreditCard className="h-5 w-5" />} title="Virtual Card" />
            <FeatureCard icon={<Gift className="h-5 w-5" />} title="Giftcard" />
          </div>
        </div>
      </div>
    </div>
  )
}
