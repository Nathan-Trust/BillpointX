import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <Separator className="mb-8" />

      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Introduction
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            At BillPointX, your privacy matters to us. This Privacy Policy
            explains how we collect, use, disclose, and protect your personal
            information when you use our mobile application and services.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            By accessing or using BillPointX services, you agree to the
            practices described in this policy. We're committed to handling your
            data responsibly and transparently because your trust is key to our
            success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Information We Collect
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>

          <div className="ml-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Types of data collected:
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  Personal Data: While using our Service, we may ask you to
                  provide us with certain personally identifiable information
                </li>
                <li>
                  Usage Data: We collect information on how the Service is
                  accessed and used. This Usage Data may include information
                  such as your computer's Internet Protocol address (e.g. IP
                  address)
                </li>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We may use your Personal Data to contact you with newsletters,
              marketing or promotional materials, and other information that may
              be of interest to you. You can opt out of receiving any, or all,
              of these communications from us by following the unsubscribe link
              or instructions provided in any email we send.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Use of Data
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BillPointX uses the collected data for various purposes:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our Service
            </li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Retention of Data
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BillPointX will retain your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your Personal Data to the extent necessary to comply
            with our legal obligations, resolve disputes, and enforce our legal
            agreements and policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Transfer of Data
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Disclosure of Data
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BillPointX may disclose your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of BillPointX</li>
            <li>
              To prevent or investigate possible wrongdoing in connection with
              the Service
            </li>
            <li>
              To protect the personal safety of users of the Service or the
              public
            </li>
            <li>To protect against legal liability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Security of Data
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Your Rights
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights covered by GDPR. BillPointX aims to
            take reasonable steps to allow you to correct, amend, delete, or
            limit the use of your Personal Data.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you wish to be informed what Personal Data we hold about you and
            if you want it to be removed from our systems, please contact us at
            billpointx@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "effective date" at the top of this Privacy Policy.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Contact Us
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>By email: billpointx@gmail.com</li>
            <li>By phone: +234 902 479 6274</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            This Privacy Policy was last updated on May 23, 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
