import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Truly Free Mortgage Calculator",
  description: "Terms of service for Truly Free Mortgage Calculator. Free to use, no registration, no liability for financial decisions.",
  alternates: { canonical: "https://trulyfreemortgage.com/terms" },
};

export default function TermsPage() {
  return (
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
          <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-2">Legal</div>
          <h1 className="text-2xl font-bold text-[#181c1e] tracking-tight mb-8">Terms of Service</h1>
          <div className="space-y-6 text-[15px] text-[#4a5568] leading-relaxed">
            <p>Last updated: May 9, 2026</p>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Free to use</h2>
              <p>Truly Free Mortgage Calculator is provided free of charge with no registration, no subscription, and no hidden fees. You may use this tool as often as you like for personal or professional purposes.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">For informational purposes only</h2>
              <p>The calculations provided by this tool are estimates based on the inputs you provide. They are intended for informational and educational purposes only. This tool does not constitute financial, legal, or mortgage advice. Always consult a licensed mortgage professional before making any financial decisions.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Accuracy</h2>
              <p>We make every effort to ensure the accuracy of our calculations. However, we make no guarantees that results are error-free or applicable to your specific loan situation. Actual mortgage terms, rates, and payments will vary based on lender requirements and your financial profile.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">No liability</h2>
              <p>Klickify Agency and Truly Free Mortgage Calculator are not liable for any financial decisions made based on results from this tool. Use of this calculator is at your own risk.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Advertising</h2>
              <p>This site is monetized through Google AdSense. Advertisements displayed on this site are served by Google and do not constitute endorsements by Truly Free Mortgage Calculator or Klickify Agency.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Changes to these terms</h2>
              <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of any updated terms.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Contact</h2>
              <p>For questions about these terms, contact us at <a href="mailto:george@klickifyagency.com" className="text-[#0058c3] font-medium">george@klickifyagency.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
