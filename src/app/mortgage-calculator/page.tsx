import MortgageCalculator from '@/components/MortgageCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Mortgage Calculator — No Registration | Truly Free',
  description: 'Calculate your mortgage payment instantly. Full amortization schedule, PMI, taxes, HOA. 100% free. No email. No signup.',
  alternates: { canonical: 'https://trulyfreemortgage.com/mortgage-calculator' },
};

const howToJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use the Truly Free Mortgage Calculator',
  description: 'Calculate your full monthly mortgage payment including PMI, taxes, insurance, and HOA in four steps.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Enter Home Price', text: 'Type the purchase price of the home. The calculator automatically sets a 20% down payment as the starting point.' },
    { '@type': 'HowToStep', position: 2, name: 'Set Your Down Payment', text: 'Enter a dollar amount or adjust the percentage. Drop below 20% and enable the PMI toggle to see the true cost.' },
    { '@type': 'HowToStep', position: 3, name: 'Enter Interest Rate', text: "Use your lender's quoted rate or the current national average. A 0.25% difference changes total interest paid by thousands over 30 years." },
    { '@type': 'HowToStep', position: 4, name: 'Choose Loan Term', text: 'Select 10, 15, 20, or 30 years. Use the Scenario Comparison tab to view multiple terms side by side.' },
  ],
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToJsonLd }} />
      <MortgageCalculator />
    </>
  );
}
