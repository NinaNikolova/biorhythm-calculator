import dayjs from "dayjs";
export function calculateBiorhythms(birthDate, targetDate) {
  const birthDate1 =dayjs(birthDate).startOf('day');
    const targetDate1 = dayjs(targetDate).startOf('day');
    const diff = targetDate1.diff(birthDate1, 'day');

  return {
    physical: Math.sin((diff / 23) * 2 * Math.PI),
    emotional: Math.sin((diff / 28) * 2 * Math.PI),
    intellectual: Math.sin((diff / 33) * 2 * Math.PI)
  };
}
