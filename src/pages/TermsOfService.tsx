const TermsOfService = () => {
  return (
    <div className="min-h-screen px-6 py-24 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>

      <p className="mb-6">
        By using Recuracy’s website and services, you agree to the following
        terms and conditions.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Services</h2>
      <p className="mb-4">
        Recuracy provides AI automation and consulting services. All services
        are provided on a best-effort basis.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">User Responsibilities</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>You agree to provide accurate information</li>
        <li>You agree not to misuse the website or services</li>
        <li>You agree not to attempt to breach security</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-3">Limitation of Liability</h2>
      <p className="mb-4">
        Recuracy shall not be liable for any indirect or consequential damages
        arising from the use of our services.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Changes to Terms</h2>
      <p className="mb-4">
        We may update these terms from time to time. Continued use of our
        services constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
      <p>
        For questions about these Terms, contact us at:{" "}
        <strong>hello@recuracy.com</strong>
      </p>
    </div>
  );
};

export default TermsOfService;
