const formatValue = (value: number) => {
  return value.toLocaleString("en-us", {
    minimumFractionDigits: 2,
  });
};

export { formatValue };
