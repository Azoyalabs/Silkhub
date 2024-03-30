export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      airdrop: {
        Row: {
          contract: string
          id: number
          start_date: string | null
          token_address: string | null
        }
        Insert: {
          contract: string
          id?: never
          start_date?: string | null
          token_address?: string | null
        }
        Update: {
          contract?: string
          id?: never
          start_date?: string | null
          token_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_token_address"
            columns: ["token_address"]
            isOneToOne: false
            referencedRelation: "token"
            referencedColumns: ["address"]
          },
        ]
      }
      sale: {
        Row: {
          contract: string
          end_date: string | null
          start_date: string | null
          token_address: string | null
          unit_price: number | null
        }
        Insert: {
          contract: string
          end_date?: string | null
          start_date?: string | null
          token_address?: string | null
          unit_price?: number | null
        }
        Update: {
          contract?: string
          end_date?: string | null
          start_date?: string | null
          token_address?: string | null
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_token_address"
            columns: ["token_address"]
            isOneToOne: false
            referencedRelation: "token"
            referencedColumns: ["address"]
          },
        ]
      }
      token: {
        Row: {
          address: string
          burnable: boolean
          creation_date: string
          creator: string
          decimals: number
          description: string
          discord: string | null
          initial_supply: number | null
          linkedin: string | null
          logo: string | null
          medium: string | null
          mintable: boolean
          name: string
          pausable: boolean
          symbol: string
          telegram: string | null
          twitter: string | null
          website: string | null
        }
        Insert: {
          address: string
          burnable: boolean
          creation_date: string
          creator: string
          decimals: number
          description: string
          discord?: string | null
          initial_supply?: number | null
          linkedin?: string | null
          logo?: string | null
          medium?: string | null
          mintable: boolean
          name: string
          pausable: boolean
          symbol: string
          telegram?: string | null
          twitter?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          burnable?: boolean
          creation_date?: string
          creator?: string
          decimals?: number
          description?: string
          discord?: string | null
          initial_supply?: number | null
          linkedin?: string | null
          logo?: string | null
          medium?: string | null
          mintable?: boolean
          name?: string
          pausable?: boolean
          symbol?: string
          telegram?: string | null
          twitter?: string | null
          website?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
