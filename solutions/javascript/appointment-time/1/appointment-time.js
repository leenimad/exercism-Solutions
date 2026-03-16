// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now= new Date()) {
  const date = new Date (now); 
  let day = date.getDate(); 
  let newDay = day + days ;
   date.setDate(newDay);
 return date;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {

  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let times = new Date(timestamp);
let time = {
    year : times.getFullYear(), 
    month: times.getMonth(),
    date: times.getDate(),
    hour: times.getHours(),
    minute: times.getMinutes(),
    
  }
  return time ;
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */

export function updateAppointment(timestamp, options) {
  const dateObj = new Date(timestamp);
  const methodsMap = {
    year: "setFullYear",
    month: "setMonth",
    date: "setDate",
    hour: "setHours",
    minute: "setMinutes"
  };
  for (let key in options) {
    const methodName = methodsMap[key];
    let newValue = options[key];

    if (methodName) {
      dateObj[methodName](newValue);
    }
  }

  return {
    year: dateObj.getFullYear(), 
    month: dateObj.getMonth() , 
    date: dateObj.getDate(),
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes()
  };
}
/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
let timeA = new Date(timestampA);
  let timeB = new Date(timestampB);
  let timeBetweenAB = Math.ceil((timeB- timeA)/1000 ); 
  return timeBetweenAB;
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  if (currentTimestamp < appointmentTimestamp ){
    return true ;
  }
  else {
    return false ;
  }
}
