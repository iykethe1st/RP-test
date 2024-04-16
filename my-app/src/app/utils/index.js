export const addCommasToNumber = (x) => {
  const addSeperator = (y) => {
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const num = x.toString();
  const numIndex = num.indexOf(".");

  if (numIndex !== -1) {
    const numBeforeDecimals = addSeperator(num.substring(0, numIndex));
    const numAfterDecimals = num.substring(numIndex);

    return numBeforeDecimals + numAfterDecimals;
  }

  return addSeperator(x);
};
