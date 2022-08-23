export const getWeeksInMonth = (year, monthNumber) => {
  var firstOfMonth = new Date(year, monthNumber, 1);
  var lastOfMonth = new Date(year, monthNumber + 1, 0);

  var used = firstOfMonth.getDay() + lastOfMonth.getDate();

  return Math.ceil(used / 7);
};

export const getCurrentYear = () => new Date().getFullYear();

export const getAllMonth = (semester) => {
  let month;

  const ganjil = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];

  const genap = [
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  switch (semester) {
    case "ganjil":
      month = ganjil;
      break;
    case "genap":
      month = genap;
      break;
    default:
      month = [""];
  }

  return month;
};

export const getCurrentMonth = () => {
  const monthName = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return {
    month: monthName[new Date().getMonth()],
    number: new Date().getMonth(),
  };
};
