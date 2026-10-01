import { Property } from '@/types/property'
import { formatArea, formatSubcategory } from '@/lib/utils/format'
import {
  Compass,
  Building,
  Maximize2,
  Calendar,
  Key,
  ShieldCheck,
  Layers,
  Banknote,
  Car,
  Home,
  CheckCircle2,
} from 'lucide-react'

interface PropertyOverviewProps {
  property: Property
}

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  const isLand = property.category === 'land'
  const isCommercial = property.category === 'commercial'

  const overviewItems = [
    {
      label: 'Property Type',
      value: formatSubcategory(property.subcategory),
      icon: Home,
    },
    {
      label: 'Total Area',
      value: property.area?.value ? formatArea(property.area.value, property.area.unit) : 'N/A',
      icon: Maximize2,
    },
    ...(property.area?.carpetArea
      ? [
          {
            label: 'Carpet Area',
            value: formatArea(property.area.carpetArea, property.area.carpetAreaUnit || property.area.unit),
            icon: Layers,
          },
        ]
      : []),
    ...(property.area?.superBuiltUpArea
      ? [
          {
            label: 'Super Built-up',
            value: formatArea(property.area.superBuiltUpArea, property.area.superBuiltUpAreaUnit || property.area.unit),
            icon: Layers,
          },
        ]
      : []),
    ...(property.facing
      ? [
          {
            label: 'Facing Direction',
            value: property.facing.replace('_', '-').toUpperCase(),
            icon: Compass,
          },
        ]
      : []),
    ...(property.area?.roadWidth
      ? [
          {
            label: 'Approach Road Width',
            value: `${property.area.roadWidth} Feet`,
            icon: Building,
          },
        ]
      : []),
    ...(property.floor !== undefined
      ? [
          {
            label: 'Floor',
            value: `${property.floor === 0 ? 'Ground' : property.floor} ${
              property.totalFloors ? `of ${property.totalFloors} Floors` : ''
            }`,
            icon: Building,
          },
        ]
      : []),
    ...(property.furnishing
      ? [
          {
            label: 'Furnishing Status',
            value: property.furnishing.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
            icon: Key,
          },
        ]
      : []),
    ...(property.parking !== undefined
      ? [
          {
            label: 'Dedicated Parking',
            value: `${property.parking} Vehicle(s)`,
            icon: Car,
          },
        ]
      : []),
    {
      label: 'Ownership Type',
      value: property.ownership ? property.ownership.replace('_', ' ').toUpperCase() : 'Freehold',
      icon: ShieldCheck,
    },
    {
      label: 'Registry Status',
      value: property.registryStatus
        ? property.registryStatus.replace('_', ' ').toUpperCase()
        : 'Registered / Clear Title',
      icon: CheckCircle2,
    },
    {
      label: 'Bank Loan Eligibility',
      value: property.loanAvailable === false ? 'Not Applicable' : 'Eligible / Apply for Assessment',
      icon: Banknote,
    },
    ...(property.constructionStatus
      ? [
          {
            label: 'Possession / Status',
            value: property.constructionStatus.replace('_', ' ').toUpperCase(),
            icon: Calendar,
          },
        ]
      : []),
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mb-6 flex items-center justify-between">
        <span>Property Overview</span>
        <span className="text-xs font-sans font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
          ID: {property.id}
        </span>
      </h2>

      {/* Overview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6">
        {overviewItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald/5 border border-emerald/10 flex items-center justify-center flex-shrink-0 text-emerald">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base font-semibold text-charcoal truncate">
                  {item.value}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Land Specific Features if Land */}
      {isLand && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
            Plot &amp; Land Specifics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Corner Plot</span>
              <span className="font-semibold text-charcoal">{property.isCornerPlot ? 'Yes' : 'No'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Boundary Wall</span>
              <span className="font-semibold text-charcoal">{property.hasBoundaryWall ? 'Constructed' : 'Open'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Electricity Connection</span>
              <span className="font-semibold text-charcoal">{property.hasElectricity !== false ? 'Available' : 'Pending'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Water Supply</span>
              <span className="font-semibold text-charcoal">{property.hasWater !== false ? 'Available' : 'Pending'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Commercial Specific Features if Commercial */}
      {isCommercial && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
            Commercial Specifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Power Backup</span>
              <span className="font-semibold text-charcoal">{property.hasPowerBackup ? '100% DG Backup' : 'Standard'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Passenger / Goods Lift</span>
              <span className="font-semibold text-charcoal">{property.hasLift ? 'Equipped' : 'Not Equipped'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Washrooms</span>
              <span className="font-semibold text-charcoal">{property.washroomsCount ? `${property.washroomsCount} Private` : 'Shared / Common'}</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-400 block mb-1">Heavy Loading Access</span>
              <span className="font-semibold text-charcoal">{property.loadingAccess ? 'Available' : 'Standard'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
