export function convertPrice(number: number, currency: string) {
  const tempStr = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(number);

  return `${tempStr.slice(-1)} ${tempStr.slice(0, -1)}`;
}
