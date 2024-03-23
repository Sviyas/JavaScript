/**
 * @param {number} day
 * @returns Show the day of date
 */
let getCurrentDate = day => new Date(new Date().setDate(new Date().getDate() + (day || 0))).toLocaleDateString();

/**
 * @param {string} date
 * @returns return the weekday
 */
const getWeekDay = date => new Date(date).toLocaleDateString('en-Us', { weekday: 'long' });

// ? set day initializer
let increaseday = 0;

let startDate = getCurrentDate();

// ? set the year end of the day as date object
const endDate = new Date(new Date(new Date().setDate(new Date().getDate() + 361)).toLocaleDateString());

const holidays = [];

while (new Date(startDate) < new Date(endDate)) {
  // ? update the date
  startDate = getCurrentDate(increaseday);

  const getHoliday = getWeekDay(startDate);

  if (['Saturday', 'Sunday'].includes(getHoliday)) holidays.push({ date: startDate, weekday: getHoliday });

  increaseday++;
}

console.log('holidays :>> ', holidays.length, holidays);
