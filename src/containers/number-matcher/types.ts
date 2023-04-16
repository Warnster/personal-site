export interface Invoice {
    cardNumber: string;
    amount: number;
  }
  
  export interface SantisedInvoice extends Invoice {
    cardNumber: string;
    amount: number;
    last4Digits: number;
  }
  
  export interface MatchingRow {
    operaIndex: number;
    agentIndex: number;
  }
  