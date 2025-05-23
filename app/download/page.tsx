import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Download BillPointX</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get the BillPointX app on your device and start managing your bills with ease. Available for iOS and Android.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
        <Link href="#" className="inline-block">
          <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Download on the App Store"
            width={200}
            height={60}
            className="h-16 w-auto"
          />
        </Link>
        <Link href="#" className="inline-block">
          <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Get it on Google Play"
            width={200}
            height={60}
            className="h-16 w-auto"
          />
        </Link>
      </div>

      <Tabs defaultValue="features" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="features">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Bill Payments"
              description="Pay for electricity, water, internet, and more in seconds."
            />
            <FeatureCard title="Mobile Recharge" description="Top up airtime and data for any network provider." />
            <FeatureCard title="TV Subscriptions" description="Renew your cable TV subscriptions with ease." />
            <FeatureCard
              title="Virtual Cards"
              description="Create virtual cards for online payments and subscriptions."
            />
            <FeatureCard title="Gift Cards" description="Purchase and redeem gift cards from popular retailers." />
            <FeatureCard title="Payment History" description="Track all your transactions in one place." />
          </div>
        </TabsContent>

        <TabsContent value="requirements">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">iOS Requirements</h3>
              <ul className="space-y-2">
                <RequirementItem text="iOS 12.0 or later" />
                <RequirementItem text="Compatible with iPhone, iPad, and iPod touch" />
                <RequirementItem text="Requires an Apple ID" />
                <RequirementItem text="50MB free space" />
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Android Requirements</h3>
              <ul className="space-y-2">
                <RequirementItem text="Android 6.0 or later" />
                <RequirementItem text="Compatible with phones and tablets" />
                <RequirementItem text="Google Play Store account" />
                <RequirementItem text="45MB free space" />
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I download the app?</h3>
              <p className="text-gray-600">
                You can download the app from the App Store for iOS devices or from Google Play for Android devices.
                Simply click on the respective download button above.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is the app free to download?</h3>
              <p className="text-gray-600">
                Yes, the BillPointX app is completely free to download. There are no hidden charges for using the app.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use the app on multiple devices?</h3>
              <p className="text-gray-600">
                Yes, you can use your BillPointX account on multiple devices. Simply download the app and sign in with
                your credentials.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I can't download the app?</h3>
              <p className="text-gray-600">
                If you're having trouble downloading the app, make sure your device meets the minimum requirements. If
                you still have issues, contact our support team for assistance.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function RequirementItem({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-green-500 mr-2" />
      <span>{text}</span>
    </li>
  )
}
