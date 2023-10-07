export interface Post {
  id: string;
  project_title: string;
  project_desription: string;
  contributor_expertise: string;
  attachments: string[];
  activity: number;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}
