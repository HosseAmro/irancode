export function convertToShamsi(dateString: string): string {
  const date = new Date(dateString);
  const shamsiDate = convertGregorianToShamsi(date);
  return `${shamsiDate.year}/${shamsiDate.month}/${shamsiDate.day}`;
}

function convertGregorianToShamsi(gregorianDate: Date): {
  year: string;
  month: string;
  day: string;
} {
  const jalaliDate = require("jalaali-js");
  const { jy, jm, jd } = jalaliDate.toJalaali(
    gregorianDate.getFullYear(),
    gregorianDate.getMonth() + 1,
    gregorianDate.getDate()
  );
  return { year: jy.toString(), month: jm.toString(), day: jd.toString() };
}
