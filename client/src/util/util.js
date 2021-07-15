export const formattedDate = (date = new Date(), option = "yearFirst") => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return option === "yearFirst"
    ? `${year}-${month}-${day}`
    : `${month}-${day}-${year}`;
};
