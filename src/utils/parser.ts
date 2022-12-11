/**
 *
 * @param string 2022-11-13 14:42:17
 */
export const parseDate = (string: string) => {
  const [date, time] = string.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  );
};
