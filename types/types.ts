export interface Post {
  id: number;
  project_title: string;
  project_description: string | null;
  contributor_expertise: string | null;
  attachments: string[] | null;
  activity: number;
  tags: string[] | null;
  created_at: string;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
