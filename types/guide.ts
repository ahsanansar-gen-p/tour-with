export type Guide = {
  id: string;
  name: string;
  image: string;
  experience: string;
  description: string;
  gallery: string[];
  socials?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
};
