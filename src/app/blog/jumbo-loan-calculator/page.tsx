import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jumbo Loan Calculator — Free, No Sign-Up | Truly Free Mortgage',
  description: 'Calculate your jumbo loan payment instantly. Loans above conforming limits, no registration required. Understand rates, reserves, and qualification standards.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/jumbo-loan-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Jumbo Loan Calculator: How to Calculate Payments on High-Balance Mortgages',
      'description': 'A complete guide to jumbo loan limits, qualification requirements, rate premiums, and how to calculate your monthly payment on loans above the conforming limit.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Organization', 'name': 'Truly Free Mortgage' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/jumbo-loan-calculator',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the jumbo loan limit in 2026?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'In 2026 the conforming loan limit set by the FHFA is $806,500 for single-family homes in most U.S. counties. In high-cost areas such as parts of California, New York, and Hawaii the limit is up to $1,209,750. Any loan above these thresholds is classified as a jumbo loan.' },
        },
        {
          '@type': 'Question',
          'name': 'Do jumbo loans have higher interest rates?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Jumbo loan rates have historically been 0.25% to 0.5% higher than conforming loan rates. However in recent years the spread has narrowed and jumbo rates are sometimes at or below conforming rates, particularly for borrowers with strong credit profiles and significant assets.' },
        },
        {
          '@type': 'Question',
          'name': 'What credit score is needed for a jumbo loan?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Most jumbo lenders require a minimum credit score of 700 to 720. For the best rates and lowest down payment requirements a score of 740 or higher is typically needed. Some lenders require 760 or above for loan amounts above $2 million.' },
        },
        {
          '@type': 'Question',
          'name': 'How much down payment is required for a jumbo loan?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Jumbo loans typically require 10% to 20% down payment. Some lenders offer 10% down jumbo products for strong borrowers but 20% is the most common requirement. Unlike conforming loans there is no PMI on most jumbo products, but lenders offset this risk through stricter qualification standards.' },
        },
        {
          '@type': 'Question',
          'name': 'What cash reserves are required for a jumbo loan?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Jumbo lenders typically require 6 to 12 months of mortgage payments in liquid reserves after closing. On a $2 million loan with a $10,000 monthly payment that means $60,000 to $120,000 in verifiable liquid assets beyond the down payment and closing costs.' },
        },
      ],
    },
  ],
};

export default function JumboLoanCalculatorPage() {
  const faqs = [
    {
      q: 'What is the jumbo loan limit in 2026?',
      a: 'In 2026 the conforming loan limit set by the FHFA is $806,500 for single-family homes in most U.S. counties. In high-cost areas such as parts of California, New York, and Hawaii the limit is up to $1,209,750. Any loan above these thresholds is classified as a jumbo loan.',
    },
    {
      q: 'Do jumbo loans have higher interest rates?',
      a: 'Jumbo loan rates have historically been 0.25% to 0.5% higher than conforming loan rates. However in recent years the spread has narrowed and jumbo rates are sometimes at or below conforming rates, particularly for borrowers with strong credit profiles and significant assets.',
    },
    {
      q: 'What credit score is needed for a jumbo loan?',
      a: 'Most jumbo lenders require a minimum credit score of 700 to 720. For the best rates and lowest down payment requirements a score of 740 or higher is typically needed. Some lenders require 760 or above for loan amounts above $2 million.',
    },
    {
      q: 'How much down payment is required for a jumbo loan?',
      a: 'Jumbo loans typically require 10% to 20% down payment. Some lenders offer 10% down jumbo products for strong borrowers but 20% is the most common requirement. Unlike conforming loans there is no PMI on most jumbo products, but lenders offset this risk through stricter qualification standards.',
    },
    {
      q: 'What cash reserves are required for a jumbo loan?',
      a: 'Jumbo lenders typically require 6 to 12 months of mortgage payments in liquid reserves after closing. On a $2 million loan with a $10,000 monthly payment that means $60,000 to $120,000 in verifiable liquid assets beyond the down payment and closing costs.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Jumbo Loan Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Jumbo Loan Calculator: How to Calculate Payments on High-Balance Mortgages
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            When a loan exceeds the conforming limit set by the Federal Housing Finance Agency it becomes a jumbo loan — and the rules change significantly. No government backing, stricter qualification standards, and a different risk calculus for lenders. Here is how jumbo loans work, what they cost, and how to calculate your payment accurately.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Table of Contents</div>
            <ol className="space-y-2">
              {[
                ['#limits', 'Conforming vs. Jumbo Loan Limits in 2026'],
                ['#qualification', 'Jumbo Loan Qualification Standards'],
                ['#rates', 'Jumbo Loan Rates and the Conforming Spread'],
                ['#reserves', 'Cash Reserve Requirements'],
                ['#calculate', 'How to Calculate Your Jumbo Payment'],
                ['#generate', 'Calculate Your Payment for Free'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="limits" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Conforming vs. Jumbo Loan Limits in 2026</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The conforming loan limit is the maximum loan amount that Fannie Mae and Freddie Mac will purchase from lenders. In 2026 this limit is $806,500 for a single-family home in most U.S. counties. In designated high-cost areas — primarily coastal metro markets — the limit extends up to $1,209,750.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Any loan that exceeds these thresholds cannot be sold to Fannie or Freddie and must be held on the lender&apos;s balance sheet or sold to private investors. This changes the economics for lenders and results in different underwriting standards, reserve requirements, and rate structures.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The practical implication: a borrower financing $810,000 in a standard-cost county is in jumbo territory even though they are only $3,500 above the conforming limit. The qualification process and rate they receive will differ materially from a borrower at $800,000.
          </p>

          <h2 id="qualification" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Jumbo Loan Qualification Standards</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Because jumbo loans carry no government guarantee, lenders apply significantly more rigorous standards to protect themselves against default risk.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Credit score requirements start at 700 for most lenders and rise to 720 or 740 for better pricing. Loans above $1.5 million often require 760 or higher. Debt-to-income ratios are typically capped at 43% compared to 50% for many conforming loan programs. Self-employed borrowers face additional documentation scrutiny with two years of tax returns and often a profit-and-loss statement prepared by a CPA.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Down payment requirements range from 10% for well-qualified borrowers to 20% or more for larger loan amounts. Some lenders offer 10% down jumbo products but these carry rate premiums and stricter reserve requirements. Unlike conforming loans with PMI, most jumbo loans simply require larger down payments to manage lender risk.
          </p>

          <h2 id="rates" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Jumbo Loan Rates and the Conforming Spread</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Historically jumbo rates ran 0.25% to 0.5% above conforming rates. This premium reflected the additional risk lenders assumed by keeping these loans on their books. In recent years the spread has compressed significantly and in some periods jumbo rates have been at or below conforming rates.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The reason for this compression: jumbo borrowers tend to have high credit scores, substantial assets, and low default rates. Lenders compete aggressively for this customer segment, particularly banks that can use jumbo loans as anchor relationships for wealth management and deposit products.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The practical advice: shop jumbo loans at multiple institution types. Banks often beat mortgage companies on jumbo products. Credit unions can be competitive for members. Pricing varies more widely in the jumbo market than in the conforming market because there is no standardized secondary market to compress spreads.
          </p>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {['Loan Amount', 'Type', 'Typical Rate', 'Monthly P&I'].map((h, i) => (
                    <th key={h} className={"px-4 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['$750,000', 'Conforming', '6.50%', '$4,743'],
                  ['$810,000', 'Jumbo', '6.625%', '$5,188'],
                  ['$1,200,000', 'Jumbo', '6.75%', '$7,783'],
                  ['$2,000,000', 'Jumbo', '6.875%', '$13,142'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row[1]}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row[2]}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-800">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="reserves" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Cash Reserve Requirements</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Reserve requirements are one of the most significant practical differences between conforming and jumbo loans. Conforming loans often require only two months of reserves. Jumbo loans typically require six to twelve months of full mortgage payments in liquid assets after closing.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Liquid assets include checking and savings accounts, money market funds, and vested retirement accounts at a discounted value. Real estate equity, business assets, and unvested stock options typically do not count. On a $1,500,000 loan with an $9,500 monthly payment, twelve months of reserves means $114,000 in liquid assets beyond the down payment and closing costs.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            This reserve requirement catches many otherwise-qualified borrowers by surprise. Running the numbers before applying gives you time to position assets appropriately across liquid and illiquid accounts.
          </p>

          <h2 id="calculate" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How to Calculate Your Jumbo Payment</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The payment calculation for a jumbo loan uses the same amortization formula as any fixed-rate mortgage. The key differences are the rate input, which may carry a small premium over conforming rates, and the absence of PMI even at lower down payment percentages on most products.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Example: You purchase a $1,000,000 home with 20% down. Your loan amount is $800,000. This is just below the conforming limit in most counties so you may still be in conforming territory. At $810,000 you cross into jumbo. At a 6.625% jumbo rate over 30 years your monthly principal and interest is $5,188. Add property taxes at roughly $1,000 per month and insurance at $150 for a total payment of approximately $6,338.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            For a $2,000,000 purchase with 20% down the loan is $1,600,000. At 6.75% over 30 years the P&I is $10,379. Taxes and insurance on a home of this value might add $2,000 per month, bringing total monthly cost to over $12,000.
          </p>

          <h2 id="generate" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Calculate Your Payment for Free</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most jumbo mortgage calculators online are designed to capture your contact information and route you to a loan officer. Truly Free Mortgage calculates your complete payment with full amortization schedule for any loan amount with no registration and no lender contact.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Model different loan amounts, down payment percentages, and interest rate scenarios to understand exactly where the numbers land before you begin lender conversations. Every calculation runs in your browser. No data leaves your device.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Jumbo Loan Payment Free
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">No account. No email. Runs in your browser.</p>
          </div>

          <h2 id="faq" className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Jumbo loan limits, rates, and qualification requirements vary by lender and are subject to change. The 2026 conforming loan limit figures reflect FHFA guidelines. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>
        </div>
      
          <AuthorBox />
        </div>
    </>
  );
}