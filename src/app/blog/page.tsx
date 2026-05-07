import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Calculator Blog — Free Guides & Tools | Truly Free',
  description: 'Free mortgage guides covering FHA loans, 15 vs 30-year comparison, refinancing, amortization, and more. No registration. No email.',
  alternates: { canonical: 'https://trulyfreetools.com/blog' },
};

const articles = [
  {
    slug: 'fha-mortgage-calculator',
    category: 'FHA Loans',
    title: 'FHA Mortgage Calculator: Calculate Your Payment Including MIP',
    description: 'The true cost of FHA loans including upfront and annual MIP. Down payment requirements by credit score. No email required.',
  },
  {
    slug: '15-year-vs-30-year-mortgage',
    category: 'Loan Comparison',
    title: '15-Year vs 30-Year Mortgage: The Complete Interest Cost Analysis',
    description: 'Side-by-side comparison of total interest paid, monthly payment difference, and the opportunity cost of capital for each loan term.',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between">
        <a href="/mortgage-calculator">
          <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </a>
        <div className="flex gap-6">
          <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-700">Calculator</a>
          <a href="/blog" className="text-sm text-blue-600 font-medium">Blog</a>
        </div>
      </nav>
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-center gap-2">
        <span className="bg-blue-600 text-white text-xs font-bold tracking-widest px-2 py-0.5 rounded">TRULY FREE</span>
        <span className="text-xs text-gray-500">No registration. No email. No limits. Your data never leaves your browser.</span>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-8" style={{ minHeight: 80 }}>Advertisement</div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Mortgage Guides</h1>
        <p className="text-gray-500 mb-8">Technical guides on mortgage calculations, loan types, and financing strategy. No fluff. No lead capture.</p>
        <div className="space-y-4">
          {articles.map((a) => (
            <a key={a.slug} href={'/blog/' + a.slug} className="block bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-6 hover:shadow-[0_8px_16px_-2px_rgb(0_0_0/0.12)] transition-shadow">
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{a.category}</span>
              <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{a.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
              <p className="text-xs text-blue-600 font-semibold mt-3">Read article →</p>
            </a>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mt-8" style={{ minHeight: 80 }}>Advertisement</div>
      </div>
    </div>
  );
}
