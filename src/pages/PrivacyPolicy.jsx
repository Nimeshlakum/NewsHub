import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 md:p-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-8">
            Privacy Policy
          </h1>

          <div className="text-lg space-y-6">
            <p>
              At <strong>NewsHub</strong>, we are committed to protecting and
              respecting your privacy. This Privacy Policy explains how we
              collect, use, and protect the personal information of our users
              when they visit our website or use our services. Please read this
              policy carefully.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information that you provide to us when you
              sign up or interact with our services. This may include:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Personal Identification Information:</strong> Name,
                  email address, and other contact details.
                </li>
                <li>
                  <strong>Technical Data:</strong> Information about your
                  device, browser, and how you interact with our platform.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect for the following purposes:
              <ul className="list-disc pl-6 mt-2">
                <li>To provide and improve our services.</li>
                <li>To send you relevant updates, notifications, and news.</li>
                <li>
                  To personalize your experience based on your preferences.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              3. Third-Party Services
            </h2>
            <p>
              <strong>NewsHub</strong> uses third-party services such as the{" "}
              <strong>News API</strong> to provide users with up-to-date news
              and articles. We do not control or store the data collected by
              these services. The News API collects data related to news
              sources, articles, and headlines but does not collect personal
              information about users unless explicitly provided.
            </p>
            <p>
              - <strong>News API:</strong> We use News API to fetch the latest
              news headlines and articles for our platform. This allows us to
              present the most relevant and current information, but we do not
              retain or share any of the data collected by News API.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies or similar tracking technologies to enhance
              your experience. Cookies help us remember your preferences and
              improve site performance.
            </p>
            <p>
              - You can control cookie settings through your browser, but
              disabling cookies may limit some functionality on our platform.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              5. Your Consent
            </h2>
            <p>
              By using <strong>NewsHub</strong>, you consent to the collection
              and use of your information as outlined in this Privacy Policy. If
              you do not agree with our practices, we advise you not to use our
              services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              6. Data Security
            </h2>
            <p>
              We take the protection of your data seriously and implement
              industry-standard security measures to prevent unauthorized
              access, alteration, or destruction of your personal information.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with the updated date. We encourage you to
              review this policy regularly to stay informed about how we are
              protecting your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how we handle your personal information, please contact us at:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Email:</strong> contact@newshub.com
              </li>
              <li>
                <strong>Phone:</strong> +1 234-567-890
              </li>
              <li>
                <strong>Address:</strong> 123 NewsHub Street, City, Country
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
