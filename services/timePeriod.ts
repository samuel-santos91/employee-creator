export const timePeriod = (start: string) => {
  const startDate = new Date(start);
  const currentDate = new Date();

  const yearPeriod = currentDate.getFullYear() - startDate.getFullYear();
  const monthPeriod = currentDate.getMonth() - startDate.getMonth();
  const dayPeriod = currentDate.getDate() - startDate.getDate();

  if (yearPeriod === 0) {
    if (monthPeriod === 0) {
      return `${dayPeriod} day(s)`;
    }
    return `${monthPeriod} month(s)`;
  } else {
    return `${yearPeriod} year(s)`;
  }
};
