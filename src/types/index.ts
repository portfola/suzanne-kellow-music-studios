// Define type for navigation items
export interface NavItem {
  name: string;
  href: string;
}

// Define type for service features
export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Define type for lesson details
export interface LessonDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Define type for testimonials
export interface Testimonial {
  id: number;
  name: string;
  relation: string;
  content: string;
  stars: number;
}

// Define type for gallery images
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'teaching' | 'performance' | 'recital';
}

// Define type for contact form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  studentAge: string;
  lessonType: string;
  message: string;
}