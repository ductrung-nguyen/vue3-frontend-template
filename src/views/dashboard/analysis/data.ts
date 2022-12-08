export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  label: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: 'Number of access',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    label: 'Day',
  },
  {
    title: 'Turnover',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    label: 'Month',
  },
  {
    title: 'Downloads',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    label: 'Week',
  },
  {
    title: 'Transactions',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    label: 'Year',
  },
];
