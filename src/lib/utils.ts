import moment from 'moment';

export function readableDate(date: string): string {
  const formatted = moment(date, 'YYYY-MM-DD').format('ddd, D. MMMM YYYY');
  return formatted.endsWith('.') ? formatted.slice(0, -1) : formatted;
}
