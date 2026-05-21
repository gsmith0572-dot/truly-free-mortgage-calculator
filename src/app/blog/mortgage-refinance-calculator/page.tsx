import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Refinance Calculator — Break-Even Analysis | Truly Free',
  description: 'Calculate your refinance break-even point, monthly savings, and total interest reduction. No email. No registration. 100% free.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/mortgage-refinance-calculator' },
};

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mortgage Refinance Calculator: The Break-Even Point Formula',
  description: 'How to calculate your exact refinance break-even month, total interest savings, and whether refinancing makes financial sense for your situation.',
  author: { '@type': 'Person', name: 'George Smith', url: 'https://www.linkedin.com/in/george-smith-832113217/' },
  publisher: { '@type': 'Organization', name: 'Klickify Agency' },
  url: 'https://trulyfreemortgage.com/blog/mortgage-refinance-calculator',
  datePublished: '2026-05-09',
  dateModified: '2026-05-20',
  mainEntityOfPage: 'https://trulyfreemortgage.com/blog/mortgage-refinance-calculator',
});

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you calculate the refinance break-even point?', acceptedAnswer: { '@type': 'Answer', text: 'Divide your total closing costs by your monthly payment savings. If closing costs are $6,000 and you save $200 per month, your break-even point is 30 months. If you plan to stay in the home beyond 30 months, refinancing is financially beneficial.' } },
    { '@type': 'Question', name: 'What are typical refinance closing costs?', acceptedAnswer: { '@type': 'Answer', text: 'Refinance closing costs typically range from 2% to 5% of the loan amount. On a $300,000 loan, expect $6,000 to $15,000 in closing costs including origination fees, appraisal, title insurance, and prepaid items.' } },
    { '@type': 'Question', name: 'Is it worth refinancing to save $100 a month?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your closing costs and how long you plan to stay in the home. If closing costs are $5,000 and you save $100 per month, your break-even point is 50 months — just over 4 years. If you plan to stay longer, refinancing makes financial sense.' } },
    { '@type': 'Question', name: 'What is a good interest rate reduction to refinance?', acceptedAnswer: { '@type': 'Answer', text: 'The traditional rule of thumb is to refinance when you can reduce your rate by at least 1%. However, even a 0.5% reduction can be worthwhile on larger loan balances or if closing costs are low. Always calculate your specific break-even point rather than relying on general rules.' } },
    { '@type': 'Question', name: 'Should I refinance to a 15-year or 30-year loan?', acceptedAnswer: { '@type': 'Answer', text: 'Refinancing to a 15-year loan increases your monthly payment but dramatically reduces total interest paid and builds equity faster. Refinancing to a new 30-year term lowers your payment but restarts the amortization clock, potentially increasing total interest paid over the life of the loan.' } },
  ],
});

export default function RefinanceCalculator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between">
          <a href="/mortgage-calculator">
            <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <div className="flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-700">Calculator</a>
            <a href="/blog" className="text-sm text-gray-500 hover:text-gray-700">Blog</a>
          </div>
        </nav>
        <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-center gap-2">
          <span className="bg-blue-600 text-white text-xs font-bold tracking-widest px-2 py-0.5 rounded">TRULY FREE</span>
          <span className="text-xs text-gray-500">No registration. No email. No limits. Your data never leaves your browser.</span>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-8" style={{ minHeight: 80 }}>Advertisement</div>
          <div className="mb-2">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Refinancing</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4 mt-3">Mortgage Refinance Calculator: The Break-Even Point Formula</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">Refinancing without calculating your break-even point is a financial error. Lenders benefit from every refinance regardless of whether it helps you — they collect new origination fees and reset your amortization schedule. This guide gives you the exact formula to determine whether refinancing produces a net financial gain in your specific situation.</p>
          <a href="/mortgage-calculator" className="block bg-blue-600 text-white rounded-xl p-5 mb-10 hover:bg-blue-700 transition-colors">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-1">Free Tool</p>
            <p className="text-lg font-bold">Model your refinance scenario — no email required</p>
            <p className="text-sm opacity-75 mt-1">Use Scenario Comparison to compare your current loan vs new terms</p>
          </a>

          <h2 className="text-xl font-bold text-gray-900 mb-3">The Break-Even Point Formula</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">The break-even point is the month in which your cumulative monthly savings equal your total refinance closing costs. Before that month, refinancing has cost you money. After it, refinancing saves you money.</p>
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Formula</p>
            <p className="text-sm font-mono text-gray-800 mb-2">Break-Even Month = Total Closing Costs / Monthly Payment Savings</p>
            <p className="text-xs text-gray-500">If you plan to stay in the home beyond the break-even month, refinancing produces a net financial gain.</p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Example Calculation</p>
            <p className="text-sm text-gray-500 mb-4">$350,000 loan — refinancing from 7.5% to 6.75% — $8,000 closing costs</p>
            {[
              ['Current monthly payment (7.5%, 30yr)', '$2,448'],
              ['New monthly payment (6.75%, 30yr)', '$2,270'],
              ['Monthly savings', '$178'],
              ['Total closing costs', '$8,000'],
              ['Break-even point', '45 months (3.7 years)'],
              ['5-year net savings (after costs)', '$680'],
              ['10-year net savings (after costs)', '$13,360'],
            ].map(([k,v], i) => (
              <div key={String(k)} className={"flex justify-between text-sm py-2 border-b border-gray-50 last:border-0 " + (i === 4 ? 'font-bold text-gray-900' : '')}>
                <span className={i === 4 ? 'text-gray-900' : 'text-gray-500'}>{k}</span>
                <span className={"tabular-nums " + (i === 4 ? 'text-blue-600' : 'text-gray-900 font-semibold')}>{v}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Refinance Closing Costs: What You Will Actually Pay</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">Lenders frequently advertise refinance options with vague or understated cost disclosures. The actual closing costs on a refinance typically range from 2% to 5% of the loan amount and include the following line items:</p>
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden mb-8">
            <table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Cost Item</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Loan origination fee','0.5% – 1.5% of loan'],
                  ['Appraisal fee','$400 – $700'],
                  ['Title search and insurance','$700 – $1,500'],
                  ['Credit report fee','$25 – $75'],
                  ['Attorney or settlement fee','$500 – $1,500'],
                  ['Prepaid interest (per diem)','Varies by closing date'],
                  ['Recording fees','$50 – $500'],
                ].map(([k,v]) => (
                  <tr key={String(k)} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700">{k}</td>
                    <td className="px-5 py-3 text-right text-gray-600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">No-Closing-Cost Refinance: The Hidden Mechanism</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">No-closing-cost refinances do not eliminate closing costs — they transfer them. Lenders recover the costs through one of two mechanisms: rolling the costs into the new loan balance, which increases the principal you owe and the interest you pay on it, or accepting a higher interest rate (typically 0.25% to 0.375% above the par rate) in exchange for lender credits that cover the closing costs.</p>
          <p className="text-gray-600 mb-8 leading-relaxed">A no-closing-cost refinance is rational when you plan to sell or refinance again within 3 to 4 years, because the break-even point is immediate but the rate premium accumulates as long as you hold the loan.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">When Refinancing Restarts the Amortization Clock</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">A critical and frequently overlooked cost of refinancing is amortization restart. In the early years of a mortgage, the vast majority of each payment is interest rather than principal. When you refinance into a new 30-year loan after several years of payments, you restart this front-loaded interest structure.</p>
          <p className="text-gray-600 mb-8 leading-relaxed">A borrower who is 7 years into a 30-year mortgage and refinances into a new 30-year loan will make mortgage payments for 37 total years rather than 30. Even if the monthly payment decreases, the extended timeline can increase total lifetime interest paid. Refinancing into a 20-year or 15-year loan avoids this problem by maintaining or accelerating the payoff timeline.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">Rate Reduction Required to Justify Refinancing</h2>
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden mb-8">
            <table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Loan Balance</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">0.25% Rate Drop Saves</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">0.50% Rate Drop Saves</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">1.00% Rate Drop Saves</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$150,000','$19/mo','$38/mo','$76/mo'],
                  ['$250,000','$32/mo','$64/mo','$127/mo'],
                  ['$350,000','$45/mo','$89/mo','$178/mo'],
                  ['$500,000','$64/mo','$127/mo','$254/mo'],
                ].map(([bal,...rest]) => (
                  <tr key={bal} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700 font-medium">{bal}</td>
                    {rest.map((v,i) => <td key={i} className="px-5 py-3 text-right text-gray-600">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-10" style={{ minHeight: 80 }}>Advertisement</div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ['How do you calculate the refinance break-even point?','Divide your total closing costs by your monthly payment savings. If closing costs are $6,000 and you save $200 per month, your break-even point is 30 months. If you plan to stay in the home beyond 30 months, refinancing is financially beneficial.'],
              ['What are typical refinance closing costs?','Refinance closing costs typically range from 2% to 5% of the loan amount. On a $300,000 loan, expect $6,000 to $15,000 in closing costs including origination fees, appraisal, title insurance, and prepaid items.'],
              ['Is it worth refinancing to save $100 a month?','It depends on your closing costs and how long you plan to stay. If closing costs are $5,000 and you save $100 per month, your break-even point is 50 months. If you plan to stay longer than 4 years, refinancing makes financial sense.'],
              ['What is a good interest rate reduction to refinance?','The traditional rule of thumb is 1% or more. However, even a 0.5% reduction can be worthwhile on larger balances or when closing costs are low. Always calculate your specific break-even point rather than relying on general rules.'],
              ['Should I refinance to a 15-year or 30-year loan?','Refinancing to a 15-year loan increases your monthly payment but dramatically reduces total interest and builds equity faster. A new 30-year loan lowers your payment but restarts the amortization clock, potentially increasing lifetime interest paid.'],
            ].map(([q,a]) => (
              <div key={String(q)} className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-400 leading-relaxed">Figures on this page are for educational purposes only. Actual refinance costs, savings, and break-even timelines depend on lender-specific fees and current market rates. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.</p>
          </div>
          <AuthorBox />
        </div>
      </div>
    </>
  );
}