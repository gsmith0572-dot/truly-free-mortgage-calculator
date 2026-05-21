import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ARM vs Fixed Rate Mortgage Calculator — Free | Truly Free Mortgage',
  description: 'Compare adjustable-rate vs fixed-rate mortgages. Calculate initial savings, break-even point, and worst-case payment scenarios. No registration required.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/arm-vs-fixed-rate' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'ARM vs Fixed Rate Mortgage: How to Calculate Which Saves You More',
      'description': 'A complete comparison of adjustable-rate and fixed-rate mortgages including initial savings, rate cap structures, worst-case payment scenarios, and break-even analysis.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-20',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/arm-vs-fixed-rate',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What does 5/1 ARM mean?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'A 5/1 ARM has a fixed interest rate for the first 5 years, then adjusts once per year for the remaining life of the loan. The first number is the fixed period in years, the second is the adjustment frequency in years. Common structures are 5/1, 7/1, and 10/1.' },
        },
        {
          '@type': 'Question',
          'name': 'What are ARM rate caps?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'ARM rate caps limit how much the rate can change. A typical cap structure is 2/2/5: the rate cannot increase more than 2% at the first adjustment, no more than 2% at any subsequent annual adjustment, and no more than 5% above the initial rate over the life of the loan.' },
        },
        {
          '@type': 'Question',
          'name': 'When does an ARM make sense?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'An ARM makes sense when you plan to sell or refinance before the fixed period ends, when the rate spread over a fixed loan is large enough to generate meaningful savings, or when rates are expected to fall. If you plan to stay in the home long-term a fixed rate eliminates payment uncertainty.' },
        },
        {
          '@type': 'Question',
          'name': 'What is the worst-case payment on a 5/1 ARM?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The worst-case scenario applies the full lifetime cap to the initial rate. On a 5/1 ARM with a 2.5% initial rate and a 5% lifetime cap, the maximum rate is 7.5%. You can calculate the worst-case monthly payment by running the remaining loan balance at year 5 through the amortization formula at the maximum rate.' },
        },
        {
          '@type': 'Question',
          'name': 'How much lower are ARM rates vs fixed rates?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The spread between ARM and fixed rates varies with market conditions. In a normal yield curve environment a 5/1 ARM is typically 0.5% to 1.0% below a 30-year fixed rate. In an inverted yield curve environment the spread narrows or disappears, reducing the financial incentive to choose an ARM.' },
        },
      ],
    },
  ],
};

export default function ARMvsFixedRatePage() {
  const faqs = [
    {
      q: 'What does 5/1 ARM mean?',
      a: 'A 5/1 ARM has a fixed interest rate for the first 5 years, then adjusts once per year for the remaining life of the loan. The first number is the fixed period in years, the second is the adjustment frequency in years. Common structures are 5/1, 7/1, and 10/1.',
    },
    {
      q: 'What are ARM rate caps?',
      a: 'ARM rate caps limit how much the rate can change. A typical cap structure is 2/2/5: the rate cannot increase more than 2% at the first adjustment, no more than 2% at any subsequent annual adjustment, and no more than 5% above the initial rate over the life of the loan.',
    },
    {
      q: 'When does an ARM make sense?',
      a: 'An ARM makes sense when you plan to sell or refinance before the fixed period ends, when the rate spread over a fixed loan is large enough to generate meaningful savings, or when rates are expected to fall. If you plan to stay in the home long-term a fixed rate eliminates payment uncertainty.',
    },
    {
      q: 'What is the worst-case payment on a 5/1 ARM?',
      a: 'The worst-case scenario applies the full lifetime cap to the initial rate. On a 5/1 ARM with a 2.5% initial rate and a 5% lifetime cap, the maximum rate is 7.5%. You can calculate the worst-case monthly payment by running the remaining loan balance at year 5 through the amortization formula at the maximum rate.',
    },
    {
      q: 'How much lower are ARM rates vs fixed rates?',
      a: 'The spread between ARM and fixed rates varies with market conditions. In a normal yield curve environment a 5/1 ARM is typically 0.5% to 1.0% below a 30-year fixed rate. In an inverted yield curve environment the spread narrows or disappears, reducing the financial incentive to choose an ARM.',
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Loan Comparison</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            ARM vs Fixed Rate Mortgage: How to Calculate Which Saves You More
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            Lower rate upfront, real risk after year five. That's the deal an ARM offers — and whether it's worth it depends entirely on your timeline, the size of today's rate spread, and whether you could stomach a worst-case payment jump without selling. I've run these numbers for a lot of people. Here's how to do it yourself so you're not guessing.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Table of Contents</div>
            <ol className="space-y-2">
              {[
                ['#how-arms-work', 'How Adjustable-Rate Mortgages Work'],
                ['#cap-structure', 'Rate Cap Structures Explained'],
                ['#initial-savings', 'Calculating Your Initial Savings'],
                ['#worst-case', 'Modeling the Worst-Case Scenario'],
                ['#breakeven', 'The Break-Even Horizon'],
                ['#when-arm', 'When an ARM Makes Financial Sense'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="how-arms-work" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How Adjustable-Rate Mortgages Work</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            An ARM has two phases. The initial fixed period — typically 5, 7, or 10 years — during which the rate is locked and the payment does not change. After this period the loan enters the adjustment phase, where the rate resets periodically based on a market index plus a margin set by the lender.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The most common index today is the Secured Overnight Financing Rate, or SOFR. The lender adds a margin — typically 2.5% to 3.0% — to the index to arrive at your new rate. If SOFR is 4.5% and the margin is 2.75%, your adjusted rate is 7.25%, subject to cap limitations.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The notation used to describe ARMs encodes the structure. A 5/1 ARM is fixed for 5 years then adjusts every 1 year. A 7/6 ARM is fixed for 7 years then adjusts every 6 months. The adjustment frequency matters because more frequent adjustments mean faster response to rate movements in either direction.
          </p>

          <h2 id="cap-structure" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Rate Cap Structures Explained</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Caps protect borrowers from unlimited rate increases. The standard cap structure has three components expressed as three numbers separated by slashes.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The initial cap limits how much the rate can increase at the first adjustment. The periodic cap limits how much the rate can change at any subsequent adjustment. The lifetime cap limits how much the rate can ever increase above the original note rate.
          </p>

          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {['Cap Structure', 'Initial Cap', 'Periodic Cap', 'Lifetime Cap'].map((h, i) => (
                    <th key={h} className={"px-4 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['2/2/5 (Most Common)', '2%', '2%', '5%'],
                  ['5/2/5', '5%', '2%', '5%'],
                  ['2/1/5', '2%', '1%', '5%'],
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

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            On a 5/1 ARM starting at 5.75% with a 2/2/5 cap structure, the maximum rate at the first adjustment is 7.75%. The maximum rate at any point in the loan is 10.75%. These are the numbers you need to model worst-case affordability before choosing an ARM.
          </p>

          <h2 id="initial-savings" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Calculating Your Initial Savings</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The initial savings from an ARM is simply the payment difference between the ARM rate and the fixed rate, multiplied by the number of months in the fixed period.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Example: $500,000 loan. 30-year fixed at 6.75% gives a monthly P&I of $3,243. 5/1 ARM at 5.875% gives a monthly P&I of $2,958. Monthly savings is $285. Over 60 months the total savings is $17,100 before considering the time value of money.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Additionally the ARM borrower builds equity faster during the fixed period because more of each payment goes to principal at the lower rate. After 60 months the ARM borrower owes approximately $1,800 less in principal than the fixed borrower on the same purchase.
          </p>

          <h2 id="worst-case" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Modeling the Worst-Case Scenario</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The most important calculation when evaluating an ARM is the worst-case payment. To calculate it: determine your remaining balance at the end of the fixed period, apply the maximum rate allowed by the lifetime cap, and run the amortization formula for the remaining term.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            On the $500,000 example above, after 60 payments at 5.875% the remaining balance is approximately $463,000. The maximum rate with a 5% lifetime cap is 10.875%. Running $463,000 at 10.875% over 25 years gives a worst-case monthly payment of $4,593 — a $1,635 increase over the initial ARM payment and $1,350 more than the fixed rate alternative.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The question to ask yourself is not whether this scenario is likely — it probably is not. The question is whether you can absorb this payment if it happens. If the answer is no, the fixed rate is the appropriate choice regardless of the initial savings.
          </p>

          <h2 id="breakeven" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Break-Even Horizon</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The break-even horizon for an ARM is the point at which cumulative ARM payments exceed cumulative fixed payments. If you sell or refinance before this point you come out ahead with the ARM. If you stay past this point the fixed rate wins.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            In the example above the ARM saves $17,100 over the first five years. After year 5 if rates adjust upward and the ARM payment exceeds the fixed payment by $300 per month, the ARM borrower gives back the entire savings in 57 months — meaning they break even at roughly year 10. If they sell at year 8 the ARM was the right call. If they stay for 15 years it was not.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            This calculation depends on assumptions about future rate movements that nobody can make with certainty. The value of the exercise is not prediction — it is understanding the horizon at which the decision flips.
          </p>

          <h2 id="when-arm" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">When an ARM Makes Financial Sense</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            An ARM is most defensible when your planned ownership horizon is clearly shorter than the fixed period. If you are buying a home you plan to sell in four years, a 5/1 ARM gives you the lower rate for your entire ownership period with zero adjustment risk.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            ARMs also make sense when the rate spread over a fixed loan is unusually large — historically above 1.0% — and the initial savings is material enough to justify the future uncertainty. In periods of an inverted yield curve where ARM rates are close to or above fixed rates the ARM offers no meaningful compensation for the risk it introduces.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            High-income borrowers with significant liquid assets who can absorb worst-case payment increases without stress sometimes prefer ARMs to maximize cash flow during the fixed period. For most borrowers with standard income profiles and limited reserves the certainty of a fixed rate is worth the premium.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Compare ARM vs Fixed Rate Payments Free
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
              Figures on this page are for educational purposes only. ARM rate adjustments depend on market index movements that cannot be predicted. Worst-case scenarios are illustrative. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/15-year-vs-30-year-mortgage', '15-Year vs 30-Year Mortgage', '$237,000 difference in total interest on a $300k loan.'],
                ['/blog/mortgage-refinance-calculator', 'Refinance Calculator', 'Break-even formula, closing costs, when refinancing costs you money.'],
                ['/blog/mortgage-payoff-calculator', 'Mortgage Payoff Calculator', 'How extra payments shave years off your loan.'],
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