// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anti-Surveillance",
  description:
    "Learn what the Anti-Surveillance app does, the tech behind it, and the roadmap.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">About Anti-Surveillance</h1>

      <p className="mt-4 text-gray-700">
        Anti-Surveillance helps you spot potential hidden cameras and better
        understand nearby devices — using on-device checks for Wi-Fi, Bluetooth,
        and near-IR hotspots. No accounts, no cloud, your data stays on your phone.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">How it works</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <strong>Wi-Fi scan:</strong> surfaces SSIDs and vendor hints that are commonly
          associated with IP cameras (heuristics only, not proof).
        </li>
        <li>
          <strong>Bluetooth scan:</strong> lists nearby BLE devices and known camera-style
          names/UUIDs.
        </li>
        <li>
          <strong>IR hotspot viewer:</strong> highlights bright IR sources often used by
          night-vision modules.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Roadmap</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
        <li>Android beta</li>
        <li>Wearables demo (IR-enhanced cap / glasses)</li>
        <li>Privacy-preserving tips & education</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-gray-700">
        Questions or partnerships: <a className="underline" href="mailto:support@antisurveillance.com">support@antisurveillance.com</a>
      </p>

      <p className="mt-10 text-xs text-gray-500">
        Disclaimer: indicators only, not proof. Use responsibly and follow local laws.
      </p>
    </main>
  );
}
