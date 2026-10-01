'use client'

import { useState } from 'react'
import EMICalculator from '@/components/property/EMICalculator'
import { Calculator, Scale, ArrowRightLeft, Banknote, ShieldAlert, Sparkles } from 'lucide-react'
import { formatPrice } from '@/lib/utils/format'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'emi' | 'affordability' | 'converter' | 'pricePerArea'>('emi')

  // Affordability state
  const [monthlyIncome, setMonthlyIncome] = useState(150000)
  const [existingEmi, setExistingEmi] = useState(20000)
  const [downPaymentSavings, setDownPaymentSavings] = useState(1500000)
  const [loanTenureYears, setLoanTenureYears] = useState(20)

  // Max affordable EMI (assume 50% FOIR minus existing EMIs)
  const maxAllowableEmi = Math.max(0, monthlyIncome * 0.5 - existingEmi)
  // Approximate loan amount for this EMI at 8.5% for N years
  const r = 8.5 / (12 * 100)
  const n = loanTenureYears * 12
  const maxLoanAmount = maxAllowableEmi > 0 ? (maxAllowableEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0
  const maxAffordableBudget = Math.round(maxLoanAmount + downPaymentSavings)

  // Area converter state
  const [convertValue, setConvertValue] = useState(100)
  const [fromUnit, setFromUnit] = useState<'gaj' | 'sqft' | 'sqm' | 'acre' | 'bigha'>('gaj')

  // Gaj = 9 sq ft, 1 sq m = 10.7639 sq ft, 1 Acre = 4840 Gaj, 1 Bigha (UP) = 800 to 1000 Gaj (~968 Gaj)
  const toSqFtMap = {
    gaj: 9,
    sqft: 1,
    sqm: 10.7639,
    acre: 4840 * 9,
    bigha: 968 * 9,
  }

  const baseSqFt = convertValue * toSqFtMap[fromUnit]
  const resultGaj = baseSqFt / 9
  const resultSqFt = baseSqFt
  const resultSqM = baseSqFt / 10.7639
  const resultAcre = baseSqFt / (4840 * 9)
  const resultBigha = baseSqFt / (968 * 9)

  // Rate calculator state
  const [calcTotalPrice, setCalcTotalPrice] = useState(3500000)
  const [calcArea, setCalcArea] = useState(250)
  const [calcUnit, setCalcUnit] = useState<'gaj' | 'sqft'>('gaj')
  const ratePerUnit = calcArea > 0 ? Math.round(calcTotalPrice / calcArea) : 0

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald bg-emerald/10 px-3 py-1 rounded-full mb-2">
            <Calculator size={13} />
            <span>Financial Planning &amp; Land Mathematics</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-charcoal">
            Indian Real Estate Calculators &amp; Area Tools
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Calculate home loan EMIs, evaluate affordability budgets, convert Gaj to square feet, and derive rates per unit.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-none gap-2">
          {[
            { id: 'emi', label: 'Home Loan EMI Calculator' },
            { id: 'affordability', label: 'Affordability Estimator' },
            { id: 'converter', label: 'Area Unit Converter (Gaj / Acre / Sqft)' },
            { id: 'pricePerArea', label: 'Rate Per Gaj / Sqft Calculator' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs sm:text-sm font-semibold rounded-t-xl transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-emerald text-emerald bg-emerald/5'
                  : 'border-transparent text-gray-500 hover:text-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <div className="max-w-4xl">
            <EMICalculator propertyPrice={7500000} />
          </div>
        )}

        {/* TAB 2: AFFORDABILITY CALCULATOR */}
        {activeTab === 'affordability' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-4xl shadow-sm">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
              Property Affordability Estimator
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Estimate the maximum property budget you can comfortably afford based on your net income and savings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Monthly Net In-hand Income (INR)
                  </label>
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={e => setMonthlyIncome(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold"
                  />
                  <span className="text-[11px] text-gray-400 mt-1 block">Formatted: {formatPrice(monthlyIncome)}</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Existing Monthly Loan EMIs (if any)
                  </label>
                  <input
                    type="number"
                    value={existingEmi}
                    onChange={e => setExistingEmi(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold"
                  />
                  <span className="text-[11px] text-gray-400 mt-1 block">Formatted: {formatPrice(existingEmi)}</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Total Available Down Payment Savings
                  </label>
                  <input
                    type="number"
                    value={downPaymentSavings}
                    onChange={e => setDownPaymentSavings(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold"
                  />
                  <span className="text-[11px] text-gray-400 mt-1 block">Formatted: {formatPrice(downPaymentSavings)}</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Planned Loan Tenure (Years)
                  </label>
                  <select
                    value={loanTenureYears}
                    onChange={e => setLoanTenureYears(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold bg-white"
                  >
                    {[10, 15, 20, 25, 30].map(y => (
                      <option key={y} value={y}>{y} Years</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Output Result */}
              <div className="bg-gradient-to-br from-emerald/10 via-white to-gold/10 p-6 rounded-2xl border border-emerald/20 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald">
                    Maximum Estimated Property Budget
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-charcoal my-3">
                    {formatPrice(maxAffordableBudget)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Based on a 50% Fixed Obligation to Income Ratio (FOIR) standard across Indian nationalized and private banks.
                  </p>

                  <div className="space-y-2 text-xs pt-4 border-t border-gray-100">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Max Recommended EMI:</span>
                      <strong className="text-charcoal">{formatPrice(maxAllowableEmi)} / mo</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Max Eligible Bank Loan:</span>
                      <strong className="text-charcoal">{formatPrice(Math.round(maxLoanAmount))}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Down Payment Self Contribution:</span>
                      <strong className="text-charcoal">{formatPrice(downPaymentSavings)}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                  <ShieldAlert size={14} className="flex-shrink-0" />
                  <span>Informational estimation only. Bank sanctions require salary verification.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AREA UNIT CONVERTER */}
        {activeTab === 'converter' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-4xl shadow-sm">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
              Indian Land Area Unit Converter
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Convert native North Indian land measurements seamlessly between Gaj, Square Feet, Square Meters, Acres, and Bigha.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Enter Measurement Value
                </label>
                <input
                  type="number"
                  min={0.1}
                  step={0.1}
                  value={convertValue}
                  onChange={e => setConvertValue(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border text-base font-bold text-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  From Measurement Unit
                </label>
                <select
                  value={fromUnit}
                  onChange={e => setFromUnit(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border text-sm font-semibold bg-white text-charcoal"
                >
                  <option value="gaj">Gaj (Square Yards)</option>
                  <option value="sqft">Square Feet (sq ft)</option>
                  <option value="sqm">Square Meters (sq m)</option>
                  <option value="acre">Acres</option>
                  <option value="bigha">Bigha (Standard UP)</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-emerald/5 border border-emerald/15 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-emerald block mb-1">In Gaj</span>
                <span className="text-xl font-bold text-charcoal font-display">{resultGaj.toFixed(2)} Gaj</span>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">In Sq Feet</span>
                <span className="text-xl font-bold text-charcoal font-display">{resultSqFt.toFixed(1)} sq ft</span>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">In Sq Meters</span>
                <span className="text-xl font-bold text-charcoal font-display">{resultSqM.toFixed(2)} sq m</span>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">In Acres</span>
                <span className="text-xl font-bold text-charcoal font-display">{resultAcre.toFixed(4)} Acres</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RATE PER UNIT CALCULATOR */}
        {activeTab === 'pricePerArea' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-4xl shadow-sm">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
              Price Per Area Rate Calculator
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Determine the true unit rate per Gaj or per Square Foot from total price and listed area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Total Property Price (INR)</label>
                <input
                  type="number"
                  value={calcTotalPrice}
                  onChange={e => setCalcTotalPrice(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Total Area</label>
                <input
                  type="number"
                  value={calcArea}
                  onChange={e => setCalcArea(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Unit</label>
                <select
                  value={calcUnit}
                  onChange={e => setCalcUnit(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold bg-white"
                >
                  <option value="gaj">Gaj (Square Yards)</option>
                  <option value="sqft">Square Feet</option>
                </select>
              </div>
            </div>

            <div className="p-6 bg-emerald/10 border border-emerald/20 rounded-2xl text-center">
              <span className="text-xs uppercase font-bold text-emerald block mb-1">
                Calculated Rate per {calcUnit === 'gaj' ? 'Gaj' : 'Sq Ft'}
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-charcoal font-display">
                ₹{ratePerUnit.toLocaleString('en-IN')} / {calcUnit === 'gaj' ? 'Gaj' : 'sq ft'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
