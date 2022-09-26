export const getProductService = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const json = await response.json();
  return json;
};
