
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Anti-Surveillance",
  description:
    "Read our Terms of Service to understand how you may use the Anti-Surveillance app and website.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Acceptable Use</h2>
      <ul>
        <li>Use the app lawfully and responsibly.</li>
        <li>Do not attempt to harm people, property, or networks.</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        The app provides indicators only and does not guarantee detection. It is
        provided “as is” without warranties.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We are not liable for indirect or consequential damages arising from use
        of the app.
      </p>

      <h2>Contact</h2>
      <p>legal@antisurveillance.com</p>
    </main>
  );
}
