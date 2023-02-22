import moment from "moment";
import "moment/locale/nb";

export const getLogoSrc = (code: string) =>
  `https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${code}.png`;

export const getDate = (dateString: string) => {
  return moment(dateString).format("ddd DD MMM").replace(".", "");
};

export const getHour = (dateString: string) =>
  moment.utc(dateString).format("HH:mm");

export const getDuration = (durationString: string) => {
  const duration = moment.duration(durationString);
  const hours = duration.hours();
  const minutes = duration.minutes();
  return `${hours}u ${minutes.toString().padStart(2, "0")}m`;
};
