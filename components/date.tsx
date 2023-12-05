export default function DateComponent({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('de-DE', options);
  return <time dateTime={dateString}>{formattedDate}</time>;
}
