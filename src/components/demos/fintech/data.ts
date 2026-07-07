import { FiHome, FiRepeat, FiUser, FiSettings } from 'react-icons/fi';

export const FINTECH_NAV = [
  { key: 'dashboard', label: 'Overview', icon: FiHome },
  { key: 'transactions', label: 'Transactions', icon: FiRepeat },
  { key: 'profile', label: 'Profile', icon: FiUser },
  { key: 'settings', label: 'Settings', icon: FiSettings },
];

export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  direction: 'in' | 'out';
}

export const TRANSACTIONS: Transaction[] = [
  { id: 't1', name: 'Acme Corp Payroll', category: 'Income', date: 'Jul 05', amount: 6200, direction: 'in' },
  { id: 't2', name: 'Whole Foods Market', category: 'Groceries', date: 'Jul 04', amount: 84.32, direction: 'out' },
  { id: 't3', name: 'Transfer to Savings', category: 'Transfer', date: 'Jul 03', amount: 1500, direction: 'out' },
  { id: 't4', name: 'Client Invoice #2291', category: 'Income', date: 'Jul 02', amount: 3400, direction: 'in' },
  { id: 't5', name: 'Uber', category: 'Transport', date: 'Jul 01', amount: 18.5, direction: 'out' },
  { id: 't6', name: 'Spotify', category: 'Subscription', date: 'Jun 29', amount: 11.99, direction: 'out' },
  { id: 't7', name: 'Electricity Bill', category: 'Utilities', date: 'Jun 27', amount: 96.4, direction: 'out' },
];

export const SPEND_TREND = [
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 62 },
  { label: 'Apr', value: 38 },
  { label: 'May', value: 70 },
  { label: 'Jun', value: 55 },
  { label: 'Jul', value: 84 },
];

export const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
