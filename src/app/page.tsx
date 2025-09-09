"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Shield, EyeOff, Wifi, Bluetooth, Camera, Lock, Download, Mail } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xwpnyvjr";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

const Section = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => <section id={id} className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>{children}</section>;

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setError(payload?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">Anti-Surveillance</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#wearables">Wearables</NavLink>
            <NavLink href="#download">Download</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </Section>
      </header>

      {/* Hero */}
      <Section id="home" className="py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Take back your <span className="underline decoration-slate-300">privacy</span>.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Anti-Surveillance helps you spot potential hidden cameras by scanning Wi-Fi, Bluetooth, and near-IR light —
              privately, on-device, with clear guidance you can trust.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download">
                <Button className="px-6 h-11 text-base">
                  <Download className="w-4 h-4 mr-2" /> Get the Android app
                </Button>
              </a>
              <a href="#features">
                <Button variant="secondary" className="px-6 h-11 text-base">See how it works</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <Lock className="w-4 h-4" /> No accounts • No cloud • Your data stays on your phone
            </div>
          </div>
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center rounded-2xl">
                <div className="text-center p-8">
                  <Camera className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-medium">IR Hotspot Preview</p>
                  <p className="text-sm text-gray-600">Live view highlights bright IR sources that may indicate night-vision LEDs.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">What the app checks</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Three complementary signals to raise (not prove) suspicion. Designed for hotels, rentals, changing rooms, or any
            space where you want peace of mind.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Wi-Fi scan</h3>
              <p className="text-gray-600 mt-2 text-sm">Find nearby networks and flag suspicious SSIDs/OUI vendors using on-device heuristics.</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Pattern & vendor hints</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> No cloud lookups</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Bluetooth className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Bluetooth scan</h3>
              <p className="text-gray-600 mt-2 text-sm">Detect nearby BLE devices and surface names/UUIDs commonly seen in cams and action cams.</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Short, battery-safe scans</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Clear risk scoring</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">IR hotspot viewer</h3>
              <p className="text-gray-600 mt-2 text-sm">Use the phone camera to visualise bright IR emitters typical of night-vision sensors.</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Live overlay & alerts</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> On-device processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Disclaimer: Indicators only, not proof. Use responsibly and follow local laws.
        </p>
      </Section>

      {/* Wearables */}
      <Section id="wearables" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Privacy wearables</h2>
            <p className="mt-4 text-gray-600">
              Pair the app with our prototype IR-enhanced cap/glasses that reduce night-vision facial capture.
              Designed for demos and research; consumer versions coming soon.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> 850–940nm IR LED array</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Pocket power module</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> Retroreflective accents</li>
            </ul>
          </div>
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center rounded-2xl">
                <div className="text-center p-8">
                  <Shield className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-medium">Prototype Preview</p>
                  <p className="text-sm text-gray-600">Showcase your build on TikTok/Instagram; link straight from this site.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Download / CTA */}
      <Section id="download" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Get the app</h2>
            <p className="mt-4 text-gray-600">
              Currently targeting Android first. iOS evaluation in progress. Join the list and we’ll ping you when
              Beta is live.
            </p>

            <form
              onSubmit={handleSubmit}
              action={FORM_ENDPOINT}
              method="POST"
              className="mt-6 flex flex-col gap-3 max-w-lg"
            >
              {/* Honeypot field (hidden from real users) */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              {/* Hidden subject line (optional, shows up in your Formspree inbox) */}
              <input type="hidden" name="_subject" value="New waitlist signup" />

              <Input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />

              <Button type="submit" className="h-11">
                <Mail className="w-4 h-4 mr-2" /> Join waitlist
              </Button>

              {submitted && (
                <p className="text-sm text-green-600 mt-2">
                  Thanks! You're on the waitlist.
                </p>
              )}

              {error && (
                <p className="text-sm text-red-600 mt-2">
                  {error}
                </p>
              )}
            </form>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Download className="w-6 h-6 shrink-0" />
                <div>
                  <p className="font-medium">Google Play</p>
                  <p className="text-sm text-gray-600">
                    When ready, link your Play listing here. Use QR codes in socials to drive installs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold">Contact</h2>
          <p className="mt-4 text-gray-600">Questions, partnerships, or press? Drop us a line.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardContent className="p-5 text-sm text-gray-700">
                <p className="font-medium">General</p>
                <p className="text-gray-600">support@antisurveillance.com</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-5 text-sm text-gray-700">
                <p className="font-medium">Business</p>
                <p className="text-gray-600">hello@antisurveillance.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Anti-Surveillance. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#download" className="text-gray-600 hover:text-gray-900">Download</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
