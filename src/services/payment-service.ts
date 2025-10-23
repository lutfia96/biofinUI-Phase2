import { postPayment } from "./http";

const proceedToCheckout = async (value: any) => {
  const { data } = await postPayment<any>("order/new", value);
  return data;
};

const mobilePayment = async (value: any) => {
  const { data } = await postPayment<any>("order/push", value);
  return data;
};
export default { proceedToCheckout, mobilePayment };
