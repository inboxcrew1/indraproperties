import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AreaUnit, PropertyPrice } from '@/types/property';

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Price Formatting ─────────────────────────────────────────────────────────

/**
 * Formats a numeric rupee amount into a human-readable Indian currency string.
 * When compact=true (default): shows Crore / Lakh / K suffixes.
 * When compact=false: returns full formatted number with ₹ prefix.
 *
 * @example
 * formatPrice(18500000)         // "₹1.85 Crore"
 * formatPrice(750000)           // "₹7.5 Lakh"
 * formatPrice(18500000, false)  // "₹1,85,00,000"
 */
export function formatPrice(amount: number, compact = true): string {
  if (compact) {
    if (amount >= 10_000_000) {
      const crore = amount / 10_000_000;
      return `₹${crore % 1 === 0 ? crore : crore.toFixed(2)} Crore`;
    }
    if (amount >= 100_000) {
      const lakh = amount / 100_000;
      return `₹${lakh % 1 === 0 ? lakh : lakh.toFixed(2)} Lakh`;
    }
    if (amount >= 1_000) {
      const k = amount / 1_000;
      return `₹${k % 1 === 0 ? k : k.toFixed(1)}K`;
    }
  }
  return `₹${new Intl.NumberFormat('en-IN').format(amount)}`;
}

// ── Area Formatting ──────────────────────────────────────────────────────────

/**
 * Formats an area value with its unit label.
 *
 * @example
 * formatArea(250, 'gaj')  // "250 Gaj"
 * formatArea(1150, 'sqft') // "1,150 sq ft"
 * formatArea(2, 'acre')   // "2 Acres"
 */
export function formatArea(value: number, unit: AreaUnit): string {
  const formatted = new Intl.NumberFormat('en-IN').format(value);
  const unitLabels: Record<AreaUnit, string> = {
    gaj:   'Gaj',
    sqft:  'sq ft',
    sqm:   'sq m',
    acre:  value === 1 ? 'Acre' : 'Acres',
    sqyd:  'sq yd',
    bigha: value === 1 ? 'Bigha' : 'Bighas',
  };
  return `${formatted} ${unitLabels[unit]}`;
}

// ── Price Per Unit ───────────────────────────────────────────────────────────

/**
 * Calculates and formats the price per area unit.
 *
 * @example
 * formatPricePerUnit(6500000, 1150, 'sqft')  // "₹5,652 / sq ft"
 */
export function formatPricePerUnit(price: number, area: number, unit: AreaUnit): string {
  const perUnit = price / area;
  const unitLabels: Record<AreaUnit, string> = {
    gaj:   'Gaj',
    sqft:  'sq ft',
    sqm:   'sq m',
    acre:  'Acre',
    sqyd:  'sq yd',
    bigha: 'Bigha',
  };
  return `${formatPrice(perUnit, false)} / ${unitLabels[unit]}`;
}

// ── Date Formatting ──────────────────────────────────────────────────────────

/**
 * Returns a human-friendly relative or absolute date string.
 *
 * @example
 * formatDate('2026-09-30T10:00:00Z')  // "Yesterday"
 * formatDate('2026-09-01T10:00:00Z')  // "1 month ago"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now  = new Date();
  const diffMs   = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1_000 * 60 * 60 * 24));

  if (diffDays === 0)  return 'Today';
  if (diffDays === 1)  return 'Yesterday';
  if (diffDays < 7)    return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  return date.toLocaleDateString('en-IN', {
    day:   'numeric',
    month: 'short',
    year:  'numeric',
  });
}

// ── EMI Calculator ───────────────────────────────────────────────────────────

/**
 * Calculates EMI, total payable, and total interest for a home loan.
 *
 * @param principal     - Loan principal amount in ₹
 * @param annualRate    - Annual interest rate in % (e.g. 8.5 for 8.5%)
 * @param tenureMonths  - Loan tenure in months (e.g. 240 for 20 years)
 *
 * @example
 * calculateEMI(5000000, 8.5, 240)
 * // { emi: 43391, totalPayable: 10413840, totalInterest: 5413840 }
 */
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number,
): {
  emi: number;
  totalPayable: number;
  totalInterest: number;
} {
  const monthlyRate = annualRate / (12 * 100);

  if (monthlyRate === 0) {
    const emi = principal / tenureMonths;
    return { emi, totalPayable: principal, totalInterest: 0 };
  }

  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const emi    = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayable  = emi * tenureMonths;
  const totalInterest = totalPayable - principal;

  return {
    emi:           Math.round(emi),
    totalPayable:  Math.round(totalPayable),
    totalInterest: Math.round(totalInterest),
  };
}

// ── Text Utilities ───────────────────────────────────────────────────────────

/**
 * Truncates text to a maximum length, appending ellipsis if needed.
 *
 * @example
 * truncate('A very long description text here', 20)  // "A very long descript..."
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @example
 * slugify('Premium 3 BHK in Noida')  // "premium-3-bhk-in-noida"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ── Subcategory Labels ───────────────────────────────────────────────────────

/**
 * Returns a display-friendly label for a property subcategory key.
 *
 * @example
 * formatSubcategory('builder_floor')  // "Builder Floor"
 */
export function formatSubcategory(sub: string): string {
  const labels: Record<string, string> = {
    flat:                'Flat / Apartment',
    house:               'Independent House',
    villa:               'Villa',
    plot:                'Residential Plot',
    land:                'Land',
    farmland:            'Farm Land',
    farmhouse:           'Farm House',
    shop:                'Shop',
    office:              'Office Space',
    showroom:            'Showroom',
    warehouse:           'Warehouse',
    commercial_building: 'Commercial Building',
    builder_floor:       'Builder Floor',
    penthouse:           'Penthouse',
    studio:              'Studio Apartment',
    agricultural:        'Agricultural Land',
    industrial:          'Industrial Land',
    commercial_plot:     'Commercial Plot',
  };
  return (
    labels[sub] ??
    sub.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

// ── Number Utilities ─────────────────────────────────────────────────────────

/**
 * Formats a number using the Indian numbering system (en-IN locale).
 *
 * @example
 * formatIndianNumber(1234567)  // "12,34,567"
 */
export function formatIndianNumber(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value);
}

/**
 * Clamps a number between min and max values.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
