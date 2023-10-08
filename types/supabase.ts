export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          activity: number | null
          attachments: string[] | null
          contributor_expertise: string | null
          created_at: string
          id: number
          project_description: string | null
          project_title: string
          tags: string[] | null
        }
        Insert: {
          activity?: number | null
          attachments?: string[] | null
          contributor_expertise?: string | null
          created_at?: string
          id?: number
          project_description?: string | null
          project_title: string
          tags?: string[] | null
        }
        Update: {
          activity?: number | null
          attachments?: string[] | null
          contributor_expertise?: string | null
          created_at?: string
          id?: number
          project_description?: string | null
          project_title?: string
          tags?: string[] | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
