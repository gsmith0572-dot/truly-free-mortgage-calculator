import MortgageCalculator from '@/components/MortgageCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Mortgage Calculator — No Registration | Truly Free',
  description: 'Calculate your mortgage payment instantly. Full amortization schedule, PMI, taxes, HOA. 100% free. No email. No signup.',
};

export default function Page() {
  return <MortgageCalculator />;
}
