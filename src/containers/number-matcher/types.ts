export interface Invoice {
    cardNumber: string;
    amount: number;
  }
  
  export type SantisedInvoice = CleanInvoice | EmptyRow;

  export interface CleanInvoice extends Invoice {
    cardNumber: string;
    amount: number;
    last4Digits: number;
    empty: false;
  }

  export interface EmptyRow {
    empty: true;
  }
  
  export interface MatchingRow {
    operaIndex: number;
    agentIndex: number;
  }
  