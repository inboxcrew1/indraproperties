import rawProperties from './properties.json'
import { Property } from '@/types/property'

// Centralized strongly-typed properties dataset
export const properties: Property[] = (rawProperties as unknown) as Property[]

export function getAllProperties(): Property[] {
  return properties
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug || p.id === slug)
}

export function getFeaturedProperties(limit = 6): Property[] {
  return properties.filter(p => p.isFeatured).slice(0, limit)
}

export function getPremiumProperties(limit = 4): Property[] {
  return properties.filter(p => p.isPremium).slice(0, limit)
}

export function getPropertiesByCategory(category: string, limit = 6): Property[] {
  return properties.filter(p => p.category === category).slice(0, limit)
}

export function getPropertiesByCity(city: string): Property[] {
  return properties.filter(p => p.location.city.toLowerCase() === city.toLowerCase())
}
