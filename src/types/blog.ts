
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt?: Date;
}

export interface PostFormData {
  title: string;
  subtitle: string;
  content: string;
}