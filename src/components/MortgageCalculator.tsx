<nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between no-print">
          <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{height:"56px",width:"auto",objectFit:"contain"}}/></div>
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
