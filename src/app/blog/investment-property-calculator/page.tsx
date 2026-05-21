import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Property Mortgage Calculator — Free | Truly Free Mortgage',
  description: 'Calculate your investment property mortgage payment, cash flow, cap rate, and cash-on-cash return instantly. No registration. Your data never leaves your browser.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/investment-property-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Investment Property Calculator: Mortgage, Cash Flow, and Returns Explained',
      'description': 'A complete guide to financing investment properties including down payment requirements, rate premiums, cash flow analysis, cap rate, and cash-on-cash return calculations.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-20',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/investment-property-calculator',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How much down payment is required for an investment property?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Investment properties typically require 15% to 25% down payment for conventional financing. Single-family investment properties may qualify with 15% down for well-qualified borrowers. Multi-unit properties of 2 to 4 units generally require 20% to 25% down. There is no zero-down option for pure investment properties — VA and USDA loans require owner occupancy.' },
        },
        {
          '@type': 'Question',
          'name': 'What is cash-on-cash return in real estate?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Cash-on-cash return measures your annual pre-tax cash flow divided by the total cash you invested. If you invested $80,000 in down payment and closing costs and the property generates $6,400 in annual cash flow after all expenses and mortgage payments, your cash-on-cash return is 8%.' },
        },
        {
          '@type': 'Question',
          'name': 'What is cap rate and how is it calculated?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Cap rate is the net operating income divided by the property value, expressed as a percentage. It measures the return the property would generate if purchased in cash with no financing. A property generating $24,000 in annual NOI purchased for $400,000 has a cap rate of 6%. Cap rate is used to compare properties independently of financing structure.' },
        },
        {
          '@type': 'Question',
          'name': 'Are investment property mortgage rates higher than primary residence rates?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Investment property rates are typically 0.5% to 0.875% higher than rates for a primary residence with the same loan profile. This premium reflects the higher default risk lenders associate with investment properties, since borrowers are more likely to prioritize their primary home payment during financial stress.' },
        },
        {
          '@type': 'Question',
          'name': 'Can rental income be used to qualify for an investment property mortgage?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, with restrictions. Lenders typically allow 75% of the gross rental income from the subject property to be counted as qualifying income, with 25% deducted as a vacancy and expense factor. For borrowers without prior landlord experience some lenders require a signed lease agreement before counting any rental income.' },
        },
      ],
    },
  ],
};

export default function InvestmentPropertyCalculatorPage() {
  const faqs = [
    {
      q: 'How much down payment is required for an investment property?',
      a: 'Investment properties typically require 15% to 25% down payment for conventional financing. Single-family investment properties may qualify with 15% down for well-qualified borrowers. Multi-unit properties of 2 to 4 units generally require 20% to 25% down. There is no zero-down option for pure investment properties.',
    },
    {
      q: 'What is cash-on-cash return in real estate?',
      a: 'Cash-on-cash return measures your annual pre-tax cash flow divided by the total cash you invested. If you invested $80,000 in down payment and closing costs and the property generates $6,400 in annual cash flow after all expenses and mortgage payments, your cash-on-cash return is 8%.',
    },
    {
      q: 'What is cap rate and how is it calculated?',
      a: 'Cap rate is the net operating income divided by the property value, expressed as a percentage. It measures the return the property would generate if purchased in cash with no financing. A property generating $24,000 in annual NOI purchased for $400,000 has a cap rate of 6%.',
    },
    {
      q: 'Are investment property mortgage rates higher than primary residence rates?',
      a: 'Yes. Investment property rates are typically 0.5% to 0.875% higher than rates for a primary residence with the same loan profile. This premium reflects the higher default risk lenders associate with investment properties.',
    },
    {
      q: 'Can rental income be used to qualify for an investment property mortgage?',
      a: 'Yes, with restrictions. Lenders typically allow 75% of the gross rental income from the subject property to be counted as qualifying income, with 25% deducted as a vacancy and expense factor.',
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Investment Property Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Investment Property Calculator: Mortgage, Cash Flow, and Returns Explained
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            The mortgage is the easy part. It's the cash flow math that trips people up. You're looking at rate premiums of 0.5% to 0.875% over primary residence rates, stricter reserve requirements, and a set of metrics — cap rate, cash-on-cash return — that don't apply to anything else in personal finance. I've seen deals that looked profitable on paper fall apart once you actually model the expenses. Here's how to run the numbers before you make an offer.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Table of Contents</div>
            <ol className="space-y-2">
              {[
                ['#financing', 'Investment Property Financing Requirements'],
                ['#rates', 'Rate Premiums for Investment Properties'],
                ['#cashflow', 'How to Calculate Cash Flow'],
                ['#metrics', 'Cap Rate and Cash-on-Cash Return'],
                ['#example', 'Full Example: Does This Deal Work?'],
                ['#generate', 'Calculate Your Payment for Free'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="financing" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Investment Property Financing Requirements</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Investment properties cannot be financed with VA, USDA, or FHA loans — those programs require owner occupancy. Conventional financing through Fannie Mae or Freddie Mac is the standard path, with down payment requirements that vary by property type.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            For single-family investment properties, well-qualified borrowers can put as little as 15% down. For 2-to-4-unit properties the minimum is 20% to 25% depending on the lender. Loan amounts above the conforming limit enter jumbo territory with even stricter requirements.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Reserve requirements are substantial. Most lenders require 6 months of mortgage payments in liquid reserves after closing, and some require reserves for every financed property you own simultaneously. A borrower with three financed properties might need to demonstrate 18 months of combined mortgage payments in liquid assets.
          </p>

          <h2 id="rates" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Rate Premiums for Investment Properties</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Investment property loans carry a rate premium over primary residence loans. Fannie Mae applies loan-level price adjustments that typically translate to 0.5% to 0.875% higher rates for the same borrower profile. The premium exists because borrowers statistically default on investment properties before their primary homes during financial stress.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            On a $320,000 investment loan, a 0.625% rate premium adds approximately $133 per month to your payment. Over 30 years that is $47,880 in additional interest. This cost must be factored into your cash flow analysis when evaluating whether a deal makes financial sense.
          </p>

          <h2 id="cashflow" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How to Calculate Cash Flow</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Cash flow is gross rental income minus all operating expenses minus the mortgage payment. The common mistake is forgetting expenses. A property that collects $2,400 per month in rent does not generate $2,400 in cash flow.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Standard expense categories include property taxes, insurance, property management (typically 8% to 10% of gross rent), maintenance and repairs (budget 1% of property value annually), vacancy allowance (typically 5% to 8% of gross rent), and capital expenditure reserves for major items like roof, HVAC, and appliances.
          </p>

          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {['Item', 'Monthly Amount'].map((h, i) => (
                    <th key={h} className={"px-5 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gross Rent', '+$2,400'],
                  ['Vacancy (6%)', '-$144'],
                  ['Property Management (9%)', '-$216'],
                  ['Property Tax', '-$300'],
                  ['Insurance', '-$100'],
                  ['Maintenance Reserve (1%/yr)', '-$167'],
                  ['CapEx Reserve', '-$100'],
                  ['Mortgage Payment (P&I)', '-$1,520'],
                  ['Net Monthly Cash Flow', '$-47'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-5 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className={"px-5 py-3 text-right font-semibold " + (row[1].startsWith('-') ? 'text-red-500' : row[1].startsWith('+') ? 'text-green-600' : 'text-gray-800')}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            This example shows a property that appears to cash flow on the surface but runs slightly negative when all expenses are properly accounted for. This is a common outcome in high-price markets and is why thorough expense modeling before purchase is essential.
          </p>

          <h2 id="metrics" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Cap Rate and Cash-on-Cash Return</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Cap rate measures property performance independent of financing. It is calculated as net operating income divided by property value. NOI is gross rent minus operating expenses excluding the mortgage payment. A $400,000 property generating $24,000 in annual NOI has a 6% cap rate. Cap rate lets you compare properties regardless of how they are financed.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Cash-on-cash return measures the return on your actual cash investment. It is annual pre-tax cash flow divided by total cash invested including down payment, closing costs, and any immediate repairs. If you invested $90,000 total and the property generates $7,200 in annual cash flow, your cash-on-cash return is 8%.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Most experienced investors target a minimum cash-on-cash return of 6% to 8% in average markets. In high-appreciation markets like coastal cities, investors sometimes accept 3% to 4% cash-on-cash in exchange for expected equity growth. In cash flow markets like the Midwest and Southeast, 8% to 12% is achievable.
          </p>

          <h2 id="example" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Full Example: Does This Deal Work?</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Purchase price $350,000. Down payment 20% equals $70,000. Loan amount $280,000. Investment property rate 7.125% over 30 years. Monthly P&I equals $1,885. Gross monthly rent $2,200. Annual operating expenses estimated at $9,600 including taxes, insurance, management, maintenance, and vacancy. Monthly expenses $800. Net monthly cash flow is $2,200 minus $800 minus $1,885 equals negative $485.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            This deal does not cash flow at current financing costs. The cap rate is $2,200 times 12 minus $9,600 divided by $350,000 equals 5.8% — reasonable but the leverage is working against the investor at 7.125% financing. The deal becomes viable if rents are $2,600, the purchase price is $300,000, or the rate drops below 6.5%.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Running these scenarios quickly before making an offer is exactly what a mortgage calculator is for. Changing one variable at a time reveals which lever has the most impact on deal viability.
          </p>

          <h2 id="generate" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Calculate Your Payment for Free</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Truly Free Mortgage calculates the mortgage payment component of your investment analysis instantly — no registration, no lead capture, no lender contact. Use it to model different purchase prices, down payment amounts, and interest rate scenarios before you run your full cash flow analysis.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Every calculation runs in your browser. Your financial data never reaches a server. Free forever.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Investment Property Payment Free
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">No account. No email. Runs in your browser.</p>
          </div>

          <h2 id="faq" className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only and do not constitute investment advice. Actual financing terms, rental income, and investment returns vary significantly by market and individual circumstances. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/jumbo-loan-calculator', 'Jumbo Loan Calculator', 'What changes when your loan exceeds the conforming limit.'],
                ['/blog/arm-vs-fixed-rate', 'ARM vs Fixed Rate', 'Initial savings vs worst-case payment risk — how to run the numbers.'],
                ['/blog/mortgage-refinance-calculator', 'Refinance Calculator', 'Break-even formula, closing costs, when refinancing costs you money.'],
                ['/blog/amortization-schedule-generator', 'Amortization Schedule Generator', 'See exactly how every payment breaks down, month by month.'],
              ].map(([href, title, desc]) => (
                <a key={String(href)} href={String(href)} className="block bg-white rounded-lg p-4 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] hover:shadow-[0_4px_8px_-2px_rgb(0_0_0/0.1)] transition-shadow">
                  <p className="text-[13px] font-semibold text-blue-600 mb-1">{title}</p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </a>
              ))}
            </div>
          </div>

          <AuthorBox />
        </div>
      </div>
    </>
  );
}