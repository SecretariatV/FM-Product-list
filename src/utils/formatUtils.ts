const fomatValue = (value: number) => {
  return value.toLocaleString("en-us", {
    minimumFractionDigits: 2,
  });
};

export { fomatValue };
