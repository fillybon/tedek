export interface Post {
  id: string;
  project_title: string;
  project_description: string;
  contributor_expertise: string;
  attachments: string[];
  activity: number;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
