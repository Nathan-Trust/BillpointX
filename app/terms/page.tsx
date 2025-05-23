import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <Separator className="mb-8" />

      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Eligibility
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You must be at least 18 years old to use BillPointX. By registering,
            you confirm that all information you provide is accurate and
            complete. We reserve the right to terminate accounts that provide
            false information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Account Responsibility
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account login details and for all activities that occur under your
            account. Please notify us immediately of any unauthorized use.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You agree to provide accurate, current, and complete information
            during registration and to update such information to maintain its
            accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Service Usage
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BillPointX allows you to pay for utilities and services such as
            electricity, airtime, data, and more. You agree to use our Service
            only for lawful purposes and in accordance with these Terms.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You must not use our service for any illegal or unauthorized purpose
            or violate any laws in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Fees and Payments
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Some services may charge transaction fees. These will be clearly
            displayed before payment confirmation. By proceeding, you agree to
            pay all applicable fees.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            All payments are processed securely through our payment partners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Refund Policy
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Payments are generally non-refundable of requested. However, if a
            transaction error occurs, please contact our support team
            immediately. We will investigate and provide resolution where
            appropriate.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Refunds, if approved, will be processed within 7-14 business days to
            the original payment method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Service Availability
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We aim to provide continuous service but cannot guarantee 100%
            uptime. Service may be temporarily unavailable due to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Scheduled maintenance</li>
            <li>Technical issues beyond our control</li>
            <li>Third-party service provider disruptions</li>
            <li>
              Routine upgrade or service improvements for underlying payments
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Privacy</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BillPointX shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including but not
            limited to loss of profits, data, or business interruption.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Termination
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend your account at our
            discretion, without notice, for conduct that we believe violates
            these Terms or is harmful to other users or third parties, or for
            any other reason.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Governing Law
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of Nigeria, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Changes to Terms
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Any changes
            will be effective immediately upon posting. Continued use of the
            service after any such changes shall constitute your acceptance of
            such changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Contact Information
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Email: billpointx@gmail.com</li>
            <li>Phone: +234 902 479 6274</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            These Terms and Conditions were last updated on May 23, 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
