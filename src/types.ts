export interface BalanceSheetRow {
  id: string;
  label: string;
  code?: string;
  level: number;
  isCollapsible: boolean;
  isTotal: boolean;
  years: number[];
  children?: BalanceSheetRow[];
  editableValue?: string;
}

export interface BalanceSheetData {
  rows: BalanceSheetRow[];
} 