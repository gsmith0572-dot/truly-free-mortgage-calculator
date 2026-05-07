import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA Mortgage Calculator — Free, No Registration | Truly Free',
  description: 'Calculate your FHA loan payment including MIP insurance. 3.5% minimum down payment. No email required. 100% free, calculated in your browser.',
  alternates: { canonical: 'https://trulyfreetools.com/blog/fha-mortgage-calculator' },
};

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'FHA Mortgage Calculator: Calculate Your Payment Including MIP',
  description: 'Complete guide to FHA loans with free calculator. Includes MIP calculation, 3.5% down payment requirements, and credit score thresholds.',
  author: { '@type': 'Organization', name: 'Truly Free Mortgage Calculator' },
  publisher: { '@type': 'Organization', name: 'Klickify Agency' },
  url: 'https://trulyfreetools.com/blog/fha-mortgage-calculator',
});

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does this FHA calculator not ask for my email?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because we do not sell leads. Every major mortgage calculator collects your contact information and sells it to lenders who will call you repeatedly. Our tool runs entirely in your browser. No data is transmitted to any server.' },
    },
    {
      '@type': 'Question',
      name: 'What is FHA MIP and how is it calculated?',
      acceptedAnswer: { '@type': 'Answer', text: 'FHA Mortgage Insurance Premium (MIP) has two components: an upfront MIP of 1.75% of the loan amount paid at closing, and an annual MIP ranging from 0.45% to 1.05% depending on loan term, loan amount, and LTV ratio. For a 30-year loan with less than 10% down, the annual MIP is 0.85%.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum down payment for an FHA loan?',
      acceptedAnswer: { '@type': 'Answer', text: 'The minimum down payment for an FHA loan is 3.5% of the purchase price for borrowers with a credit score of 580 or higher. Borrowers with credit scores between 500 and 579 are required to put down at least 10%.' },
    },
    {
      '@type': 'Question',
      name: 'Does FHA MIP ever go away?',
      acceptedAnswer: { '@type': 'Answer', text: 'For FHA loans originated after June 3, 2013 with a down payment below 10%, annual MIP remains for the life of the loan. With a down payment of 10% or more, MIP is removed after 11 years. This is a key reason many borrowers refinance into a conventional loan once they reach 20% equity.' },
    },
    {
      '@type': 'Question',
      name: 'How does an FHA loan differ from a conventional loan?',
      acceptedAnswer: { '@type': 'Answer', text: 'FHA loans are government-backed by the Federal Housing Administration, allowing lower credit scores (580+) and down payments as low as 3.5%. Conventional loans require stronger credit (typically 620+) and at least 3% down, but PMI is removable once you reach 20% equity, unlike FHA MIP which can last the life of the loan.' },
    },
  ],
});

export default function FHAMortgageCalculator() {
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
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">FHA Loans</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4 mt-3">
            FHA Mortgage Calculator: Calculate Your Payment Including MIP
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            The FHA loan is the most misunderstood mortgage product in the United States. Lenders market its low 3.5% down payment prominently while burying the true cost of Mortgage Insurance Premium (MIP) in footnotes. This guide gives you the technical formula to calculate your exact FHA payment — including both upfront and annual MIP — with zero data collection on our end.
          </p>

          <a href="/mortgage-calculator" className="block bg-blue-600 text-white rounded-xl p-5 mb-10 hover:bg-blue-700 transition-colors">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-1">Free Tool</p>
            <p className="text-lg font-bold">Calculate your FHA payment now — no email required</p>
            <p className="text-sm opacity-75 mt-1">Enable PMI toggle to include mortgage insurance in your calculation</p>
          </a>

          <h2 className="text-xl font-bold text-gray-900 mb-3">What Is an FHA Loan?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            An FHA loan is a mortgage insured by the Federal Housing Administration, a division of the U.S. Department of Housing and Urban Development (HUD). Because the federal government backstops these loans against default, approved lenders can offer them with more flexible qualification standards than conventional mortgages. The tradeoff is mandatory mortgage insurance that protects the lender — not you — in the event of default.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            FHA loans are particularly relevant for first-time buyers, borrowers rebuilding credit, and those with limited savings for a down payment. The program has been operational since 1934 and has insured over 50 million mortgages since inception.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">FHA Down Payment Requirements by Credit Score</h2>
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden mb-8">
            <table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Credit Score</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">Minimum Down Payment</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">On $350,000 Home</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['580 and above', '3.5%', '$12,250'],
                  ['500 to 579', '10%', '$35,000'],
                  ['Below 500', 'Not eligible', 'N/A'],
                ].map(([score, pct, amt]) => (
                  <tr key={score} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700 font-medium">{score}</td>
                    <td className="px-5 py-3 text-right text-gray-600">{pct}</td>
                    <td className="px-5 py-3 text-right text-gray-600">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">The True Cost of FHA MIP: The Formula Lenders Do Not Show You</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            FHA Mortgage Insurance Premium has two separate charges that dramatically increase your total loan cost:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mb-6 space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">1. Upfront MIP (UFMIP)</p>
              <p className="text-sm text-gray-600">Rate: 1.75% of the base loan amount. Paid at closing or rolled into the loan balance. On a $338,000 loan (after 3.5% down on a $350,000 home), UFMIP = $5,915. This amount is added to your loan balance on day one.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">2. Annual MIP</p>
              <p className="text-sm text-gray-600">Rate: 0.55% to 1.05% depending on loan term, loan amount, and LTV. For most 30-year loans with less than 10% down on amounts under $726,200: 0.85% annually, divided by 12 and added to each monthly payment. On a $338,000 loan: $238/month added to your P&I payment every month.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">FHA Payment Example</p>
            <p className="text-sm text-gray-500 mb-3">Home price $350,000 — 3.5% down — 6.75% rate — 30 years</p>
            <div className="space-y-2">
              {[
                ['Base Loan Amount', '$338,000'],
                ['UFMIP (1.75% rolled in)', '$5,915'],
                ['Total Loan Amount', '$343,915'],
                ['Principal and Interest', '$2,230'],
                ['Annual MIP (0.85%/12)', '$238'],
                ['Property Tax (est.)', '$338'],
                ['Homeowners Insurance (est.)', '$146'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold tabular-nums text-gray-900">{v}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm font-bold text-gray-900 pt-2">
                <span>Total Monthly Payment</span>
                <span className="tabular-nums">$2,952</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3">When Does FHA MIP Go Away?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For loans originated after June 3, 2013, the rules are straightforward and unfavorable for most borrowers:
          </p>
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden mb-8">
            <table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Down Payment</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Loan Term</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">MIP Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Less than 10%', '30 years', 'Life of loan'],
                  ['Less than 10%', '15 years', 'Life of loan'],
                  ['10% or more', '30 years', '11 years'],
                  ['10% or more', '15 years', '11 years'],
                ].map(([dp, term, dur], i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700">{dp}</td>
                    <td className="px-5 py-3 text-gray-600">{term}</td>
                    <td className="px-5 py-3 text-right font-medium text-gray-900">{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            This is the primary financial reason borrowers refinance out of FHA loans once they accumulate 20% equity. A conventional loan eliminates PMI at 20% LTV automatically, whereas FHA MIP at below 10% down payment persists indefinitely regardless of how much equity you build.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3">FHA vs Conventional: The Break-Even Analysis</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The decision between FHA and conventional financing is a numerical exercise, not a preference. Three variables determine the outcome: your credit score, your available down payment, and your projected time in the home.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Borrowers with credit scores above 720 and 5% or more to put down will almost always find conventional financing cheaper over a 7-year horizon due to removable PMI. Borrowers with scores between 580 and 679 frequently find FHA rates low enough to offset the perpetual MIP for the first 5 to 7 years. Beyond that window, the permanent MIP erodes the advantage.
          </p>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-10" style={{ minHeight: 80 }}>Advertisement</div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              ['Why does this FHA calculator not ask for my email?', 'Because we do not sell leads. Every major mortgage calculator collects your contact information and sells it to lenders who will call you repeatedly. Our tool runs entirely in your browser. No data is transmitted to any server.'],
              ['What is FHA MIP and how is it calculated?', 'FHA Mortgage Insurance Premium has two components: an upfront MIP of 1.75% of the loan amount paid at closing, and an annual MIP ranging from 0.55% to 1.05% depending on loan term, loan amount, and LTV ratio. For a 30-year loan with less than 10% down under the conforming loan limit, the annual MIP is 0.85%.'],
              ['What is the minimum down payment for an FHA loan?', 'The minimum down payment for an FHA loan is 3.5% of the purchase price for borrowers with a credit score of 580 or higher. Borrowers with credit scores between 500 and 579 are required to put down at least 10%.'],
              ['Does FHA MIP ever go away?', 'For FHA loans originated after June 3, 2013 with a down payment below 10%, annual MIP remains for the life of the loan. With a down payment of 10% or more, MIP is removed after 11 years. This is why many borrowers refinance into a conventional loan once they reach 20% equity.'],
              ['How does an FHA loan differ from a conventional loan?', 'FHA loans are government-backed, allowing credit scores as low as 580 and down payments of 3.5%. Conventional loans require stronger credit (typically 620 minimum) but PMI is removable at 20% equity. FHA MIP at below 10% down is permanent, making conventional financing cheaper long-term for qualified borrowers.'],
            ].map(([q, a]) => (
              <div key={String(q)} className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-400 leading-relaxed">
              The calculations and information on this page are for educational purposes only. Actual FHA loan terms, MIP rates, and eligibility requirements are set by HUD and may change. Consult a HUD-approved lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
