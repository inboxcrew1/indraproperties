// src/types/user.ts

export type UserRole = 'buyer' | 'owner' | 'agent' | 'developer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  profileImage?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: string;
  agencyName?: string;
  reraNumber?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Enquiry {
  id: string;
  propertyId: string;
  propertyTitle: string;
  senderId: string;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  message: string;
  preferredTime?: string;
  status: 'new' | 'read' | 'responded' | 'closed';
  createdAt: string;
}

export interface SavedSearch {
  id: string;
  userId: string;
  name: string;
  filters: Record<string, unknown>;
  notificationsEnabled: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'new_enquiry' | 'listing_approved' | 'listing_rejected' | 'saved_search_match' | 'message' | 'verification_update';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}
