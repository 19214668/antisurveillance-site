
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Anti-Surveillance",
  description:
    "Read our Privacy Policy to learn how Anti-Surveillance protects your data and respects your privacy.",
};

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        Anti-Surveillance collects email addresses submitted via the waitlist form
        for the purpose of providing beta invitations and product updates.
      </p>
      <h2>Data We Collect</h2>
      <ul>
        <li>Email address (waitlist)</li>
        <li>Basic usage analytics (aggregate, non-identifying) if enabled</li>
      </ul>
      <h2>How We Use Data</h2>
      <ul>
        <li>Send beta invites, updates, and important service notices</li>
        <li>Improve product features and reliability</li>
      </ul>
      <h2>Data Sharing</h2>
      <p>We do not sell personal data. We use trusted processors (e.g., Formspree for form handling).</p>
      <h2>Your Rights</h2>
      <p>Email us at support@antisurveillance.com to access or delete your data.</p>
      <h2>Contact</h2>
      <p>support@antisurveillance.com</p>
    </main>
  );
}
