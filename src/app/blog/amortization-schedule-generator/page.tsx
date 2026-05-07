import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amortization Schedule Generator — Free, No Sign-Up | Truly Free Mortgage',
  description: 'Generate a complete amortization schedule instantly. See every payment broken down by principal, interest, and remaining balance. Free forever, no account required.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/amortization-schedule-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Amortization Schedule Generator: How to Read Your Payment Breakdown',
      'description': 'A complete guide to understanding amortization schedules, how they are calculated, and how to use a free generator to plan your mortgage payoff.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Organization', 'name': 'Truly Free Mortgage' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/amortization-schedule-generator',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is an amortization schedule?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'An amortization schedule is a complete table of periodic loan payments showing how much of each payment goes toward principal, how much goes toward interest, and what the remaining balance is after each payment.' },
        },
        {
          '@type': 'Question',
          'name': 'Why do I pay so much interest at the beginning of my mortgage?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Your interest charge each month is calculated on the remaining loan balance. At the start of the loan your balance is at its highest, so the interest portion is largest. As you pay down the principal the interest portion shrinks and the principal portion grows.' },
        },
        {
          '@type': 'Question',
          'name': 'How does making extra payments affect my amortization schedule?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Extra payments reduce your principal balance immediately. Because future interest is calculated on that lower balance, every extra dollar you pay saves a compounding amount of interest and shortens the payoff date.' },
        },
        {
          '@type': 'Question',
          'name': 'Can I get a free amortization schedule without signing up?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Truly Free Mortgage generates a complete month-by-month amortization schedule with zero registration required. The calculation runs entirely in your browser and no data is sent to any server.' },
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between a 15-year and 30-year amortization schedule?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'A 15-year schedule has higher monthly payments but dramatically less total interest. A 30-year schedule has lower monthly payments but the slower amortization means you pay roughly twice as much interest over the life of the loan.' },
        },
      ],
    },
  ],
};

export default function AmortizationScheduleGeneratorPage() {
  const rows = [
    ['Metric', '30-Year at 6.5%', '15-Year at 6.0%'],
    ['Loan Amount', '$400,000', '$400,000'],
    ['Monthly Payment (P&I)', '$2,528', '$3,376'],
    ['Total Paid', '$910,080', '$607,680'],
    ['Total Interest', '$510,080', '$207,680'],
    ['Interest Saved', '—', '$302,400'],
  ];

  const faqs = [
    {
      q: 'What is an amortization schedule?',
      a: 'An amortization schedule is a complete table of periodic loan payments showing how much of each payment goes toward principal, how much goes toward interest, and what the remaining balance is after each payment.',
    },
    {
      q: 'Why do I pay so much interest at the beginning of my mortgage?',
      a: 'Your interest charge each month is calculated on the remaining loan balance. At the start of the loan your balance is at its highest, so the interest portion is largest. As you pay down the principal the interest portion shrinks and the principal portion grows.',
    },
    {
      q: 'How does making extra payments affect my amortization schedule?',
      a: 'Extra payments reduce your principal balance immediately. Because future interest is calculated on that lower balance, every extra dollar you pay saves a compounding amount of interest and shortens the payoff date.',
    },
    {
      q: 'Can I get a free amortization schedule without signing up?',
      a: 'Yes. Truly Free Mortgage generates a complete month-by-month amortization schedule with zero registration required. The calculation runs entirely in your browser and no data is sent to any server.',
    },
    {
      q: 'What is the difference between a 15-year and 30-year amortization schedule?',
      a: 'A 15-year schedule has higher monthly payments but dramatically less total interest. A 30-year schedule has lower monthly payments but the slower amortization means you pay roughly twice as much interest over the life of the loan.',
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Mortgage Education</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Amortization Schedule Generator: How to Read Your Payment Breakdown
          </h1>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            Every mortgage payment contains two components: principal and interest. The ratio between them shifts every single month. An amortization schedule makes this visible. Here is how it works, how to generate one for free, and how to use it to make smarter decisions about your loan.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Table of Contents</div>
            <ol className="space-y-2">
              {[
                ['#what-is', 'What Is an Amortization Schedule?'],
                ['#math', 'The Math Behind Every Payment'],
                ['#front-loaded', 'Why Your Loan Is Front-Loaded with Interest'],
                ['#extra-payments', 'How Extra Payments Reshape Your Schedule'],
                ['#15-vs-30', '15-Year vs. 30-Year: The Schedule Comparison'],
                ['#generate', 'Generate Your Schedule for Free'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="what-is" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">What Is an Amortization Schedule?</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            An amortization schedule is a complete table showing every payment you will make over the life of a loan. For each payment period the schedule displays the payment number, the total payment amount, the portion applied to principal, the portion applied to interest, and the remaining loan balance after that payment.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The word amortization comes from the Old French amortir, meaning to extinguish. In lending it refers to the process of gradually eliminating a debt through scheduled payments. A fully amortizing loan is designed so that the final scheduled payment reduces your balance to exactly zero.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Most residential mortgages in the United States are fully amortizing fixed-rate loans. Your monthly payment stays constant for the life of the loan, but the internal composition of that payment changes every single month.
          </p>

          <h2 id="math" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Math Behind Every Payment</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Your monthly payment is calculated using the standard annuity formula. Given a loan amount P, a monthly interest rate r, and a total number of payments n, the fixed monthly payment M is:
          </p>
          <div className="bg-[#F3F4F6] rounded-lg p-4 mb-4 font-mono text-[13px] text-gray-800">
            M = P x [r(1 + r)^n] / [(1 + r)^n - 1]
          </div>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Once you have M, each month the interest charge is your current balance multiplied by the monthly rate. The remainder after subtracting interest goes entirely to principal. That principal reduction lowers your balance, which lowers next month&apos;s interest charge, which means slightly more of the next payment attacks the principal. This compounding shift is the engine of amortization.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            On a $400,000 loan at 6.5% for 30 years, your fixed monthly payment is $2,528. In month one, $2,167 goes to interest and only $361 goes to principal. By month 360, only $14 goes to interest and $2,514 goes to principal. The payment is identical every month but the composition shifts completely.
          </p>

          <h2 id="front-loaded" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Why Your Loan Is Front-Loaded with Interest</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            After five years of payments on a 30-year mortgage you have paid roughly 16% of the total interest you will ever pay, but you have only reduced your principal balance by about 8%. You have been making payments for five years and still owe nearly 93% of the original loan amount.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            This is the mathematical consequence of charging interest on the outstanding balance. The lender fronts you $400,000 on day one and they are entitled to interest on every dollar of that balance until it is repaid. Since the balance is highest at the beginning, so is the interest charge.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            What this means practically: the early years of your mortgage are when extra payments do the most damage to your total interest cost. Every dollar of principal you eliminate early eliminates a compounding stream of future interest charges.
          </p>

          <h2 id="extra-payments" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How Extra Payments Reshape Your Schedule</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            When you make a payment beyond your required monthly amount, the entire overage is applied directly to principal. That immediate reduction ripples through every future payment.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            On a $400,000 loan at 6.5% over 30 years, adding just $200 per month cuts the loan to approximately 24 years and saves roughly $84,000 in total interest. Adding $500 per month drops it to about 20 years and saves over $140,000. The savings compound because every dollar of eliminated principal prevents all future interest that would have accrued on it.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The key is ensuring your lender applies the excess to principal and not to a future scheduled payment. Always specify this in writing.
          </p>

          <h2 id="15-vs-30" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">15-Year vs. 30-Year: The Schedule Comparison</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The difference between a 15-year and 30-year amortization schedule is one of the most consequential financial decisions a homebuyer makes.
          </p>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {rows[0].map((h, i) => (
                    <th key={h} className={"px-5 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-5 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-5 py-3 text-right text-gray-500">{row[1]}</td>
                    <td className="px-5 py-3 text-right font-semibold text-green-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The 15-year borrower pays $848 more per month but saves over $300,000 in interest. The question is not whether the 15-year is mathematically superior — it clearly is. The question is whether the higher monthly payment is sustainable given income, expenses, and emergency reserves.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            A strategy many financial planners recommend: take the 30-year loan for payment flexibility, but make extra principal payments consistently as if you had the 15-year. If cash flow tightens you can always fall back to the required payment. The 15-year gives you no such flexibility.
          </p>

          <h2 id="generate" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Generate Your Schedule for Free</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most amortization tools on the internet are lead-generation forms designed to capture your contact information and sell it to lenders. You fill out your loan details and in exchange you agree to be contacted by mortgage brokers.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Truly Free Mortgage works differently. Enter your loan parameters and the full amortization schedule generates instantly in your browser. Every row of every month from payment one to the final payment. Export it as a CSV file. No email address, no phone number, no account creation.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The calculation engine runs entirely client-side. Your financial data never reaches a server. There is no backend to receive it.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Generate Your Free Amortization Schedule
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
              Figures on this page are for educational purposes only. Actual loan terms vary by lender, credit score, and market conditions. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
