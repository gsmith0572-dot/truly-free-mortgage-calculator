import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Truly Free Mortgage Calculator",
  description: "Contact George Smith, founder of Truly Free Mortgage Calculator. Questions, feedback, or bug reports.",
  alternates: { canonical: "https://trulyfreemortgage.com/contact" },
};

export default function ContactPage() {
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
          <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-2">Support</div>
          <h1 className="text-2xl font-bold text-[#181c1e] tracking-tight mb-3">Contact</h1>
          <p className="text-[15px] text-[#4a5568] leading-relaxed mb-10">Questions, bug reports, or feedback — email directly. No support ticket system, no chatbot. George reads every message.</p>
          <div className="space-y-6">
            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-3">General inquiries</div>
              <a href="mailto:info@klickifyagency.com" className="text-[15px] font-semibold text-[#0058c3] hover:text-[#0070f3] transition-colors">info@klickifyagency.com</a>
            </div>
            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-3">Found a bug?</div>
              <p className="text-[14px] text-[#4a5568] leading-relaxed mb-3">Describe the calculation that produced the wrong result, the inputs you used, and what you expected to see. We will fix it and reply within 48 hours.</p>
              <a href="mailto:info@klickifyagency.com?subject=Bug Report — Truly Free Mortgage" className="text-[14px] font-semibold text-[#0058c3] hover:text-[#0070f3] transition-colors">Send bug report</a>
            </div>
            <div className="bg-[#F8F9FA] rounded-lg p-6">
              <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-3">Partnership or press</div>
              <a href="mailto:info@klickifyagency.com?subject=Partnership Inquiry" className="text-[14px] font-semibold text-[#0058c3] hover:text-[#0070f3] transition-colors">info@klickifyagency.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
