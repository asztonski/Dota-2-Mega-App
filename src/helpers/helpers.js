// Converts an amount of seconds into an hour:minute:seconds formatted string
export const timeHelper = (timeInSeconds) => {
  const dateObj = new Date(timeInSeconds * 1000);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getSeconds();

  const timeString =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0');

  return timeString;
};

export const isRadiant = (playerSlot) => playerSlot < 128;
