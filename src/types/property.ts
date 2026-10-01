// src/types/property.ts

export type ListingType = 'sale' | 'rent' | 'lease';
export type PropertyCategory = 'residential' | 'land' | 'commercial' | 'industrial';
export type VerificationStatus = 'verified' | 'under_review' | 'unverified';
export type PropertyStatus = 'available' | 'under_offer' | 'sold' | 'rented' | 'inactive' | 'draft' | 'pending_review' | 'rejected';
export type AreaUnit = 'gaj' | 'sqft' | 'sqm' | 'acre' | 'sqyd' | 'bigha';
export type FurnishingStatus = 'furnished' | 'semi_furnished' | 'unfurnished';
export type Facing = 'north' | 'south' | 'east' | 'west' | 'north_east' | 'north_west' | 'south_east' | 'south_west';
export type OwnershipType = 'freehold' | 'leasehold' | 'cooperative' | 'power_of_attorney';
export type LandType = 'residential' | 'agricultural' | 'commercial' | 'industrial' | 'farm';

export interface PropertyLocation {
  address: string;
  locality?: string;
  city: string;
  state: string;
  postalCode?: string;
  pincode?: string;
  landmark?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  lat?: number;
  lng?: number;
  displayType?: 'exact' | 'approximate';
}

export interface PropertyArea {
  value: number;
  unit: AreaUnit;
  carpetArea?: number;
  carpetAreaUnit?: AreaUnit;
  builtUpArea?: number;
  builtUpAreaUnit?: AreaUnit;
  superBuiltUpArea?: number;
  superBuiltUpAreaUnit?: AreaUnit;
  // Land specific
  frontage?: number;
  depth?: number;
  roadWidth?: number;
}

export interface PropertyPrice {
  amount: number;
  currency?: 'INR' | string;
  isNegotiable?: boolean;
  priceType?: string;
  pricePerUnit?: number;
  pricePerUnitLabel?: string;
  // Rental specific
  monthlyRent?: number;
  securityDeposit?: number;
  maintenanceCharge?: number;
  availableFrom?: string;
  // Sale specific
  otherCharges?: number;
}

export interface PropertyMedia {
  id: string;
  url: string;
  type: 'image' | 'video' | 'floorplan' | 'document';
  caption?: string;
  isCover?: boolean;
  order?: number;
}

export interface PropertyAmenity {
  id: string;
  name: string;
  category?: 'basic' | 'security' | 'recreation' | 'connectivity' | 'convenience' | 'infrastructure' | string;
  icon?: string;
}

export interface Advertiser {
  id?: string;
  name: string;
  type: 'owner' | 'agent' | 'developer' | 'builder' | string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  profileImage?: string | null;
  verificationStatus?: VerificationStatus | string;
  totalListings?: number;
  rating?: number;
  responseTime?: string;
  agencyName?: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  listingType: ListingType | string;
  category: PropertyCategory | string;
  subcategory: string; // e.g. 'flat', 'plot', 'villa', 'shop', 'office', etc.
  status: PropertyStatus | string;
  verificationStatus: VerificationStatus | string;
  isFeatured?: boolean;
  isPremium?: boolean;
  isNew?: boolean;

  price: PropertyPrice;
  area: PropertyArea;
  location: PropertyLocation;

  // Residential fields
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  parking?: number;
  floor?: number;
  totalFloors?: number;
  facing?: Facing | string;
  furnishing?: FurnishingStatus | string;
  constructionStatus?: 'ready_to_move' | 'under_construction' | 'new_launch' | string;
  ageYears?: number;
  ownership?: OwnershipType | string;

  // Land specific
  landType?: LandType;
  isCornerPlot?: boolean;
  hasBoundaryWall?: boolean;
  hasElectricity?: boolean;
  hasWater?: boolean;
  approachRoad?: boolean;
  registryStatus?: 'clear' | 'pending' | 'under_process';
  loanAvailable?: boolean;

  // Commercial specific
  commercialType?: string;
  hasPowerBackup?: boolean;
  hasLift?: boolean;
  washroomsCount?: number;
  loadingAccess?: boolean;
  suitableFor?: string[];

  description?: string;
  amenities?: PropertyAmenity[];
  media?: PropertyMedia[];
  advertiser?: Advertiser;

  postedAt?: string;
  updatedAt?: string;
  viewCount?: number;
  enquiryCount?: number;
  savedCount?: number;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  developer: string;
  developerLogo?: string;
  location: PropertyLocation;
  priceRange: { min: number; max: number; currency: 'INR' };
  configurations: string[];
  status: 'new_launch' | 'under_construction' | 'ready_to_move';
  possessionDate: string;
  totalUnits?: number;
  amenities: string[];
  media: PropertyMedia[];
  description: string;
  reraNumber?: string;
  isVerified: boolean;
  isFeatured: boolean;
  postedAt: string;
}

export interface SearchFilters {
  query?: string;
  listingType?: ListingType;
  category?: PropertyCategory;
  subcategory?: string;
  city?: string;
  locality?: string;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  areaUnit?: AreaUnit;
  bedrooms?: number[];
  bathrooms?: number[];
  furnishing?: FurnishingStatus[];
  facing?: Facing[];
  parking?: boolean;
  loanAvailable?: boolean;
  verifiedOnly?: boolean;
  postedBy?: 'owner' | 'agent' | 'developer';
  sortBy?: 'relevance' | 'newest' | 'price_asc' | 'price_desc' | 'area_asc' | 'area_desc';
  page?: number;
  perPage?: number;
}

export interface SearchResult {
  properties: Property[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  filters: SearchFilters;
}
