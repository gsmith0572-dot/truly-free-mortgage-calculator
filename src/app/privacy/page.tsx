import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Truly Free Mortgage Calculator",
  description: "Truly Free Mortgage Calculator privacy policy. No data collection, no tracking, no registration required.",
  alternates: { canonical: "https://trulyfreemortgage.com/privacy" },
};

export default function PrivacyPage() {
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
          <h1 className="text-2xl font-bold text-[#181c1e] tracking-tight mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-[15px] text-[#4a5568] leading-relaxed">
            <p>Last updated: May 9, 2026</p>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">No data collection</h2>
              <p>Truly Free Mortgage Calculator does not collect, store, or transmit any personal data. All mortgage calculations are performed entirely within your browser. The numbers you enter — loan amount, interest rate, income, or any other financial figures — never leave your device.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">No registration required</h2>
              <p>We do not ask for your name, email address, phone number, or any other personal information. No account is required to use any feature of this tool.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Cookies and advertising</h2>
              <p>This site uses Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#0058c3] font-medium">Google Ads Settings</a>. We do not have access to or control over cookies placed by third-party advertisers.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Analytics</h2>
              <p>We may use anonymous, aggregated analytics to understand general traffic patterns. This data contains no personally identifiable information and cannot be traced back to any individual user.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Third-party links</h2>
              <p>This site may contain links to external websites. We are not responsible for the privacy practices or content of those sites.</p>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#181c1e] mb-2">Contact</h2>
              <p>For questions about this privacy policy, contact us at <a href="mailto:info@klickifyagency.com" className="text-[#0058c3] font-medium">info@klickifyagency.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
