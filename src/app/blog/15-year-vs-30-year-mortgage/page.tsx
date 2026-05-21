import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15-Year vs 30-Year Mortgage: Which Saves More Money? | Truly Free',
  description: 'Compare 15-year and 30-year mortgage payments, total interest costs, and break-even analysis. Free calculator included. No registration required.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/15-year-vs-30-year-mortgage' },
};

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '15-Year vs 30-Year Mortgage: The Complete Interest Cost Analysis',
  description: 'Side-by-side comparison of 15-year and 30-year mortgages including total interest paid, monthly payment difference, and opportunity cost of capital.',
  author: { '@type': 'Person', name: 'George Smith', url: 'https://www.linkedin.com/in/george-smith-832113217/' },
  publisher: { '@type': 'Organization', name: 'Klickify Agency' },
  url: 'https://trulyfreemortgage.com/blog/15-year-vs-30-year-mortgage',
  datePublished: '2026-05-09',
  dateModified: '2026-05-20',
  mainEntityOfPage: 'https://trulyfreemortgage.com/blog/15-year-vs-30-year-mortgage',
});

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much more interest do you pay on a 30-year vs 15-year mortgage?', acceptedAnswer: { '@type': 'Answer', text: 'On a $300,000 loan at 6.75%, a 30-year mortgage costs approximately $400,000 in total interest. A 15-year at 6.25% costs approximately $163,000. The difference is roughly $237,000.' } },
    { '@type': 'Question', name: 'Is a 15-year mortgage always better than a 30-year?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. If the monthly payment difference is invested consistently in index funds, the 30-year borrower can sometimes accumulate comparable wealth. The optimal choice depends on income stability and investment discipline.' } },
    { '@type': 'Question', name: 'What is the interest rate difference between 15-year and 30-year mortgages?', acceptedAnswer: { '@type': 'Answer', text: 'Historically, 15-year mortgage rates run 0.5% to 0.75% lower than 30-year rates. This compounds the savings from the shorter term.' } },
    { '@type': 'Question', name: 'Can I pay off a 30-year mortgage in 15 years?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, through additional principal payments. However, you pay the 30-year rate rather than the lower 15-year rate, reducing total savings compared to originating a 15-year loan.' } },
    { '@type': 'Question', name: 'Which mortgage term is better for investment properties?', acceptedAnswer: { '@type': 'Answer', text: 'Most investors prefer 30-year loans on rental properties to maximize monthly cash flow and improve cash-on-cash return.' } },
  ],
});

const examples = [
  { label: '15-Year', rate: 6.25, payment: 2573, totalInterest: 163140, totalCost: 463140, color: 'bg-blue-600' },
  { label: '30-Year', rate: 6.75, payment: 1946, totalInterest: 400560, totalCost: 700560, color: 'bg-gray-600' },
];

export default function FifteenVsThirtyYear() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white px-6 h-20 flex items-center justify-between">
          <a href="/mortgage-calculator">
            <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <div className="flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-700">Calculator</a>
            <a href="/blog/fha-mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-700">Blog</a>
          </div>
        </nav>
        <div className="bg-white px-6 py-2 flex items-center justify-center gap-2">
          <span className="bg-blue-600 text-white text-xs font-bold tracking-widest px-2 py-0.5 rounded">TRULY FREE</span>
          <span className="text-xs text-gray-500">No registration. No email. No limits. Your data never leaves your browser.</span>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-8" style={{ minHeight: 80 }}>Advertisement</div>
          <div className="mb-2">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Loan Comparison</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4 mt-3">15-Year vs 30-Year Mortgage: The Complete Interest Cost Analysis</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">The choice between a 15-year and 30-year mortgage is the single most consequential financial decision in a home purchase after the purchase price itself. On a $300,000 loan, the wrong choice costs over $200,000 in additional interest. This analysis provides the exact numbers with no lead capture and no lender referral fees.</p>
          <a href="/mortgage-calculator" className="block bg-blue-600 text-white rounded-lg p-5 mb-10 hover:bg-blue-700 transition-colors">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-1">Free Tool</p>
            <p className="text-lg font-bold">Compare both scenarios side by side — no email required</p>
            <p className="text-sm opacity-75 mt-1">Use the Scenario Comparison tab to model your exact numbers</p>
          </a>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Payment Comparison</h2>
          <p className="text-sm text-gray-500 mb-4">Based on $300,000 loan amount. 15-year at 6.25%, 30-year at 6.75%.</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {examples.map((ex) => (
              <div key={ex.label} className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden">
                <div className={"px-5 py-4 text-white " + ex.color}>
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-1">{ex.label}</p>
                  <p className="text-3xl font-bold tabular-nums">${ex.payment.toLocaleString()}<span className="text-sm font-normal opacity-60">/mo</span></p>
                  <p className="text-xs opacity-60 mt-1">at {ex.rate}% interest rate</p>
                </div>
                <div className="px-5 py-4 space-y-2">
                  {[['Total Interest','$'+ex.totalInterest.toLocaleString()],['Total Cost','$'+ex.totalCost.toLocaleString()],['Rate',ex.rate+'%']].map(([k,v]) => (
                    <div key={String(k)} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0"><span className="text-gray-500">{k}</span><span className="font-semibold tabular-nums">{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-5 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Key Figures</p>
            {[['Monthly payment difference','$627/mo more on 15-year'],['Total interest savings','$237,420 with 15-year'],['Interest savings as % of loan','79% of original loan amount'],['Rate advantage (15-year)','0.50% lower typical rate']].map(([k,v]) => (
              <div key={String(k)} className="flex justify-between text-sm py-2 border-b border-blue-100 last:border-0"><span className="text-gray-600">{k}</span><span className="font-bold text-gray-900 tabular-nums">{v}</span></div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Rate Advantage: Why 15-Year Loans Are Cheaper Twice Over</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">The 15-year mortgage delivers lower total cost through two simultaneous mechanisms. First, the shorter amortization period means each payment retires principal faster, reducing the balance on which interest accrues. Second, lenders price 15-year loans 0.50% to 0.75% lower than 30-year products because the shorter duration reduces their exposure to interest rate risk and default probability.</p>
          <p className="text-gray-600 mb-8 leading-relaxed">These two factors compound. A borrower who selects a 15-year loan at 6.25% instead of a 30-year at 6.75% saves on both the rate and the amortization curve simultaneously, producing interest savings that often exceed the original principal balance.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Opportunity Cost Argument for the 30-Year</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">The strongest financial argument for the 30-year mortgage is capital allocation. The monthly payment difference of approximately $627 can be invested rather than paid to a lender. At an 8% average annual return in a diversified index fund, $627 per month over 15 years grows to approximately $218,000 — approaching the $237,420 in interest savings from the 15-year loan.</p>
          <p className="text-gray-600 mb-8 leading-relaxed">The 30-year wins if investment returns exceed the mortgage rate consistently. The 15-year wins when investment discipline cannot be guaranteed or when the borrower values the guaranteed return of debt elimination over probabilistic market returns.</p>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Who Should Choose Each Option</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
              <p className="text-sm font-bold text-blue-600 mb-3">15-Year is optimal when:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Income is stable and predictable','You are within 15 years of retirement','Investment discipline is limited','Emergency fund is fully funded','No high-interest debt exists'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">+</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
              <p className="text-sm font-bold text-gray-600 mb-3">30-Year is optimal when:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Income is variable or commission-based','You have high investment return confidence','Property is an investment rental','Cash flow flexibility is a priority','You plan to move within 7 years'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gray-400 font-bold mt-0.5">+</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Paying Off a 30-Year Early: The Math</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">Adding $400 per month in principal payments to a $300,000 30-year loan at 6.75% reduces the payoff timeline from 360 months to approximately 222 months and saves approximately $147,000 in interest. This does not match the full savings of a 15-year loan at the lower rate, but provides the flexibility to revert to minimum payments during financial stress.</p>
          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-10" style={{ minHeight: 80 }}>Advertisement</div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ['How much more interest do you pay on a 30-year vs 15-year mortgage?','On a $300,000 loan at 6.75%, a 30-year mortgage costs approximately $400,000 in total interest. A 15-year at 6.25% costs approximately $163,000. The difference is roughly $237,000 — nearly the entire original loan amount paid again in interest.'],
              ['Is a 15-year mortgage always better than a 30-year?','Not always. If the monthly payment difference is invested consistently in index funds, the 30-year borrower can sometimes accumulate comparable wealth. The optimal choice depends on income stability and investment discipline.'],
              ['What is the interest rate difference between 15-year and 30-year mortgages?','Historically, 15-year mortgage rates run 0.5% to 0.75% lower than 30-year rates. This compounds the savings from the shorter term, making the 15-year significantly cheaper in total cost.'],
              ['Can I pay off a 30-year mortgage in 15 years?','Yes, through additional principal payments. However, you pay the 30-year rate rather than the lower 15-year rate on the outstanding balance, reducing total savings compared to originating a 15-year loan from the start.'],
              ['Which mortgage term is better for investment properties?','Most investors prefer 30-year loans on rental properties to maximize monthly cash flow and improve cash-on-cash return. Mortgage interest on investment properties is also tax-deductible.'],
            ].map(([q,a]) => (
              <div key={String(q)} className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">Figures on this page use illustrative interest rates and are for educational purposes only. Actual rates vary by lender, credit score, and market conditions. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.</p>
          </div>
          <AuthorBox />
        </div>
      </div>
    </>
  );
}