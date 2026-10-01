'use client'

import { useState } from 'react'
import { calculateEMI, formatPrice } from '@/lib/utils/format'
import { Calculator, AlertCircle, Sparkles } from 'lucide-react'

interface EMICalculatorProps {
  propertyPrice?: number
  className?: string
}

export default function EMICalculator({ propertyPrice = 7500000, className = '' }: EMICalculatorProps) {
  const [price, setPrice] = useState<number>(propertyPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [annualRate, setAnnualRate] = useState<number>(8.5)
  const [tenureYears, setTenureYears] = useState<number>(20)

  const downPaymentAmount = Math.round((price * downPaymentPercent) / 100)
  const loanAmount = Math.max(0, price - downPaymentAmount)
  const tenureMonths = tenureYears * 12

  const { emi, totalPayable, totalInterest } = calculateEMI(loanAmount, annualRate, tenureMonths)

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center">
          <Calculator size={20} />
        </div>
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-charcoal">
            Home Loan EMI Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Estimate your monthly repayment schedule and interest outlay
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls Column */}
        <div className="space-y-5">
          {/* Property Price */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-charcoal mb-2">
              <span>Property Price</span>
              <span className="text-emerald font-bold">{formatPrice(price)}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={100000000}
              step={100000}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full accent-emerald cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-charcoal mb-2">
              <span>Down Payment ({downPaymentPercent}%)</span>
              <span className="text-emerald font-bold">{formatPrice(downPaymentAmount)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={e => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-emerald cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>10% (Min)</span>
              <span>Loan: {formatPrice(loanAmount)}</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-charcoal mb-2">
              <span>Annual Interest Rate</span>
              <span className="text-emerald font-bold">{annualRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={6.5}
              max={15.0}
              step={0.1}
              value={annualRate}
              onChange={e => setAnnualRate(Number(e.target.value))}
              className="w-full accent-emerald cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>6.5%</span>
              <span>Typical: 8.5% - 9.0%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-charcoal mb-2">
              <span>Loan Tenure</span>
              <span className="text-emerald font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={5}
              value={tenureYears}
              onChange={e => setTenureYears(Number(e.target.value))}
              className="w-full accent-emerald cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>5 Years</span>
              <span>20 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="bg-gradient-to-br from-emerald/5 via-white to-gold/5 rounded-2xl border border-emerald/15 p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald">
              Estimated Monthly Outlay
            </span>
            <div className="mt-2 mb-1 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-charcoal font-display">
                {formatPrice(emi)}
              </span>
              <span className="text-xs text-gray-500 font-medium">/ month</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">
              Calculated on a loan amount of {formatPrice(loanAmount)} for {tenureYears} years.
            </p>

            {/* Breakdown List */}
            <div className="space-y-3 pt-4 border-t border-gray-100 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald inline-block" />
                  Principal Loan Amount
                </span>
                <span className="font-semibold text-charcoal">{formatPrice(loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
                  Total Interest Payable
                </span>
                <span className="font-semibold text-charcoal">{formatPrice(totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 font-semibold text-sm">
                <span className="text-charcoal">Total Repayment</span>
                <span className="text-charcoal font-display">{formatPrice(totalPayable)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-start gap-2 text-[11px] text-gray-400">
            <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-gray-400" />
            <span>
              Disclaimer: This is an indicative calculation for informational planning. Actual interest rates, processing fees, and loan eligibility depend upon bank appraisal and credit score.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
