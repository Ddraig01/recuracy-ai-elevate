const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-24 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        Recuracy ("we", "our", "us") respects your privacy and is committed to
        protecting your personal information.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
      <p className="mb-4">
        We may collect your name, email address, company name, and any message
        you submit through our contact forms.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">
        How We Use Your Information
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To respond to inquiries and provide our services</li>
        <li>To improve our website and offerings</li>
        <li>To communicate with you about projects and updates</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-3">Data Protection</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your data from
        unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services such as analytics and scheduling tools
        that may collect information according to their own privacy policies.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:{" "}
        <strong>hello@recuracy.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
