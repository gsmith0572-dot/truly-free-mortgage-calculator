import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Truly Free Mortgage Calculator — No Email, No Registration',
  description: 'Calculate your mortgage payment instantly. Full amortization, PMI, taxes, HOA. 100% free. No signup. Your data never leaves your browser.',
  alternates: { canonical: 'https://trulyfreemortgage.com' },
};

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this mortgage calculator really free?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes — completely free, with no limits. No trial period, no daily cap, no premium version. You can run as many calculations as you want. It's supported by advertising, not by selling your data or requiring registration." },
    },
    {
      '@type': 'Question',
      name: 'Does the calculator store my financial information?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Every calculation runs entirely in your browser. Nothing is transmitted to a server. The numbers you enter — home price, income, down payment — never leave your device. No account, no session, no data retention.' },
    },
    {
      '@type': 'Question',
      name: 'What does the calculator include beyond principal and interest?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can toggle property tax, homeowners insurance, PMI, and HOA fees independently to see your full monthly cost. The amortization schedule shows every payment over the life of the loan broken down by principal and interest.' },
    },
    {
      '@type': 'Question',
      name: 'How accurate are the results?',
      acceptedAnswer: { '@type': 'Answer', text: 'The principal and interest calculation uses the standard amortization formula and is mathematically exact. Property tax, insurance, and PMI are estimates based on national averages — your actual costs depend on location, lender, and loan type.' },
    },
    {
      '@type': 'Question',
      name: 'Why do most mortgage calculators ask for my email?',
      acceptedAnswer: { '@type': 'Answer', text: "Most mortgage calculators are lead generation tools for lenders. They collect your contact information and sell it to loan officers who will call you. This calculator doesn't participate in that model. No data is collected, no leads are sold." },
    },
    {
      '@type': 'Question',
      name: 'Can I compare multiple loan scenarios?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The calculator has a Scenario Comparison tab that lets you run up to three loan scenarios side by side — useful for comparing 15-year vs 30-year terms, different down payments, or the effect of a rate change on total interest paid.' },
    },
  ],
});

const faqs = [
  { q: 'Is this mortgage calculator really free?', a: "Yes — completely free, with no limits. No trial period, no daily cap, no premium version. You can run as many calculations as you want. It's supported by advertising, not by selling your data or requiring registration." },
  { q: 'Does the calculator store my financial information?', a: 'No. Every calculation runs entirely in your browser. Nothing is transmitted to a server. The numbers you enter — home price, income, down payment — never leave your device. No account, no session, no data retention.' },
  { q: 'What does the calculator include beyond principal and interest?', a: 'You can toggle property tax, homeowners insurance, PMI, and HOA fees independently to see your full monthly cost. The amortization schedule shows every payment over the life of the loan broken down by principal and interest.' },
  { q: 'How accurate are the results?', a: 'The principal and interest calculation uses the standard amortization formula and is mathematically exact. Property tax, insurance, and PMI are estimates based on national averages — your actual costs depend on location, lender, and loan type.' },
  { q: "Why do most mortgage calculators ask for my email?", a: "Most mortgage calculators are lead generation tools for lenders. They collect your contact information and sell it to loan officers who will call you. This calculator doesn't participate in that model. No data is collected, no leads are sold." },
  { q: 'Can I compare multiple loan scenarios?', a: 'Yes. The calculator has a Scenario Comparison tab that lets you run up to three loan scenarios side by side — useful for comparing 15-year vs 30-year terms, different down payments, or the effect of a rate change on total interest paid.' },
];

const useCases = [
  { title: 'First-Time Buyers', desc: 'See exactly how your down payment affects PMI and monthly cost before you commit to anything.' },
  { title: 'Refinance Math', desc: 'Calculate your break-even point when comparing your current rate to a new offer from your lender.' },
  { title: '15 vs 30 Year', desc: 'Run both terms side by side and see the total interest difference over the life of the loan.' },
  { title: 'Investment Properties', desc: 'Factor in different down payment requirements and rate premiums for non-owner-occupied purchases.' },
  { title: 'Budget Planning', desc: 'Work backward from your target monthly payment to find the home price that fits your budget.' },
  { title: 'Extra Payments', desc: 'Understand how one extra payment per year compresses your payoff timeline by years, not months.' },
];

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#16a34a" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <nav style={{ background: '#ffffff', boxShadow: '0px 1px 3px rgba(24,28,30,0.06)', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'linear-gradient(135deg,#0058c3,#0070f3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white" /></svg>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', color: '#181c1e' }}>Truly <span style={{ color: '#0058c3' }}>Free</span> Mortgage</span>
        </a>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="/mortgage-calculator" style={{ fontSize: '14px', color: '#4a5568', textDecoration: 'none', letterSpacing: '-0.01em' }}>Calculator</a>
          <a href="/blog" style={{ fontSize: '14px', color: '#4a5568', textDecoration: 'none', letterSpacing: '-0.01em' }}>Blog</a>
        </div>
      </nav>

      <div style={{ background: '#f7fafc', padding: '80px 24px 88px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: '20px' }}>No Registration Required</div>
          <h1 style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-0.03em', color: '#181c1e', lineHeight: 1.15, marginBottom: '20px', margin: '0 0 20px' }}>
            The Mortgage Calculator That Doesn't Ask for Your Email
          </h1>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: 1.7, marginBottom: '36px' }}>
            Full amortization. PMI, taxes, HOA. Scenario comparison. 100% client-side — your numbers never leave your browser.
          </p>
          <a href="/mortgage-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#ffffff', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', padding: '14px 36px', borderRadius: '6px', textDecoration: 'none', marginBottom: '40px' }}>
            Open Calculator
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
            {['No Email Required', 'No Daily Limit', 'Data Stays in Browser', 'No Credit Card'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', borderRadius: '4px', padding: '8px 14px', boxShadow: '0px 2px 8px rgba(24,28,30,0.06)' }}>
                {checkIcon}
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#ffffff', padding: '72px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '20px', lineHeight: 1.2 }}>Why Every Mortgage Calculator Asks for Your Email (And Why This One Doesn't)</h2>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75, marginBottom: '20px' }}>Here's the thing most people don't realize: the major mortgage calculators aren't tools. They're lead funnels. Bankrate, LendingTree, Zillow — you enter your home price and income, and within minutes a loan officer is calling you. Your "free" calculation cost you your contact information, which was sold to four or five lenders simultaneously.</p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75, marginBottom: '20px' }}>That model works fine for lenders. It's terrible for borrowers who just want to run numbers before they're ready to talk to anyone. Which is exactly why this calculator asks for nothing. No email. No phone number. No account. You get the same calculation the lenders' systems use, without giving up your contact information to get it.</p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75 }}>The tool is supported by Google AdSense — advertising, not lead generation. That's the entire business model. It costs nothing and collects nothing.</p>
        </div>
      </div>

      <div style={{ background: '#f7fafc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '20px', lineHeight: 1.2 }}>What This Calculator Actually Includes</h2>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75, marginBottom: '20px' }}>A lot of mortgage calculators show you principal and interest and call it a day. The real number you need is PITI plus PMI — Principal, Interest, Taxes, Insurance, and Private Mortgage Insurance if your down payment is under 20%. That's what your lender will actually qualify you on, and it's often $400–700/month higher than the P&amp;I figure alone.</p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75, marginBottom: '20px' }}>This calculator lets you toggle each component independently. Add HOA if you're looking at a condo or planned community. See exactly what drops off when your equity crosses 20% and PMI goes away. Run a 15-year and a 30-year scenario in the same session and see the total interest difference — on a $400,000 loan at 7%, that gap is $246,000.</p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75 }}>The full amortization schedule is there too. Every single payment, broken down by principal and interest, from month one to the final payoff. It's the same data your lender has. You should have it too.</p>
        </div>
      </div>

      <div style={{ background: '#ffffff', padding: '72px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '8px', textAlign: 'center', lineHeight: 1.2 }}>When People Use This</h2>
          <p style={{ fontSize: '15px', color: '#718096', textAlign: 'center', marginBottom: '40px', letterSpacing: '-0.01em' }}>Six scenarios where running the numbers first changes the outcome.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {useCases.map(({ title, desc }) => (
              <div key={title} style={{ background: '#f7fafc', borderRadius: '8px', padding: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#181c1e', letterSpacing: '-0.01em', marginBottom: '8px' }}>{title}</div>
                <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/mortgage-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none' }}>
              Open Calculator
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: '#f7fafc', padding: '72px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '8px', lineHeight: 1.2 }}>Common Questions</h2>
          <p style={{ fontSize: '15px', color: '#718096', marginBottom: '36px', letterSpacing: '-0.01em' }}>Straightforward answers. No fluff.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ background: '#ffffff', borderRadius: '8px', padding: '24px', boxShadow: '0px 2px 8px rgba(24,28,30,0.04)' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#181c1e', letterSpacing: '-0.01em', marginBottom: '10px' }}>{q}</div>
                <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
