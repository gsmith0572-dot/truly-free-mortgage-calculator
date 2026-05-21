import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Guides — Free Education | Truly Free Mortgage',
  description: 'Technical guides on mortgage calculations, loan types, and financing strategy. No fluff. No lead capture. Free forever.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog' },
};

export default function BlogPage() {
  const articles = [
    {
      slug: 'fha-mortgage-calculator',
      tag: 'FHA Loans',
      title: 'FHA Mortgage Calculator: Calculate Your Payment Including MIP',
      description: 'The true cost of FHA loans including upfront and annual MIP. Down payment requirements by credit score. No email required.',
    },
    {
      slug: '15-year-vs-30-year-mortgage',
      tag: 'Loan Comparison',
      title: '15-Year vs 30-Year Mortgage: The Complete Interest Cost Analysis',
      description: 'Side-by-side comparison of total interest paid, monthly payment difference, and the opportunity cost of capital for each loan term.',
    },
    {
      slug: 'mortgage-refinance-calculator',
      tag: 'Refinance',
      title: 'Mortgage Refinance Calculator: How to Calculate Your Break-Even Point',
      description: 'The exact formula lenders use to calculate refinance break-even. When refinancing makes sense and when it costs you money.',
    },
    {
      slug: 'amortization-schedule-generator',
      tag: 'Amortization',
      title: 'Amortization Schedule Generator: How to Read Your Payment Breakdown',
      description: 'How principal and interest shift every month over the life of your loan. Generate a full schedule instantly, no sign-up required.',
    },
    {
      slug: 'va-loan-calculator',
      tag: 'VA Loans',
      title: 'VA Loan Calculator: How to Calculate Your Monthly Payment with Zero Down',
      description: 'No PMI, no down payment, competitive rates. Everything veterans need to calculate their VA loan payment accurately.',
    },
    {
      slug: 'usda-rural-home-loan-calculator',
      tag: 'USDA Loans',
      title: 'USDA Rural Home Loan Calculator: Zero Down Payment for Eligible Areas',
      description: 'The most overlooked zero-down mortgage in America. Eligibility map, income limits, guarantee fees, and payment calculation.',
    },
    {
      slug: 'jumbo-loan-calculator',
      tag: 'Jumbo Loans',
      title: 'Jumbo Loan Calculator: How to Calculate Payments on High-Balance Mortgages',
      description: 'Conforming limits, rate premiums, reserve requirements, and payment calculations for loans above $806,500.',
    },
    {
      slug: 'investment-property-calculator',
      tag: 'Investment',
      title: 'Investment Property Calculator: Mortgage, Cash Flow, and Returns Explained',
      description: 'Down payment requirements, rate premiums, cash flow analysis, cap rate, and cash-on-cash return for investment properties.',
    },
    {
      slug: 'arm-vs-fixed-rate',
      tag: 'Loan Comparison',
      title: 'ARM vs Fixed Rate Mortgage: How to Calculate Which Saves You More',
      description: 'Cap structures, worst-case payment scenarios, break-even horizon, and when an adjustable-rate mortgage makes financial sense.',
    },
    {
      slug: 'mortgage-payoff-calculator',
      tag: 'Payoff Strategy',
      title: 'Mortgage Payoff Calculator: How Extra Payments Eliminate Years and Save Thousands',
      description: 'Biweekly payments, lump-sum strategy, invest vs pay off analysis, and how to ensure your lender applies payments correctly.',
    },
    {
      slug: 'calculadora-hipoteca-fha',
      tag: 'En Español',
      title: 'Calculadora de Hipoteca FHA: Cómo Calcular Tu Pago Incluyendo el Seguro MIP',
      description: 'Requisitos de pago inicial, seguro MIP explicado, límites 2026 y comparación FHA vs convencional. Sin registro requerido.',
    },
    {
      slug: 'calculadora-amortizacion',
      tag: 'En Español',
      title: 'Calculadora de Amortización: Cómo Leer Tu Tabla de Pagos Hipotecarios',
      description: 'Por qué los primeros años son casi todo interés, cómo los pagos extra transforman tu préstamo, y comparativa 15 vs 30 años.',
    },
  ];

  const tagColors: Record<string, string> = {
    'FHA Loans': 'text-blue-600 bg-blue-50',
    'Loan Comparison': 'text-purple-600 bg-purple-50',
    'Refinance': 'text-orange-600 bg-orange-50',
    'Amortization': 'text-teal-600 bg-teal-50',
    'VA Loans': 'text-red-600 bg-red-50',
    'USDA Loans': 'text-green-600 bg-green-50',
    'Jumbo Loans': 'text-indigo-600 bg-indigo-50',
    'Investment': 'text-amber-600 bg-amber-50',
    'Payoff Strategy': 'text-cyan-600 bg-cyan-50',
    'En Español': 'text-rose-600 bg-rose-50',
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <nav className="bg-white px-6 h-16 flex items-center shadow-[0_1px_3px_rgb(0_0_0/0.06)]">
        <a href="/mortgage-calculator" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white"/></svg>
          </div>
          <span className="font-bold text-[15px] tracking-tight text-gray-900">Truly <span className="text-blue-600">Free</span> Mortgage</span>
        </a>
        <div className="ml-auto flex gap-6">
          <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-800">Calculator</a>
          <a href="/blog" className="text-sm text-blue-600 font-medium">Blog</a>
        </div>
      </nav>

      <div className="max-w-[760px] mx-auto px-6 py-12">
        <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Mortgage Education</div>
        <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-3">Mortgage Guides</h1>
        <p className="text-[16px] text-gray-500 leading-relaxed mb-10">
          Technical guides on mortgage calculations, loan types, and financing strategy. No fluff. No lead capture. 12 articles.
        </p>

        <div className="space-y-4">
          {articles.map(({ slug, tag, title, description }) => (
            <a key={slug} href={'/blog/' + slug} className="block bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] hover:shadow-[0_6px_12px_-2px_rgb(0_0_0/0.12)] transition-shadow">
              <div className={"inline-block text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded mb-3 " + (tagColors[tag] || 'text-blue-600 bg-blue-50')}>{tag}</div>
              <h2 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug">{title}</h2>
              <p className="text-[14px] text-gray-500 leading-relaxed">{description}</p>
              <p className="text-[13px] text-blue-600 font-semibold mt-3">Read article →</p>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mt-10" style={{ minHeight: 80 }}>Advertisement</div>
      </div>
    </div>
  );
}
