import date from 'date-and-time';

export const getDate = (dateString, format) => {
  if (!dateString || !format) return;
  const dateStamp = new Date(dateString);
  return date.format(dateStamp, format);
}

export const getCityName = (location) => {
  if (!location || Object.keys(location).length === 0) return;
  const { name, region, country } = location;
  return name !== region ?
    `${name} ${region}, ${country}`
    : `${name}, ${country}`;
}