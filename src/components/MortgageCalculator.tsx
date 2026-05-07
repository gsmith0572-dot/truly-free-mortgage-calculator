'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';

interface LoanInputs {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  termYears: number;
}

interface PluginToggles {
  tax: boolean;
  insurance: boolean;
  pmi: boolean;
  hoa: boolean;
}

interface AmortRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface CalcResult {
  pi: number;
  loanAmount: number;
  totalInterest: number;
  totalCost: number;
  plugins: { tax: number; insurance: number; pmi: number; hoa: number };
  totalMonthly: number;
  amortSchedule: AmortRow[];
  dpPercent: number;
}

interface ScenarioInputs extends LoanInputs {
  label: string;
}

interface PluginConfig {
  annualTaxRate: number;
  annualInsRate: number;
  annualPmiRate: number;
  hoaMonthly: number;
}

const US_REGION: PluginConfig = {
  annualTaxRate: 0.012,
  annualInsRate: 0.005,
  annualPmiRate: 0.008,
  hoaMonthly: 150,
};

function calcPlugins(loanAmount: number, homePrice: number, dpPercent: number, toggles: PluginToggles, config: PluginConfig = US_REGION) {
  return {
    tax: toggles.tax ? (homePrice * config.annualTaxRate) / 12 : 0,
    insurance: toggles.insurance ? (homePrice * config.annualInsRate) / 12 : 0,
    pmi: toggles.pmi && dpPercent < 20 ? (loanAmount * config.annualPmiRate) / 12 : 0,
    hoa: toggles.hoa ? config.hoaMonthly : 0,
  };
}

function calcMonthlyPI(principal: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function buildAmort(principal: number, annualRate: number, years: number): AmortRow[] {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const payment = calcMonthlyPI(principal, annualRate, years);
  let balance = principal;
  const rows: AmortRow[] = [];
  for (let month = 1; month <= n; month++) {
    const interest = balance * r;
    const princ = payment - interest;
    balance = Math.max(0, balance - princ);
    rows.push({ month, payment, principal: princ, interest, balance });
  }
  return rows;
}

function runCalc(inputs: LoanInputs, toggles: PluginToggles): CalcResult | null {
  const { homePrice, downPayment, interestRate, termYears } = inputs;
  const loanAmount = Math.max(0, homePrice - downPayment);
  const dpPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
  if (loanAmount <= 0 || interestRate <= 0) return null;
  const pi = calcMonthlyPI(loanAmount, interestRate, termYears);
  const plugins = calcPlugins(loanAmount, homePrice, dpPercent, toggles);
  const totalMonthly = pi + plugins.tax + plugins.insurance + plugins.pmi + plugins.hoa;
  const totalInterest = pi * termYears * 12 - loanAmount;
  const totalCost = loanAmount + totalInterest;
  const amortSchedule = buildAmort(loanAmount, interestRate, termYears);
  return { pi, loanAmount, totalInterest, totalCost, plugins, totalMonthly, amortSchedule, dpPercent };
}

const fmtCurrency = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
const fmtCompact = (n: number): string => {
  const r = Math.round(n);
  if (r >= 1000000) return '$' + (r / 1000000).toFixed(1) + 'M';
  if (r >= 100000) return '$' + (r / 1000).toFixed(0) + 'k';
  if (r >= 1000) return '$' + (r / 1000).toFixed(1) + 'k';
  return '$' + r.toLocaleString('en-US');
};

const JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Truly Free Mortgage Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD' },
  description: 'Free mortgage calculator with full amortization schedule, PMI, taxes, insurance, HOA. No registration. No email. 100% client-side.',
  url: 'https://trulyfreetools.com/mortgage-calculator',
  creator: { '@type': 'Organization', name: 'Klickify Agency' },
});

function Toggle({ label, hint, checked, onChange }: { label: string; hint: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-600">{label} <span className="text-gray-400 text-xs">{hint}</span></span>
      <button role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
        className={"relative w-8 h-5 rounded-full transition-colors duration-200 flex-shrink-0 " + (checked ? "bg-blue-600" : "bg-gray-300")}>
        <span className={"absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 " + (checked ? "translate-x-3" : "translate-x-0")} />
      </button>
    </div>
  );
}

function BarRow({ label, value, total, color, visible }: { label: string; value: number; total: number; color: string; visible: boolean }) {
  if (!visible) return null;
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-500">{label}</span>
        <span className="font-semibold text-gray-900 tabular-nums">{fmtCurrency(value)}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: pct.toFixed(1) + '%', background: color }} />
      </div>
    </div>
  );
}

function AmortTable({ rows }: { rows: AmortRow[] }) {
  return (
    <div className="max-h-72 overflow-y-auto">
      <table className="w-full text-xs border-collapse" style={{ fontVariantNumeric: 'tabular-nums' }}>
        <thead className="sticky top-0 bg-gray-50">
          <tr>
            {['Month', 'Payment', 'Principal', 'Interest', 'Balance'].map((h) => (
              <th key={h} className={"py-2 px-3 font-semibold text-xs uppercase tracking-wide text-gray-400 " + (h === 'Month' ? 'text-left' : 'text-right')}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.month} className="border-b border-gray-50 hover:bg-blue-50">
              <td className="py-1.5 px-3 font-medium text-gray-800">{r.month}</td>
              <td className="py-1.5 px-3 text-right text-gray-500">{fmtCurrency(r.payment)}</td>
              <td className="py-1.5 px-3 text-right text-gray-500">{fmtCurrency(r.principal)}</td>
              <td className="py-1.5 px-3 text-right text-gray-500">{fmtCurrency(r.interest)}</td>
              <td className="py-1.5 px-3 text-right text-gray-500">{fmtCurrency(r.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScenarioView() {
  const [sc, setSc] = useState<[ScenarioInputs, ScenarioInputs]>([
    { label: 'Scenario A', homePrice: 350000, downPayment: 70000, interestRate: 6.75, termYears: 30 },
    { label: 'Scenario B', homePrice: 350000, downPayment: 70000, interestRate: 7.25, termYears: 30 },
  ]);
  const noPlugins: PluginToggles = { tax: false, insurance: false, pmi: false, hoa: false };
  const results = sc.map((s) => runCalc(s, noPlugins));
  const winnerIdx = results[0] && results[1] ? (results[0].pi <= results[1].pi ? 0 : 1) : -1;
  const saving = results[0] && results[1] ? Math.abs(results[0].pi - results[1].pi) : 0;
  const updateSc = (idx: 0 | 1, field: keyof ScenarioInputs, raw: string) => {
    const val = field === 'termYears' ? parseInt(raw) : parseFloat(raw);
    setSc((prev) => {
      const next: [ScenarioInputs, ScenarioInputs] = [{ ...prev[0] }, { ...prev[1] }];
      (next[idx] as unknown as Record<string, unknown>)[field] = isNaN(val) ? 0 : val;
      return next;
    });
  };
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
        <div className="grid grid-cols-2 gap-5">
          {sc.map((s, idx) => (
            <div key={idx}>
              <p className={"text-xs font-semibold uppercase tracking-wider mb-3 " + (idx === 0 ? "text-blue-600" : "text-gray-600")}>{s.label}</p>
              <div className="space-y-3">
                <div><label className="block text-xs font-medium text-gray-500 mb-1">Home Price</label><div className="relative"><span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">$</span><input type="number" defaultValue={s.homePrice} step={1000} onChange={(e) => updateSc(idx as 0 | 1, 'homePrice', e.target.value)} className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500" style={{ fontVariantNumeric: 'tabular-nums' }} /></div></div>
                <div><label className="block text-xs font-medium text-gray-500 mb-1">Down Payment</label><div className="relative"><span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">$</span><input type="number" defaultValue={s.downPayment} step={1000} onChange={(e) => updateSc(idx as 0 | 1, 'downPayment', e.target.value)} className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500" style={{ fontVariantNumeric: 'tabular-nums' }} /></div></div>
                <div className="grid grid-cols-2 gap-2">
                  <div><label className="block text-xs font-medium text-gray-500 mb-1">Rate</label><div className="relative"><input type="number" defaultValue={s.interestRate} step={0.05} onChange={(e) => updateSc(idx as 0 | 1, 'interestRate', e.target.value)} className="w-full pl-2.5 pr-7 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500" style={{ fontVariantNumeric: 'tabular-nums' }} /><span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">%</span></div></div>
                  <div><label className="block text-xs font-medium text-gray-500 mb-1">Term</label><select defaultValue={s.termYears} onChange={(e) => updateSc(idx as 0 | 1, 'termYears', e.target.value)} className="w-full px-2.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500">{[30,20,15,10].map((y) => <option key={y} value={y}>{y} yr</option>)}</select></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {results.map((r, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden">
            <div className={"px-4 py-3 text-white " + (idx === 0 ? "bg-blue-600" : "bg-gray-600")}>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-75 mb-1">{sc[idx].label}</p>
              <p className="text-3xl font-semibold tracking-tight tabular-nums leading-none">{r ? fmtCurrency(r.pi) : '—'}<span className="text-sm font-normal opacity-60">/mo</span></p>
            </div>
            <div className="px-4 py-3 space-y-1.5">
              {[['Loan Amount', r ? fmtCompact(r.loanAmount) : '—'],['Rate', sc[idx].interestRate + '%'],['Term', sc[idx].termYears + ' yr'],['Total Interest', r ? fmtCompact(r.totalInterest) : '—'],['Total Cost', r ? fmtCompact(r.totalCost) : '—']].map(([k,v]) => (
                <div key={String(k)} className="flex justify-between text-xs py-1 border-b border-gray-50 last:border-0"><span className="text-gray-500">{k}</span><span className="font-semibold tabular-nums">{v}</span></div>
              ))}
              {idx === winnerIdx && saving > 0 && <div className="mt-2 text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1.5 rounded-lg text-center">Saves {fmtCurrency(saving)}/mo</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MortgageCalculator() {
  const [mode, setMode] = useState<'standard' | 'scenario'>('standard');
  const [amortOpen, setAmortOpen] = useState(false);
  const [inputs, setInputs] = useState<LoanInputs>({ homePrice: 350000, downPayment: 70000, interestRate: 6.75, termYears: 30 });
  const [toggles, setToggles] = useState<PluginToggles>({ tax: false, insurance: false, pmi: false, hoa: false });
  const dpPercent = inputs.homePrice > 0 ? Math.round((inputs.downPayment / inputs.homePrice) * 100) : 0;
  const result = useMemo(() => runCalc(inputs, toggles), [inputs, toggles]);
  const setInput = useCallback(<K extends keyof LoanInputs>(key: K, raw: string) => {
    const val = key === 'termYears' ? parseInt(raw) : parseFloat(raw);
    setInputs((prev) => ({ ...prev, [key]: isNaN(val) ? 0 : val }));
  }, []);
  const setDpFromPercent = useCallback((pct: number) => {
    setInputs((prev) => ({ ...prev, downPayment: Math.round((prev.homePrice * pct) / 100) }));
  }, []);
  const hasPlugins = result ? result.plugins.tax + result.plugins.insurance + result.plugins.pmi + result.plugins.hoa > 0 : false;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON_LD }} />
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-amort { display: block !important; max-height: none !important; overflow: visible !important; }
        }
      `}</style>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between no-print">
          <Image src="/logo.png" alt="Truly Free Mortgage Calculator" width={400} height={80} className="h-16 w-auto" priority />
          <div className="flex gap-6">
            {['Calculator','Compare','Blog'].map((l) => (
              <button key={l} onClick={() => l === 'Compare' ? setMode('scenario') : setMode('standard')}
                className={"text-sm transition-colors " + ((l === 'Calculator' && mode === 'standard') || (l === 'Compare' && mode === 'scenario') ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700')}>{l}</button>
            ))}
          </div>
        </nav>
        <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-center gap-2 no-print">
          <span className="bg-blue-600 text-white text-xs font-bold tracking-widest px-2 py-0.5 rounded">TRULY FREE</span>
          <span className="text-xs text-gray-500">No registration. No email. No limits. Your data never leaves your browser.</span>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12">
          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium mb-6 no-print" style={{ minHeight: 80 }}>Advertisement</div>
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Truly Free Mortgage Calculator</h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Calculated locally
              </span>
              All calculations happen in your browser. Zero data transmitted.
            </p>
          </div>
          <div className="flex border-b border-gray-200 mb-6 no-print">
            {(['standard','scenario'] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={"px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors " + (mode === m ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700')}>
                {m === 'standard' ? 'Standard Calculator' : 'Scenario Comparison'}
              </button>
            ))}
          </div>
          {mode === 'scenario' && <ScenarioView />}
          {mode === 'standard' && (
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5 items-start">
              <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Loan Details</p>
                <div className="mb-4"><label className="block text-xs font-medium text-gray-500 mb-1">Home Price</label><div className="relative"><span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">$</span><input type="number" value={inputs.homePrice} step={1000} onChange={(e) => setInput('homePrice', e.target.value)} className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors" style={{ fontVariantNumeric: 'tabular-nums' }} /></div></div>
                <div className="mb-4"><label className="block text-xs font-medium text-gray-500 mb-1">Down Payment <span className="text-blue-600 font-semibold">{dpPercent}%</span></label><div className="relative mb-2"><span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">$</span><input type="number" value={inputs.downPayment} step={500} onChange={(e) => setInput('downPayment', e.target.value)} className="w-full pl-6 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors" style={{ fontVariantNumeric: 'tabular-nums' }} /></div><input type="range" min={0} max={100} step={1} value={dpPercent} onChange={(e) => setDpFromPercent(parseInt(e.target.value))} className="w-full accent-blue-600" /><div className="flex justify-between text-xs text-gray-400 mt-0.5"><span>0%</span><span>50%</span><span>100%</span></div></div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div><label className="block text-xs font-medium text-gray-500 mb-1">Interest Rate</label><div className="relative"><input type="number" value={inputs.interestRate} step={0.05} min={0.1} max={25} onChange={(e) => setInput('interestRate', e.target.value)} className="w-full pl-2.5 pr-7 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors" style={{ fontVariantNumeric: 'tabular-nums' }} /><span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">%</span></div></div>
                  <div><label className="block text-xs font-medium text-gray-500 mb-1">Loan Term</label><select value={inputs.termYears} onChange={(e) => setInput('termYears', e.target.value)} className="w-full px-2.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white outline-none focus:border-blue-500 transition-colors">{[30,20,15,10].map((y) => <option key={y} value={y}>{y} years</option>)}</select></div>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Additional Costs</p>
                  <Toggle label="Property Tax" hint="(~1.2%/yr)" checked={toggles.tax} onChange={(v) => setToggles((p) => ({ ...p, tax: v }))} />
                  <Toggle label="Homeowners Insurance" hint="(~0.5%/yr)" checked={toggles.insurance} onChange={(v) => setToggles((p) => ({ ...p, insurance: v }))} />
                  <Toggle label="PMI" hint="(if less than 20% down)" checked={toggles.pmi} onChange={(v) => setToggles((p) => ({ ...p, pmi: v }))} />
                  <Toggle label="HOA Fees" hint="(est. $150/mo)" checked={toggles.hoa} onChange={(v) => setToggles((p) => ({ ...p, hoa: v }))} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden">
                  <div className="bg-blue-600 px-5 py-4 text-white">
                    <p className="text-xs font-medium uppercase tracking-widest opacity-75 mb-1">Monthly Payment</p>
                    <p className="text-4xl font-semibold tracking-tight leading-none tabular-nums">{result ? fmtCurrency(result.totalMonthly) : '—'}</p>
                    <p className="text-xs opacity-60 mt-1">{hasPlugins ? 'Including all selected costs' : 'Principal and Interest only'}</p>
                    <p className="text-xs opacity-50 mt-2">Calculated locally — zero data transmitted — FREE FOREVER</p>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-gray-100">
                    {[['Loan Amount', result ? fmtCompact(result.loanAmount) : '—'],['Total Interest', result ? fmtCompact(result.totalInterest) : '—'],['Total Cost', result ? fmtCompact(result.totalCost) : '—']].map(([label,val]) => (
                      <div key={String(label)} className="py-3 px-4 text-center"><p className="text-sm font-semibold text-gray-900 tabular-nums">{val}</p><p className="text-xs text-gray-400 mt-0.5">{label}</p></div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Payment Breakdown</p>
                  <BarRow label="Principal and Interest" value={result?.pi ?? 0} total={result?.totalMonthly ?? 1} color="#2563EB" visible={!!result} />
                  <BarRow label="Property Tax" value={result?.plugins.tax ?? 0} total={result?.totalMonthly ?? 1} color="#0EA5E9" visible={!!(result && result.plugins.tax > 0)} />
                  <BarRow label="Insurance" value={result?.plugins.insurance ?? 0} total={result?.totalMonthly ?? 1} color="#8B5CF6" visible={!!(result && result.plugins.insurance > 0)} />
                  <BarRow label="PMI" value={result?.plugins.pmi ?? 0} total={result?.totalMonthly ?? 1} color="#F59E0B" visible={!!(result && result.plugins.pmi > 0)} />
                  <BarRow label="HOA" value={result?.plugins.hoa ?? 0} total={result?.totalMonthly ?? 1} color="#10B981" visible={!!(result && result.plugins.hoa > 0)} />
                  {!result && <p className="text-sm text-gray-400 text-center py-4">Enter loan details to see breakdown</p>}
                </div>
                {hasPlugins && result && (
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Full Monthly Cost</p>
                    {([['Principal and Interest', result.pi], result.plugins.tax > 0 ? ['Property Tax', result.plugins.tax] : null, result.plugins.insurance > 0 ? ['Insurance', result.plugins.insurance] : null, result.plugins.pmi > 0 ? ['PMI', result.plugins.pmi] : null, result.plugins.hoa > 0 ? ['HOA', result.plugins.hoa] : null] as ([string,number]|null)[]).filter((x): x is [string,number] => x !== null).map((row) => (
                      <div key={row[0]} className="flex justify-between text-xs py-1.5 border-b border-blue-100 last:border-0"><span className="text-gray-500">{row[0]}</span><span className="font-semibold tabular-nums">{fmtCurrency(row[1])}</span></div>
                    ))}
                    <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 mt-1"><span>Total</span><span className="tabular-nums">{fmtCurrency(result.totalMonthly)}</span></div>
                  </div>
                )}
                <div className="flex gap-2 no-print">
                  <button onClick={() => window.print()} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 rounded-lg bg-white text-xs font-medium text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    Export PDF
                  </button>
                  <button onClick={() => setMode('scenario')} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 rounded-lg bg-white text-xs font-medium text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/></svg>
                    Compare Scenarios
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] overflow-hidden">
                  <button className="w-full flex items-center justify-between px-5 py-3.5 no-print" onClick={() => setAmortOpen((v) => !v)}>
                    <span className="text-sm font-medium text-gray-800">Full Amortization Schedule</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={"text-gray-400 transition-transform " + (amortOpen ? "rotate-180" : "")}><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {result && amortOpen && (
                    <div className="border-t border-gray-100 print-amort">
                      <AmortTable rows={result.amortSchedule} />
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08)] flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest font-medium no-print" style={{ minHeight: 80 }}>Advertisement</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
