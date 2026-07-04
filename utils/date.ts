export function formatDate(rawDate: string): string {
  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) {
    return rawDate;
  }

  const [yyyy, mm, dd] = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .split("-");

  return `${yyyy}년 ${mm}월 ${dd}일`;
}
