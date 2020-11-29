export interface Agent {
  address: string;
  authenticationType: string;
  code: string;
  id?: number;
  habilitation: number;
  phoneNumber: number;
  token: string;
  entity: Entity;
  balance?: Balance;
}

export interface Entity {
  accountNumber: string;
  address: string;
  brandName: string;
  category?: string;
  code?: string;
  country?: string;
  email: string;
  id?: number;
  isPayer?: boolean;
  phoneNumber: string;
  status?: boolean;
}

export interface Balance {
  balance: number;
  commission: number;
}
