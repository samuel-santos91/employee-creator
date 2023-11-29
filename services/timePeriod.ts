export const timePeriod = (start: string, end: string) => {
  const startDate = new Date(start);
  const finishDate = new Date(end);
  const currentDate = new Date();

  let yearPeriod = null;
  let monthPeriod = null;
  let dayPeriod = null;

  if (finishDate < currentDate && end !== null) {
    yearPeriod = finishDate.getFullYear() - startDate.getFullYear();
    monthPeriod = finishDate.getMonth() - startDate.getMonth();
    dayPeriod = finishDate.getDate() - startDate.getDate();
  } else {
    yearPeriod = currentDate.getFullYear() - startDate.getFullYear();
    monthPeriod = currentDate.getMonth() - startDate.getMonth();
    dayPeriod = currentDate.getDate() - startDate.getDate();
  }

  if (yearPeriod === 0) {
    if (monthPeriod === 0) {
      return `${dayPeriod} day(s)`;
    }
    return `${monthPeriod} month(s)`;
  } else {
    if (yearPeriod < 0) {
      return `starts in ${startDate.getFullYear()}`;
    }
    return `${yearPeriod} year(s)`;
  }
};
