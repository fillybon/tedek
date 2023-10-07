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
          contributer_expertise: string | null
          created_at: string
          id: number
          project_description: string | null
          project_title: string
          tags: number | null
        }
        Insert: {
          activity?: number | null
          attachments?: string[] | null
          contributer_expertise?: string | null
          created_at?: string
          id?: number
          project_description?: string | null
          project_title: string
          tags?: number | null
        }
        Update: {
          activity?: number | null
          attachments?: string[] | null
          contributer_expertise?: string | null
          created_at?: string
          id?: number
          project_description?: string | null
          project_title?: string
          tags?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_tags_fkey"
            columns: ["tags"]
            referencedRelation: "tags"
            referencedColumns: ["id"]
          }
        ]
      }
      tags: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
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
