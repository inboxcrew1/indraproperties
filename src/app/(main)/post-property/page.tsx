'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Home,
  Building2,
  Layers,
  MapPin,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Eye,
  Trash2,
  Sparkles,
  ShieldCheck,
  Banknote,
  Compass,
} from 'lucide-react'
import { Property, AreaUnit, PropertyCategory } from '@/types/property'
import { formatPrice } from '@/lib/utils/format'

const citiesList = [
  'Bulandshahr',
  'Noida',
  'Greater Noida',
  'Delhi',
  'Gurugram',
  'Ghaziabad',
  'Meerut',
]

const propertyTypeOptions = [
  { label: 'Residential Plot', value: 'plot', category: 'land' },
  { label: 'Flat / Apartment', value: 'flat', category: 'residential' },
  { label: 'Independent House', value: 'house', category: 'residential' },
  { label: 'Luxury Villa', value: 'villa', category: 'residential' },
  { label: 'Farm Land', value: 'farmland', category: 'land' },
  { label: 'Agricultural Land', value: 'agricultural', category: 'land' },
  { label: 'Farm House', value: 'farmhouse', category: 'residential' },
  { label: 'Commercial Shop', value: 'shop', category: 'commercial' },
  { label: 'Office Space', value: 'office', category: 'commercial' },
  { label: 'Commercial Showroom', value: 'showroom', category: 'commercial' },
  { label: 'Industrial Warehouse', value: 'warehouse', category: 'commercial' },
  { label: 'Commercial Building', value: 'commercial_building', category: 'commercial' },
]

export default function PostPropertyPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [submittedProperty, setSubmittedProperty] = useState<Property | null>(null)

  // Step 1: Mode
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale')
  const [advertiserType, setAdvertiserType] = useState('owner')

  // Step 2: Category & Subcategory
  const [subcategory, setSubcategory] = useState('plot')
  const [category, setCategory] = useState<PropertyCategory>('land')

  // Step 3: Location
  const [state, setState] = useState('Uttar Pradesh')
  const [city, setCity] = useState('Bulandshahr')
  const [locality, setLocality] = useState('')
  const [address, setAddress] = useState('')
  const [displayType, setDisplayType] = useState<'exact' | 'approximate'>('exact')

  // Step 4: Details
  const [areaValue, setAreaValue] = useState<number>(200)
  const [areaUnit, setAreaUnit] = useState<AreaUnit>('gaj')
  const [roadWidth, setRoadWidth] = useState<number>(30)
  const [frontage, setFrontage] = useState<number>(30)
  const [depth, setDepth] = useState<number>(60)
  const [isCornerPlot, setIsCornerPlot] = useState(false)
  const [hasBoundaryWall, setHasBoundaryWall] = useState(true)
  const [facing, setFacing] = useState('east')
  const [bedrooms, setBedrooms] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [furnishing, setFurnishing] = useState('unfurnished')
  const [parking, setParking] = useState(1)
  const [floor, setFloor] = useState(1)
  const [totalFloors, setTotalFloors] = useState(4)

  // Step 5: Photos
  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600596021326-98a46b14f3cc?w=1200&q=80',
  ])
  const [newImageUrl, setNewImageUrl] = useState('')

  // Step 6: Pricing, Description & Contact
  const [priceAmount, setPriceAmount] = useState<number>(2500000)
  const [isNegotiable, setIsNegotiable] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerPhone, setOwnerPhone] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')

  const handleSubcategoryChange = (sub: string) => {
    setSubcategory(sub)
    const opt = propertyTypeOptions.find(o => o.value === sub)
    if (opt) setCategory(opt.category as PropertyCategory)
  }

  const addImage = () => {
    if (newImageUrl.trim()) {
      setImages([...images, newImageUrl.trim()])
      setNewImageUrl('')
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const propertyId = `prop-user-${Date.now()}`
    const finalTitle = title.trim() || `${subcategory.replace(/_/g, ' ').toUpperCase()} in ${locality || city}`
    const finalSlug = `${finalTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`

    const newProperty: Property = {
      id: propertyId,
      slug: finalSlug,
      title: finalTitle,
      listingType,
      category,
      subcategory,
      status: 'available',
      verificationStatus: 'under_review',
      isFeatured: false,
      isPremium: false,
      isNew: true,
      price: {
        amount: priceAmount,
        currency: 'INR',
        isNegotiable,
        monthlyRent: listingType === 'rent' ? priceAmount : undefined,
      },
      area: {
        value: areaValue,
        unit: areaUnit,
        roadWidth,
        frontage,
        depth,
      },
      location: {
        address,
        locality: locality || city,
        city,
        state,
        country: 'India',
        latitude: 28.4074,
        longitude: 77.8485,
        displayType,
      },
      facing,
      bedrooms: category === 'residential' ? bedrooms : undefined,
      bathrooms: category === 'residential' ? bathrooms : undefined,
      furnishing: category === 'residential' ? furnishing : undefined,
      parking,
      floor: category === 'residential' ? floor : undefined,
      totalFloors: category === 'residential' ? totalFloors : undefined,
      isCornerPlot: category === 'land' ? isCornerPlot : undefined,
      hasBoundaryWall: category === 'land' ? hasBoundaryWall : undefined,
      description: description || 'Prime property submitted to Indra Properties & Enterprises. Physical inspection and title verification available upon request.',
      amenities: [
        { id: 'am-1', name: 'Road Connectivity', category: 'convenience' },
        { id: 'am-2', name: 'Electricity Available', category: 'convenience' },
        { id: 'am-3', name: 'Clear Registry Title', category: 'security' },
      ],
      media: images.map((url, idx) => ({
        id: `img-${idx}`,
        url,
        type: 'image',
        isCover: idx === 0,
        order: idx,
      })),
      advertiser: {
        id: `adv-${Date.now()}`,
        name: ownerName || 'Property Advertiser',
        type: advertiserType,
        phone: ownerPhone || '8460209025',
        email: ownerEmail || 'contact@indraproperties.com',
        verificationStatus: 'unverified',
        totalListings: 1,
      },
      postedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    try {
      const stored = JSON.parse(
        localStorage.getItem('indra_custom_properties') || localStorage.getItem('indra_custom_properties') || '[]'
      )
      localStorage.setItem('indra_custom_properties', JSON.stringify([newProperty, ...stored]))
    } catch (err) {
      console.error(err)
    }

    setSubmittedProperty(newProperty)
    setCurrentStep(7)
  }

  const stepsTitle = [
    'Mode & Purpose',
    'Category',
    'Location',
    'Specifications',
    'Photographs',
    'Pricing & Contact',
    'Confirmation',
  ]

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Progress Bar & Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            <span>Step {currentStep} of 6</span>
            <span className="text-emerald">{stepsTitle[currentStep - 1]}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald transition-all duration-300 rounded-full"
              style={{ width: `${(Math.min(currentStep, 6) / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm">
          {/* STEP 1: Listing Mode */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  What are you listing today?
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Choose whether you are selling a property or renting it out
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setListingType('sale')}
                  className={`p-6 rounded-2xl border-2 text-center transition-all ${
                    listingType === 'sale'
                      ? 'border-emerald bg-emerald/5 text-emerald font-bold shadow-sm'
                      : 'border-gray-200 text-charcoal hover:border-gray-300'
                  }`}
                >
                  <Home size={28} className="mx-auto mb-2 text-emerald" />
                  <span className="text-base block">Sell Property</span>
                  <span className="text-xs text-gray-400 font-normal mt-1 block">Freehold transfer or plot resale</span>
                </button>

                <button
                  type="button"
                  onClick={() => setListingType('rent')}
                  className={`p-6 rounded-2xl border-2 text-center transition-all ${
                    listingType === 'rent'
                      ? 'border-emerald bg-emerald/5 text-emerald font-bold shadow-sm'
                      : 'border-gray-200 text-charcoal hover:border-gray-300'
                  }`}
                >
                  <Building2 size={28} className="mx-auto mb-2 text-emerald" />
                  <span className="text-base block">Rent / Lease</span>
                  <span className="text-xs text-gray-400 font-normal mt-1 block">Residential or commercial tenancy</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  You are posting as:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Property Owner', val: 'owner' },
                    { label: 'Real Estate Agent', val: 'agent' },
                    { label: 'Builder / Developer', val: 'developer' },
                  ].map(item => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setAdvertiserType(item.val)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                        advertiserType === item.val
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-md"
                >
                  <span>Continue to Property Type</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Category & Property Type */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Select Property Category
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Choose the specific asset classification for accurate indexing
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {propertyTypeOptions.map(opt => {
                  const isSelected = subcategory === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSubcategoryChange(opt.value)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-emerald bg-emerald/5 text-emerald font-bold shadow-sm'
                          : 'border-gray-200 text-charcoal hover:border-gray-300 bg-white'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wider block text-gray-400 mb-1">
                        {opt.category}
                      </span>
                      <span className="text-sm font-semibold block">{opt.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 text-xs font-semibold hover:text-charcoal"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-md"
                >
                  <span>Continue to Location</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Property Location
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Provide verified regional coordinates so buyers can locate your property on map
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    State
                  </label>
                  <select
                    value={state}
                    onChange={e => setState(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald bg-white text-charcoal"
                  >
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="NCT of Delhi">NCT of Delhi</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    City / District *
                  </label>
                  <select
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald bg-white text-charcoal"
                  >
                    {citiesList.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Locality / Sector / Village Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sector 65, Yamuna Expressway, Sikandrabad, DLF Phase 5"
                  value={locality}
                  onChange={e => setLocality(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Complete Street Address / Landmark
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near Main Highway Crossing, Behind DPS School"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
                />
              </div>

              {/* Privacy option */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block text-xs font-semibold text-charcoal mb-2">
                  Map Privacy Preference
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="displayType"
                      checked={displayType === 'exact'}
                      onChange={() => setDisplayType('exact')}
                      className="accent-emerald"
                    />
                    <span>Exact Location Marker</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="displayType"
                      checked={displayType === 'approximate'}
                      onChange={() => setDisplayType('approximate')}
                      className="accent-emerald"
                    />
                    <span>Approximate Sector / Locality</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 text-xs font-semibold hover:text-charcoal"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-md"
                >
                  <span>Continue to Specifications</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Category-Specific Specifications */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Property Specifications
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Accurate dimensional data tailored for {subcategory.replace(/_/g, ' ')}
                </p>
              </div>

              {/* Area & Unit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Total Area Value *
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={areaValue}
                    onChange={e => setAreaValue(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Measurement Unit *
                  </label>
                  <select
                    value={areaUnit}
                    onChange={e => setAreaUnit(e.target.value as AreaUnit)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald bg-white font-semibold text-charcoal"
                  >
                    <option value="gaj">Gaj (Square Yards)</option>
                    <option value="sqft">Square Feet (sq ft)</option>
                    <option value="acre">Acres</option>
                    <option value="sqm">Square Meters (sq m)</option>
                    <option value="bigha">Bigha</option>
                  </select>
                </div>
              </div>

              {/* Plot / Land Specific Fields */}
              {category === 'land' && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-emerald uppercase tracking-wider">
                    Plot Dimensions &amp; Approvals
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Road Width (ft)</label>
                      <input
                        type="number"
                        value={roadWidth}
                        onChange={e => setRoadWidth(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Frontage (ft)</label>
                      <input
                        type="number"
                        value={frontage}
                        onChange={e => setFrontage(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Depth (ft)</label>
                      <input
                        type="number"
                        value={depth}
                        onChange={e => setDepth(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                    <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-xl bg-gray-50">
                      <input
                        type="checkbox"
                        checked={isCornerPlot}
                        onChange={e => setIsCornerPlot(e.target.checked)}
                        className="accent-emerald"
                      />
                      <span className="font-medium">Corner Plot (Two-Side Open)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-xl bg-gray-50">
                      <input
                        type="checkbox"
                        checked={hasBoundaryWall}
                        onChange={e => setHasBoundaryWall(e.target.checked)}
                        className="accent-emerald"
                      />
                      <span className="font-medium">Boundary Wall Constructed</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Residential Specific Fields */}
              {category === 'residential' && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-emerald uppercase tracking-wider">
                    Rooms &amp; Living Setup
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Bedrooms</label>
                      <select
                        value={bedrooms}
                        onChange={e => setBedrooms(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs"
                      >
                        {[1, 2, 3, 4, 5, 6].map(b => (
                          <option key={b} value={b}>{b} BHK</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Bathrooms</label>
                      <select
                        value={bathrooms}
                        onChange={e => setBathrooms(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs"
                      >
                        {[1, 2, 3, 4, 5].map(b => (
                          <option key={b} value={b}>{b} Baths</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Furnishing</label>
                      <select
                        value={furnishing}
                        onChange={e => setFurnishing(e.target.value)}
                        className="w-full px-3 py-2 border rounded-xl text-xs"
                      >
                        <option value="unfurnished">Unfurnished</option>
                        <option value="semi_furnished">Semi-Furnished</option>
                        <option value="furnished">Furnished</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Car Parking</label>
                      <select
                        value={parking}
                        onChange={e => setParking(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-xl text-xs"
                      >
                        {[0, 1, 2, 3, 4].map(p => (
                          <option key={p} value={p}>{p} Slots</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Facing Direction */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Facing Direction
                </label>
                <select
                  value={facing}
                  onChange={e => setFacing(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald bg-white text-charcoal"
                >
                  <option value="east">East (Auspicious / Morning Sun)</option>
                  <option value="north">North</option>
                  <option value="north_east">North-East</option>
                  <option value="west">West</option>
                  <option value="south">South</option>
                  <option value="south_east">South-East</option>
                </select>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 text-xs font-semibold hover:text-charcoal"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-md"
                >
                  <span>Continue to Photographs</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Media Upload */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Property Photographs
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Listings with 3+ high quality images receive 400% more buyer inquiries
                </p>
              </div>

              {/* Image Previews */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {images.map((url, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 group bg-gray-100">
                    <img src={url} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                    {idx === 0 && (
                      <span className="absolute top-2 left-2 bg-emerald text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        Cover Photo
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Image by URL */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Add Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={newImageUrl}
                    onChange={e => setNewImageUrl(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-emerald"
                  />
                  <button
                    type="button"
                    onClick={addImage}
                    className="px-4 py-2 bg-charcoal text-white rounded-xl text-xs font-semibold hover:bg-black transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 text-xs font-semibold hover:text-charcoal"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(6)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors shadow-md"
                >
                  <span>Continue to Pricing</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Pricing, Description & Contact */}
          {currentStep === 6 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal">
                  Pricing &amp; Contact Details
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Set your expected price and verified contact coordinates
                </p>
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Expected {listingType === 'rent' ? 'Monthly Rent' : 'Total Price'} (INR) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    required
                    min={1000}
                    value={priceAmount}
                    onChange={e => setPriceAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 text-base font-bold text-charcoal focus:outline-none focus:border-emerald font-display"
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                  <span>Formatted: <strong className="text-emerald">{formatPrice(priceAmount)}</strong></span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNegotiable}
                      onChange={e => setIsNegotiable(e.target.checked)}
                      className="accent-emerald"
                    />
                    <span>Price is negotiable</span>
                  </label>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Listing Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 250 Gaj Corner Residential Plot in Sector 65 Bulandshahr"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Property Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Highlight road access, registry status, nearby schools/expressways, and reason for selling..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald resize-none"
                />
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <h3 className="text-xs font-bold text-emerald uppercase tracking-wider">
                  Advertiser Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanjay Verma"
                      value={ownerName}
                      onChange={e => setOwnerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Phone Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 bg-gray-50 text-xs font-medium text-gray-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile"
                        value={ownerPhone}
                        onChange={e => setOwnerPhone(e.target.value)}
                        className="w-full px-3 py-2.5 border rounded-r-xl text-xs focus:outline-none focus:border-emerald"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-gray-500 text-xs font-semibold hover:text-charcoal"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald text-white rounded-xl text-sm font-bold hover:bg-emerald-dark transition-colors shadow-xl"
                >
                  <CheckCircle2 size={18} />
                  <span>Publish Property Listing Free</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 7: Confirmation & Instant Link */}
          {currentStep === 7 && submittedProperty && (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                Listing Submitted Successfully!
              </h2>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Your property <strong className="text-charcoal">{submittedProperty.title}</strong> has been created and saved. It is immediately viewable on your platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Link
                  href={`/properties/${submittedProperty.slug}`}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors"
                >
                  View Your Listing
                </Link>
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-charcoal rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
