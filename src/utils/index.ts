export const getPriceWithSpace = (price: number) => {
  const newPrice = String(price);
  return `${newPrice.slice(0, newPrice.length - 3)} ${newPrice.slice(-3)}`;
};
