import { FiHome, FiCalendar, FiUser, FiSettings } from 'react-icons/fi';

export const HEALTHCARE_NAV = [
  { key: 'dashboard', label: 'Overview', icon: FiHome },
  { key: 'appointments', label: 'Appointments', icon: FiCalendar },
  { key: 'profile', label: 'Profile', icon: FiUser },
  { key: 'settings', label: 'Settings', icon: FiSettings },
];

export interface Appointment {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}

export const APPOINTMENTS: Appointment[] = [
  { id: 'a1', doctor: 'Dr. Priya Nair', specialty: 'Psychiatry', date: 'Jul 09', time: '10:30 AM', status: 'Confirmed' },
  { id: 'a2', doctor: 'Dr. Marcus Lee', specialty: 'Therapy', date: 'Jul 14', time: '3:00 PM', status: 'Pending' },
  { id: 'a3', doctor: 'Dr. Priya Nair', specialty: 'Psychiatry', date: 'Jun 21', time: '10:30 AM', status: 'Completed' },
  { id: 'a4', doctor: 'Dr. Sara Kim', specialty: 'Nutrition', date: 'Jun 10', time: '1:15 PM', status: 'Completed' },
];

export const STATUS_STYLES: Record<Appointment['status'], string> = {
  Confirmed: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  Completed: 'bg-slate-100 text-slate-500',
};
