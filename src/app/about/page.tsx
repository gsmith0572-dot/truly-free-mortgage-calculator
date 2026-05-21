import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About George Smith — Truly Free Mortgage Calculator",
  description: "George Smith is the founder of Klickify Agency and creator of Truly Free Mortgage Calculator. Free tools that respect your privacy.",
  alternates: { canonical: "https://trulyfreemortgage.com/about" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About George Smith",
  description: "Founder of Klickify Agency and creator of the Truly Free ecosystem of financial tools.",
  url: "https://trulyfreemortgage.com/about",
  author: {
    "@type": "Person",
    name: "George Smith",
    url: "https://www.linkedin.com/in/george-smith-832113217/",
    email: "info@klickifyagency.com",
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: "Klickify Agency" },
  },
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="min-h-screen bg-[#F8F9FA]">
        <nav className="bg-white shadow-[0_1px_3px_0_rgb(0_0_0/0.08)] px-6 h-20 flex items-center justify-between">
          <a href="/mortgage-calculator">
            <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
          </a>
          <div className="flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-[#4a5568] hover:text-[#181c1e]">Calculator</a>
            <a href="/blog" className="text-sm text-[#4a5568] hover:text-[#181c1e]">Blog</a>
          </div>
        </nav>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-16 pb-24">
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] p-10">
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
              <div className="flex-shrink-0">
                <Image src="/george-smith.png" alt="George Smith — Founder, Klickify Agency" width={96} height={96} style={{ borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-1">Founder</div>
                <h1 className="text-2xl font-bold text-[#181c1e] tracking-tight mb-1">George Smith</h1>
                <div className="text-sm font-semibold text-[#0058c3] mb-4">Klickify Agency</div>
                <div className="flex items-center gap-4">
                  <a href="mailto:info@klickifyagency.com" className="text-sm text-[#718096] hover:text-[#181c1e] transition-colors">info@klickifyagency.com</a>
                  <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0058c3] hover:text-[#0070f3] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="space-y-5 text-[15px] text-[#4a5568] leading-relaxed">
              <p>I built Truly Free Mortgage Calculator because I was tired of tools that pretend to be free and then ask for your email, your credit card, or both. Mortgage calculators are basic math. They should not cost anything, require an account, or send your data to a server.</p>
              <p>This calculator runs entirely in your browser. The numbers you enter never leave your device. No tracking, no registration, no upsell at the end.</p>
              <p>I run Klickify Agency, a small digital agency focused on building tools that actually work for people. Truly Free Mortgage is part of a broader ecosystem of free utilities — same philosophy across all of them: zero friction, client-side processing, and no hidden business model.</p>
              <p>If you have feedback or found a bug, email me directly. I read every message.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-[rgba(74,85,104,0.1)] flex flex-col sm:flex-row gap-3">
              <a href="/mortgage-calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0058c3] text-white text-sm font-semibold rounded-lg hover:bg-[#0070f3] transition-colors">Use the Calculator</a>
              <a href="mailto:info@klickifyagency.com" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#F8F9FA] text-[#4a5568] text-sm font-semibold rounded-lg hover:bg-[#e2e8f0] transition-colors">Send Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
