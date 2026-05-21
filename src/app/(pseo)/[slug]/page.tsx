import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface StateData {
  name: string;
  slug: string;
  propertyTaxRate: number;
  medianHomePrice: number;
  downPayment: number;
  loanAmount: number;
  piMonthly: number;
  taxMonthly: number;
  insuranceMonthly: number;
  pitiMonthly: number;
  prose: string;
  faqs: { q: string; a: string }[];
}

const states: Record<string, StateData> = {
  'california-mortgage-calculator': {
    name: 'California',
    slug: 'california-mortgage-calculator',
    propertyTaxRate: 0.73,
    medianHomePrice: 793000,
    downPayment: 158600,
    loanAmount: 634400,
    piMonthly: 4270,
    taxMonthly: 483,
    insuranceMonthly: 200,
    pitiMonthly: 4953,
    prose: `California's median home price hit $793,000 in 2026, which means most buyers are staring at a payment north of $4,900/month before they even factor in HOA fees. That's the full picture — principal, interest, property tax, and insurance on a 20% down, 30-year loan at current rates.

Here's what surprises first-time California buyers: Proposition 13 caps your annual property tax increase at 2%, but your base assessment locks in at whatever you paid. Buy at $793,000 and you're paying 0.73% on that forever (adjusted slowly). That's $483/month in property tax from day one — lower than most other high-cost states, which is the one thing working in your favor.

The real shock is usually the down payment. A standard 20% on a $793,000 home is $158,600. Many buyers in California do put 20% just to avoid PMI, because the insurance premium on a $634,000 loan adds another $400–500/month. If you're putting less than 20% down, make sure you're running those numbers before you fall in love with a property. Use the calculator above to toggle PMI on and see exactly what your true monthly cost looks like.`,
    faqs: [
      { q: 'What is the average mortgage payment in California?', a: 'On the California median home price of $793,000 with 20% down and a 30-year loan at current rates, the monthly principal and interest is roughly $4,270. Add property tax at 0.73% ($483/month) and homeowners insurance (~$200/month) and your total PITI hits approximately $4,953/month.' },
      { q: 'How does Proposition 13 affect my California mortgage?', a: 'Proposition 13 caps annual property tax increases at 2% per year, and resets your assessed value to your purchase price when you buy. This protects you from large tax increases over time, but means you pay tax based on today\'s purchase price from day one. On a $793,000 home, that\'s $483/month in property tax.' },
      { q: 'Do I need 20% down to buy a home in California?', a: 'No, but many California buyers put 20% down specifically to avoid PMI. On a $634,000 loan (20% down on $793,000), PMI at 0.8% would add about $423/month. FHA loans allow 3.5% down but add MIP. Use this calculator to compare total monthly cost at different down payment levels.' },
      { q: 'What credit score do I need for a California mortgage?', a: 'Conventional loans typically require a 620+ credit score, though scores above 740 get the best rates. FHA loans accept scores as low as 580 (3.5% down) or 500 (10% down). In California\'s market, stronger credit directly translates to lower payments — a 0.5% rate difference on a $634,000 loan saves over $200/month.' },
      { q: 'How much income do I need to afford a $793,000 California home?', a: 'Using the 28% front-end debt-to-income rule, a $4,953/month housing payment requires a gross monthly income of at least $17,689 — or roughly $212,000/year. Most California lenders also look at the 36% total debt ratio, which means your car, student loans, and other payments count against this limit.' },
    ],
  },

  'texas-mortgage-calculator': {
    name: 'Texas',
    slug: 'texas-mortgage-calculator',
    propertyTaxRate: 1.63,
    medianHomePrice: 318000,
    downPayment: 63600,
    loanAmount: 254400,
    piMonthly: 1713,
    taxMonthly: 432,
    insuranceMonthly: 132,
    pitiMonthly: 2277,
    prose: `Texas trades state income tax for some of the highest property taxes in the country — 1.63% on average, compared to the national average of 1.07%. On a $318,000 home, that's $432/month in property tax on top of your mortgage. First-time buyers get hit with sticker shock when they see the full PITI versus the P&I number alone.

The math: a $318,000 Texas home with 20% down ($63,600) at current rates runs about $1,713/month in principal and interest. Sounds manageable. But add $432/month in property tax and $132/month in homeowners insurance and your actual monthly cost is $2,277. That's $564/month more than the headline number — which is exactly what this calculator is built to show you before you fall in love with a listing.

Texas property taxes vary significantly by county. Travis County (Austin) runs around 1.80%, while some DFW suburbs hit 2.2% or higher. If you're shopping across county lines, run separate calculations with the actual local rate — a 0.5% difference on a $318,000 home is $132/month over the life of the loan.`,
    faqs: [
      { q: 'What is the average mortgage payment in Texas?', a: 'On the Texas median home price of $318,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $1,713. Add property tax at 1.63% ($432/month) and homeowners insurance (~$132/month) and your total PITI is approximately $2,277/month.' },
      { q: 'Why are Texas property taxes so high?', a: 'Texas has no state income tax. The state funds public services — especially schools — primarily through property taxes, which is why the effective rate of 1.63% is among the highest in the US. The trade-off is no income tax on your wages, but your housing costs reflect the full tax burden through the property tax bill.' },
      { q: 'Does Texas have a homestead exemption?', a: 'Yes. Texas homeowners who occupy their property as a primary residence qualify for the homestead exemption — a $100,000 reduction in your home\'s assessed value for school district taxes (as of 2023). On a $318,000 home, this effectively reduces your taxable value by about $100,000, lowering your annual tax bill.' },
      { q: 'What credit score do I need for a Texas mortgage?', a: 'Conventional loans require 620+ (740+ for best rates). FHA loans accept 580 with 3.5% down. Texas also has programs through the Texas State Affordable Housing Corporation (TSAHC) and TDHCA for first-time buyers, which can include down payment assistance for qualifying income levels.' },
      { q: 'How much does a $300,000 house cost per month in Texas?', a: 'On a $300,000 Texas home with 20% down ($60,000) at 7.1% for 30 years: P&I = $1,614/month. Add 1.63% property tax ($407/month) and homeowners insurance (~$125/month) and your total monthly payment is approximately $2,146. If your down payment is under 20%, add PMI of roughly $160/month.' },
    ],
  },

  'florida-mortgage-calculator': {
    name: 'Florida',
    slug: 'florida-mortgage-calculator',
    propertyTaxRate: 0.89,
    medianHomePrice: 408000,
    downPayment: 81600,
    loanAmount: 326400,
    piMonthly: 2199,
    taxMonthly: 303,
    insuranceMonthly: 250,
    pitiMonthly: 2752,
    prose: `Florida's no-state-income-tax advantage is real, but it doesn't fully offset what you pay in homeowners insurance. Hurricane exposure drives insurance premiums 30–50% above the national average in most of the state. On a $408,000 Florida home, budget at least $250/month for insurance — and $400+ if you're in a coastal county or flood zone.

The full monthly picture: 20% down on $408,000 runs $81,600 upfront. At current 30-year rates, your P&I is $2,199/month. Add property tax at 0.89% ($303/month) and $250/month insurance and you're at $2,752/month. That's before flood insurance, which is required if your property is in FEMA's Special Flood Hazard Area — and can add $100–500/month depending on elevation.

One thing working in Florida buyers' favor: the homestead exemption removes $50,000 from your assessed value for school taxes and $25,000 for all other taxes. On a $408,000 home, that's a meaningful reduction. You apply for it through your county property appraiser after closing.`,
    faqs: [
      { q: 'What is the average mortgage payment in Florida?', a: 'On the Florida median home price of $408,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $2,199. Add property tax at 0.89% ($303/month) and homeowners insurance (~$250/month including hurricane coverage) and your total PITI is approximately $2,752/month.' },
      { q: 'How does Florida\'s homestead exemption work?', a: 'Florida\'s homestead exemption reduces the assessed value of your primary residence by $50,000 for school district taxes and $25,000 for all other taxing authorities. On a $408,000 home, this can reduce your annual tax bill by $600–900 depending on local millage rates. You apply through your county property appraiser after closing.' },
      { q: 'Do I need flood insurance in Florida?', a: 'Flood insurance is required if your property is in FEMA\'s Special Flood Hazard Area (SFHA) and you have a federally backed mortgage. Even outside flood zones, many lenders recommend it in Florida. Flood insurance is separate from homeowners insurance and can add $100–500/month depending on your elevation certificate and flood zone designation.' },
      { q: 'Why is homeowners insurance so expensive in Florida?', a: 'Hurricane exposure is the primary driver. South Florida, coastal areas, and the Tampa Bay region face the highest risk and the highest premiums. As of 2026, average homeowners insurance in Florida runs $2,400–4,800/year — versus $1,500/year nationally. Many national insurers have reduced or exited the Florida market, limiting options and increasing costs.' },
      { q: 'What credit score do I need to buy a home in Florida?', a: 'Conventional loans require 620+, with 740+ getting the best rates. FHA loans accept 580 with 3.5% down. Florida also has the Florida Housing Finance Corporation\'s first-time buyer programs, which include income limits but can offer below-market rates and down payment assistance. Use the calculator to see what rate improvement does to your payment.' },
    ],
  },

  'new-york-mortgage-calculator': {
    name: 'New York',
    slug: 'new-york-mortgage-calculator',
    propertyTaxRate: 1.40,
    medianHomePrice: 648000,
    downPayment: 129600,
    loanAmount: 518400,
    piMonthly: 3492,
    taxMonthly: 756,
    insuranceMonthly: 200,
    pitiMonthly: 4448,
    prose: `New York's median home price of $648,000 includes everything from $250,000 homes in western New York to $1.5 million condos in Westchester. If you're buying outside NYC, your monthly payment on a 20% down, 30-year loan runs about $4,448/month all-in — P&I at $3,492, property tax at $756, and insurance at around $200.

What most buyers don't see until closing: New York has a mortgage recording tax. Outside New York City, it's 0.8% of the loan amount. On a $518,400 loan, that's an extra $4,147 at closing — on top of your standard closing costs. Inside NYC, it's 1.8–2.05%. This is money you can't finance; it comes out of pocket at the table.

And if you're buying a co-op, the calculator above won't cover everything. Co-ops have monthly maintenance fees that function like a combination of HOA fees and the building's property tax share. On a $650,000 Manhattan co-op, maintenance alone can run $2,000–3,500/month. Add your mortgage and you're looking at a very different calculation than the numbers suggest.`,
    faqs: [
      { q: 'What is the average mortgage payment in New York?', a: 'On the New York statewide median home price of $648,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $3,492. Add property tax at 1.40% ($756/month) and homeowners insurance (~$200/month) and your total PITI is approximately $4,448/month. NYC buyers face substantially higher numbers.' },
      { q: 'What is the New York mortgage recording tax?', a: 'New York charges a mortgage recording tax at closing. Outside New York City, the rate is 0.8% of the loan amount plus $0.05 per $100. Inside NYC, it ranges from 1.8% to 2.05% depending on loan amount. On a $518,000 loan outside NYC, this is approximately $4,147 — money paid at closing that cannot be rolled into the mortgage.' },
      { q: 'How is buying a co-op different from buying a condo or house in New York?', a: 'Co-op buyers purchase shares in a corporation rather than real property, which means different financing rules (no FHA or VA loans on most co-ops), board approval processes, and monthly maintenance fees that include the building\'s property tax share. Maintenance fees on NYC co-ops often run $1,500–4,000/month on top of your mortgage payment.' },
      { q: 'Does New York have STAR property tax relief?', a: 'Yes. New York\'s STAR (School Tax Relief) program provides a partial exemption from school property taxes for owner-occupied primary residences. Basic STAR exempts the first $30,000 of assessed value from school taxes for homeowners under $500,000 income. Enhanced STAR is available for homeowners 65+ with income under $98,700 (2026 limit).' },
      { q: 'What is the mansion tax in New York?', a: 'New York State charges a 1% transfer tax on residential purchases over $1,000,000. In NYC, there\'s an additional progressive mansion tax ranging from 1.25% to 3.9% for purchases over $2 million. On a $1.5 million purchase in NYC, the combined mansion tax can run $25,000–40,000, which must be paid by the buyer at closing.' },
    ],
  },

  'washington-mortgage-calculator': {
    name: 'Washington',
    slug: 'washington-mortgage-calculator',
    propertyTaxRate: 0.84,
    medianHomePrice: 552000,
    downPayment: 110400,
    loanAmount: 441600,
    piMonthly: 2974,
    taxMonthly: 387,
    insuranceMonthly: 170,
    pitiMonthly: 3531,
    prose: `Washington state offers the same no-state-income-tax advantage as Texas and Florida, but with a property tax rate of 0.84% — considerably lower than Texas. On a $552,000 home with 20% down, your all-in monthly payment runs about $3,531: $2,974 in P&I, $387 in property tax, and roughly $170 in homeowners insurance.

The Seattle metro is where most buyers face sticker shock. Seattle and surrounding King County routinely see median prices above $750,000. Buyers who work in tech and are comparing renting versus owning need to run the full PITI number — and factor in that a $750,000 purchase at 20% down requires $150,000 cash at closing before you pay a single dollar toward closing costs.

Eastern Washington — Spokane, Tri-Cities, Yakima — is a completely different market. Median prices in Spokane run $350,000–380,000, with the same 0.84% tax rate. Your monthly payment drops to roughly $2,200 all-in. If remote work is an option, the geography makes a dramatic difference in what your dollar buys.`,
    faqs: [
      { q: 'What is the average mortgage payment in Washington state?', a: 'On the Washington state median home price of $552,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $2,974. Add property tax at 0.84% ($387/month) and homeowners insurance (~$170/month) and your total PITI is approximately $3,531/month. Seattle-area buyers will see significantly higher numbers.' },
      { q: 'Does Washington state have income tax?', a: 'No. Washington has no personal state income tax, which is a meaningful advantage for high earners compared to states like California (13.3% top rate) or New York (10.9%). However, Washington does charge a Real Estate Excise Tax (REET) at closing — typically 1.28% to 3% of the sale price depending on the price tier.' },
      { q: 'How does the Washington Real Estate Excise Tax work?', a: 'Washington charges a graduated REET paid by the seller (though it can factor into negotiations). As of 2020, the rate is 1.1% on the first $525,000, 1.28% on $525,001–$1.525M, 2.75% on $1.525M–$3.025M, and 3.0% above $3.025M. On a $552,000 sale, the REET is approximately $6,400.' },
      { q: 'What credit score do I need for a Washington state mortgage?', a: 'Conventional loans require 620+ (740+ for best rates). FHA loans accept 580 with 3.5% down. Washington State Housing Finance Commission (WSHFC) offers programs for first-time buyers including income-based down payment assistance. In the competitive Seattle market, strong credit and pre-approval before searching is effectively non-negotiable.' },
      { q: 'Is it cheaper to buy in Eastern Washington versus Seattle?', a: 'Dramatically. Seattle median: $750,000+. Spokane median: $360,000. At 20% down, the monthly PITI difference is roughly $2,100/month ($4,500 Seattle vs $2,400 Spokane). For buyers with remote work flexibility, Eastern Washington offers the same no-income-tax benefit at a fraction of the housing cost.' },
    ],
  },

  'arizona-mortgage-calculator': {
    name: 'Arizona',
    slug: 'arizona-mortgage-calculator',
    propertyTaxRate: 0.62,
    medianHomePrice: 368000,
    downPayment: 73600,
    loanAmount: 294400,
    piMonthly: 1982,
    taxMonthly: 190,
    insuranceMonthly: 130,
    pitiMonthly: 2302,
    prose: `Arizona has one of the lowest property tax rates in the western US at 0.62% — which makes a noticeable difference on your monthly payment compared to Texas or New York buyers in similar price ranges. On a $368,000 home with 20% down, your total PITI runs about $2,302/month: $1,982 P&I, $190 property tax, and roughly $130 in homeowners insurance.

That $190/month property tax figure is what makes Arizona attractive to retirees and people relocating from California. Same sun, less traffic, and a property tax bill that's about 60% lower. The trade-off is Arizona has a state income tax — though flat at 2.5% (2023 reform), it's a fraction of what California charges.

Phoenix metro has seen significant price appreciation, but secondary markets like Tucson and the Prescott area still offer sub-$300,000 options. In Tucson, the same 0.62% rate on a $285,000 home runs $147/month in property tax — and the total PITI drops to roughly $1,800/month. Worth running the numbers in multiple markets if you have flexibility.`,
    faqs: [
      { q: 'What is the average mortgage payment in Arizona?', a: 'On the Arizona median home price of $368,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $1,982. Add property tax at 0.62% ($190/month) and homeowners insurance (~$130/month) and your total PITI is approximately $2,302/month.' },
      { q: 'Why is Arizona property tax so low?', a: 'Arizona uses an assessed value system where residential properties are assessed at 10% of full cash value (compared to 100% in many states). The effective rate of 0.62% reflects this reduced assessed value. Arizona also has the Homeowner Rebate program that reduces primary residence property taxes by 40% on the state portion.' },
      { q: 'Does Arizona have a homestead exemption?', a: 'Arizona does not have a traditional homestead exemption, but it does have the Homeowner Rebate (formerly Senior Valuation Protection for qualifying seniors) and the owner-occupied residential assessment ratio of 10%, which significantly reduces the taxable base. Primary residences are effectively taxed at a lower rate than investment properties.' },
      { q: 'What is the Arizona state income tax rate?', a: 'Arizona implemented a flat 2.5% state income tax rate effective January 1, 2023, replacing the previous graduated structure. This is one of the lowest flat rates in the country and a significant improvement from the prior top rate of 4.5%. Combined with low property taxes, Arizona\'s overall tax burden is moderate for homeowners.' },
      { q: 'Is Phoenix a good place to buy a home right now?', a: 'Phoenix home prices appreciated sharply from 2020–2022, then corrected in 2023, and have since stabilized. The market is demand-driven by in-migration from California and other high-cost states. The key financial question is always rent vs. buy math — use this calculator to find the purchase price where your monthly cost equals or beats local rents, then decide.' },
    ],
  },

  'colorado-mortgage-calculator': {
    name: 'Colorado',
    slug: 'colorado-mortgage-calculator',
    propertyTaxRate: 0.49,
    medianHomePrice: 521000,
    downPayment: 104200,
    loanAmount: 416800,
    piMonthly: 2807,
    taxMonthly: 213,
    insuranceMonthly: 160,
    pitiMonthly: 3180,
    prose: `Colorado has the lowest effective property tax rate of any state in this calculator at 0.49% — which softens the blow on a median home price of $521,000. On a 20% down, 30-year loan, your total PITI runs about $3,180/month: $2,807 P&I, $213 in property tax, and $160 in insurance.

The property tax advantage is real, but it doesn't offset the purchase price entirely. Denver and Boulder median prices run $600,000–800,000, which pushes monthly payments north of $4,000 even with the low tax rate. The mountains — Summit County, Eagle County — are even more expensive for what you get in square footage.

One thing Colorado buyers should know: the state uses a "gallagher" style assessment system where the actual effective rate can shift year to year as the legislature rebalances residential versus commercial property. The 0.49% rate is the current effective rate, but your specific county assessor's rate may differ. Clear Creek, Pitkin (Aspen), and San Miguel counties tend to run slightly higher.`,
    faqs: [
      { q: 'What is the average mortgage payment in Colorado?', a: 'On the Colorado median home price of $521,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $2,807. Add property tax at 0.49% ($213/month) and homeowners insurance (~$160/month) and your total PITI is approximately $3,180/month.' },
      { q: 'Why is Colorado property tax so low?', a: 'Colorado caps the residential assessment rate — the percentage of your home\'s market value subject to taxation — through legislative limits. As of 2025, the residential assessment rate is approximately 6.7% of actual value (versus 100% in many states). Combined with local mill levies, the effective rate averages 0.49% statewide.' },
      { q: 'Does Colorado have a first-time homebuyer program?', a: 'Yes. The Colorado Housing and Finance Authority (CHFA) offers below-market interest rates, down payment assistance grants, and second mortgage programs for first-time buyers and qualified repeat buyers. Income limits apply and vary by county. In high-cost areas like Denver and Boulder, the income limits are higher to reflect local costs.' },
      { q: 'How much do I need to earn to buy in Denver?', a: 'Denver\'s median home price is approximately $600,000. At 20% down ($120,000) and current 30-year rates, P&I is about $3,230/month. Add property tax at 0.49% ($245/month) and insurance ($170/month) and PITI is $3,645/month. Using the 28% front-end rule, that requires gross monthly income of $13,018 — or roughly $156,000/year.' },
      { q: 'Is Colorado a good state for remote workers to buy a home?', a: 'Colorado is one of the most popular remote worker destinations — particularly Fort Collins, Colorado Springs, and secondary mountain towns. The combination of low property tax, no estate tax, and flat 4.4% state income tax (reduced from prior higher rates) makes it competitive. Fort Collins median is around $450,000, which puts PITI under $2,900/month with 20% down.' },
    ],
  },

  'georgia-mortgage-calculator': {
    name: 'Georgia',
    slug: 'georgia-mortgage-calculator',
    propertyTaxRate: 0.91,
    medianHomePrice: 312000,
    downPayment: 62400,
    loanAmount: 249600,
    piMonthly: 1681,
    taxMonthly: 237,
    insuranceMonthly: 120,
    pitiMonthly: 2038,
    prose: `Georgia's median home price of $312,000 makes it one of the more affordable states in the Southeast for buyers who don't need to be in Atlanta proper. Total monthly cost on a 20% down, 30-year loan: about $2,038 — $1,681 P&I, $237 property tax at 0.91%, and $120 in homeowners insurance.

Atlanta is the outlier. Intown Atlanta neighborhoods like Buckhead, Midtown, and Virginia-Highland run $500,000–900,000 for a single-family home. But Gwinnett County, Cherokee County, and the northwest suburbs offer sub-$350,000 options within commuting distance of major job centers. That difference — $350k versus $600k — is $1,400/month in your payment.

Georgia has a unique property tax structure: each county sets its own millage rate, and there's a statewide homestead exemption of $2,000 off assessed value for most primary residences. Some counties, like Fulton (Atlanta), also have county-specific exemptions that add another $30,000 reduction. Worth looking up your specific county before you finalize your budget.`,
    faqs: [
      { q: 'What is the average mortgage payment in Georgia?', a: 'On the Georgia median home price of $312,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $1,681. Add property tax at 0.91% ($237/month) and homeowners insurance (~$120/month) and your total PITI is approximately $2,038/month.' },
      { q: 'How does Georgia property tax work?', a: 'Georgia counties assess property at 40% of fair market value, then apply millage rates set by the county, city, and school district. The effective rate averages 0.91% statewide but varies by county. Fulton County (Atlanta) runs around 1.0–1.2%, while rural counties may be lower. The statewide homestead exemption reduces assessed value by $2,000 for primary residences.' },
      { q: 'Does Georgia have a first-time homebuyer program?', a: 'Yes. Georgia Dream Homeownership Program through the Georgia Department of Community Affairs offers below-market 30-year fixed rates and down payment assistance of $10,000–$12,500 for qualifying buyers. Income limits apply (generally $72,000–$97,000 depending on household size and county). There are also special programs for educators, healthcare workers, and law enforcement.' },
      { q: 'Is Atlanta a good market for first-time buyers?', a: 'Intown Atlanta is challenging — prices have risen sharply since 2020 and the rental market remains competitive. The suburbs are more accessible. Cherokee County and Henry County offer sub-$350,000 homes for buyers with a longer commute tolerance. The question is always whether the payment on a suburban purchase beats the rent on a closer apartment.' },
      { q: 'What credit score do I need to buy a home in Georgia?', a: 'Conventional loans require 620+ (740+ for best pricing). FHA loans accept 580 with 3.5% down. Georgia Dream program loans require a minimum 640 credit score. In Atlanta\'s competitive market, buyers with stronger credit and pre-approval letters move faster — many sellers in the $300–450k range see multiple offers.' },
    ],
  },

  'north-carolina-mortgage-calculator': {
    name: 'North Carolina',
    slug: 'north-carolina-mortgage-calculator',
    propertyTaxRate: 0.78,
    medianHomePrice: 292000,
    downPayment: 58400,
    loanAmount: 233600,
    piMonthly: 1573,
    taxMonthly: 190,
    insuranceMonthly: 110,
    pitiMonthly: 1873,
    prose: `North Carolina is one of the most affordable coastal-adjacent states for buyers in 2026 — median home price around $292,000, property tax at 0.78%, and total PITI under $1,900/month on a 20% down, 30-year loan. That's what's driving in-migration from the Northeast and California.

The Research Triangle (Raleigh-Durham-Chapel Hill) is the exception. Prices there have climbed to $425,000–550,000 as tech and pharma companies expanded in the area. Charlotte, North Carolina's largest city and a major banking hub, runs $380,000–430,000 for a single-family home in decent school districts. Smaller markets — Greensboro, Fayetteville, Winston-Salem — still offer sub-$250,000 homes with the same 0.78% property tax rate.

North Carolina assesses property at 100% of appraised value and counties reappraise on different schedules (every 4–8 years). If a county hasn't reappraised recently, your tax bill may be based on an older, lower value — but the next reappraisal can bring a sharp adjustment. Ask about the county's reappraisal schedule before you close.`,
    faqs: [
      { q: 'What is the average mortgage payment in North Carolina?', a: 'On the North Carolina median home price of $292,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $1,573. Add property tax at 0.78% ($190/month) and homeowners insurance (~$110/month) and your total PITI is approximately $1,873/month.' },
      { q: 'How does North Carolina property tax work?', a: 'North Carolina assesses property at 100% of appraised value (true market value) and counties reappraise on their own schedule — typically every 4–8 years. The millage rate is set annually by each county and municipality. Wake County (Raleigh) runs around 0.72%, Mecklenburg (Charlotte) around 0.84%, while rural counties vary widely.' },
      { q: 'Is the Research Triangle a good place to buy?', a: 'The Triangle (Raleigh-Durham-Chapel Hill) has strong fundamentals: top universities, major employers (SAS, Lenovo US HQ, pharmaceutical companies), and net in-migration. Median prices have risen to $425,000–480,000 from $300,000 in 2020. The question for buyers is whether appreciation potential justifies current prices versus renting — there\'s no clear answer, and it depends on your timeline.' },
      { q: 'Does North Carolina have a first-time homebuyer program?', a: 'Yes. NC Home Advantage Mortgage through the North Carolina Housing Finance Agency offers competitive interest rates and down payment assistance of 3–5% of the loan amount (forgivable after 15 years) for first-time buyers and military veterans. Income limits vary by county — roughly $104,000–127,000 depending on household size and location.' },
      { q: 'How does Charlotte\'s housing market compare to Raleigh?', a: 'Both are competitive markets driven by job growth, but Charlotte\'s banking industry (Bank of America, Wells Fargo East Coast hub) and Raleigh\'s tech/pharma mix create similar demand profiles. Charlotte median: $395,000. Raleigh median: $440,000. Charlotte has slightly more suburban options at $300,000 price points; Raleigh\'s surrounding counties (Johnston, Harnett) offer similar affordability.' },
    ],
  },

  'virginia-mortgage-calculator': {
    name: 'Virginia',
    slug: 'virginia-mortgage-calculator',
    propertyTaxRate: 0.82,
    medianHomePrice: 395000,
    downPayment: 79000,
    loanAmount: 316000,
    piMonthly: 2128,
    taxMonthly: 271,
    insuranceMonthly: 140,
    pitiMonthly: 2539,
    prose: `Virginia's statewide median of $395,000 masks a dramatic geographic split. Northern Virginia — Fairfax, Arlington, Alexandria — runs $700,000–900,000 for a single-family home, driven by proximity to DC and the federal contractor economy. The rest of Virginia, including Richmond, Virginia Beach, and the Shenandoah Valley, is significantly more affordable.

On the statewide median, a 20% down, 30-year purchase runs $2,539/month all-in: $2,128 P&I, $271 property tax at 0.82%, and $140 in homeowners insurance. But in Fairfax County, where the median is over $700,000, the same 20% down scenario puts PITI at $4,400+/month.

Virginia uses a split property tax system — the rate varies by jurisdiction. Fairfax County: 1.12%. Alexandria City: 1.11%. But Rockingham County in the Shenandoah Valley: 0.47%. Same state, dramatically different tax burden. If you're comparing properties across Virginia jurisdictions, run the calculator with each location's actual rate.`,
    faqs: [
      { q: 'What is the average mortgage payment in Virginia?', a: 'On the Virginia statewide median home price of $395,000 with 20% down and a 30-year loan at current rates, the monthly P&I is roughly $2,128. Add property tax at 0.82% ($271/month) and homeowners insurance (~$140/month) and your total PITI is approximately $2,539/month. Northern Virginia buyers face significantly higher numbers.' },
      { q: 'How does Northern Virginia differ from the rest of Virginia for housing costs?', a: 'Dramatically. Northern Virginia (Fairfax, Arlington, Loudoun, Prince William counties) runs $650,000–900,000 median for single-family homes — driven by federal government, defense contractor, and tech sector jobs. The same 20% down scenario on an $800,000 NOVA home produces PITI of roughly $5,300/month versus $2,539 on the statewide median.' },
      { q: 'What are property tax rates in Northern Virginia?', a: 'Northern Virginia property tax rates vary by jurisdiction: Fairfax County 1.12%, Arlington County 1.013%, Alexandria City 1.11%, Loudoun County 1.045%, Prince William County 1.115%. These are among the highest rates in Virginia, reflecting the high assessed values and strong local school funding requirements.' },
      { q: 'Does Virginia have a first-time homebuyer program?', a: 'Yes. Virginia Housing (formerly VHDA) offers first-time buyer mortgage programs with below-market rates, down payment and closing cost grants, and plus second mortgage programs. Income limits vary by area — Northern Virginia limits are higher (around $145,000–180,000 depending on household size) to reflect local costs. Free homebuyer education is required.' },
      { q: 'Is it worth commuting from further out in Virginia to avoid Northern Virginia prices?', a: 'The math works for some buyers. Prince William County runs $500,000–550,000 median — $200,000 less than Fairfax — but adds 45–75 minutes to a DC commute by car or VRE. At current rates, $200,000 less in loan amount saves roughly $1,100/month in P&I. Whether that trade is worth it depends entirely on how many days you commute and how you value your time.' },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(states).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = states[slug];
  if (!state) return {};
  return {
    title: `${state.name} Mortgage Calculator — Free, No Registration | Truly Free`,
    description: `Free ${state.name} mortgage calculator. See your full monthly payment including ${state.propertyTaxRate}% property tax, PMI, insurance, and HOA. No email. No signup.`,
    alternates: { canonical: `https://trulyfreemortgage.com/${state.slug}` },
  };
}

export default async function StateCalculatorPage({ params }: Props) {
  const { slug } = await params;
  const state = states[slug];
  if (!state) notFound();

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: state.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  });

  const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#16a34a" />
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

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

      <div style={{ background: '#f7fafc', padding: '56px 24px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0058c3', marginBottom: '16px' }}>Free · No Registration</div>
          <h1 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.03em', color: '#181c1e', lineHeight: 1.15, marginBottom: '16px' }}>
            {state.name} Mortgage Calculator
          </h1>
          <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: 1.7, marginBottom: '28px' }}>
            See your full monthly payment — principal, interest, {state.name} property tax ({state.propertyTaxRate}%), insurance, and PMI. All calculated in your browser. No email required.
          </p>
          <div style={{ background: '#ffffff', borderRadius: '8px', padding: '24px', boxShadow: '0px 4px 12px rgba(24,28,30,0.06)', marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: '16px' }}>
              {state.name} Median Home · 20% Down · 30-Year Fixed
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
              {[
                ['Home Price', `$${state.medianHomePrice.toLocaleString()}`],
                ['Down Payment', `$${state.downPayment.toLocaleString()}`],
                ['P&I / mo', `$${state.piMonthly.toLocaleString()}`],
                ['Property Tax', `$${state.taxMonthly}/mo`],
                ['Insurance', `$${state.insuranceMonthly}/mo`],
                ['Total PITI', `$${state.pitiMonthly.toLocaleString()}/mo`],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontSize: '11px', color: '#718096', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: label === 'Total PITI' ? '#0058c3' : '#181c1e', letterSpacing: '-0.02em' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
            {['No Email Required', 'No Daily Limit', 'Data Stays in Browser'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', borderRadius: '4px', padding: '7px 12px', boxShadow: '0px 1px 4px rgba(24,28,30,0.06)' }}>
                {checkIcon}
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>{label}</span>
              </div>
            ))}
          </div>
          <a href="/mortgage-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', padding: '13px 30px', borderRadius: '6px', textDecoration: 'none' }}>
            Open Free Calculator
          </a>
        </div>
      </div>

      <div style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '24px', lineHeight: 1.2 }}>
            {state.name} Mortgage Costs — What You Actually Pay
          </h2>
          {state.prose.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '16px', color: '#4a5568', lineHeight: 1.75, marginBottom: '18px' }}>{para}</p>
          ))}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href="/mortgage-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', padding: '13px 30px', borderRadius: '6px', textDecoration: 'none' }}>
              Run Your Numbers
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: '#f7fafc', padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '8px', lineHeight: 1.2 }}>
            {state.name} Mortgage Questions
          </h2>
          <p style={{ fontSize: '15px', color: '#718096', marginBottom: '32px', letterSpacing: '-0.01em' }}>State-specific answers. No fluff.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {state.faqs.map(({ q, a }) => (
              <div key={q} style={{ background: '#ffffff', borderRadius: '8px', padding: '22px 24px', boxShadow: '0px 2px 8px rgba(24,28,30,0.04)' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#181c1e', letterSpacing: '-0.01em', marginBottom: '10px' }}>{q}</div>
                <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#ffffff', padding: '48px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#718096', marginBottom: '20px', letterSpacing: '-0.01em' }}>
            Ready to run your own {state.name} mortgage calculation?
          </p>
          <a href="/mortgage-calculator" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0058c3,#0070f3)', color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', padding: '13px 30px', borderRadius: '6px', textDecoration: 'none' }}>
            Open Free {state.name} Mortgage Calculator
          </a>
        </div>
      </div>
    </>
  );
}
