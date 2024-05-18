export const formatNumber = (number: number) => {
    if (number < 1000) return number.toString();
    if (number >= 1000 && number < 1000000)
      return (number / 1000).toFixed(1) + "K";
    if (number >= 1000000 && number < 1000000000)
      return (number / 1000000).toFixed(1) + "M";
    if (number >= 1000000000) return (number / 1000000000).toFixed(1) + "B";
  };