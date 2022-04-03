export const currencyFormat = (num) => {
  return (
    "$" +
    num
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      .slice(0, -3)
  );
};

export const changeDateFormat = (inputDate) => {
  var splitDate = inputDate.split("-");
  if (splitDate.count === 0) {
    return null;
  }
  var year = splitDate[0];
  var month = splitDate[1];
  var day = splitDate[2];

  return month + "-" + day + "-" + year;
};
