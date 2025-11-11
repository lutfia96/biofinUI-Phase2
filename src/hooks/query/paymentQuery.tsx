import { useMutation } from "@tanstack/react-query";
import paymentService from "../../services/payment-service";

export const ProceedToCheckout = () => {
  const payment = useMutation({
    mutationFn: paymentService.proceedToCheckout,
    onSuccess: () => {
      // toast("Success", { duration: 2000 });
    },
    onError: (_error) => {
      // toast("Error", { duration: 2000 });
    },
  });
  return payment;
};

export const MobilePayment = () => {
  const payment = useMutation({
    mutationFn: paymentService.mobilePayment,
    onSuccess: () => {
      // toast("Success", { duration: 2000 });
    },
    onError: (_error) => {
      // toast("Error", { duration: 2000 });
    },
  });
  return payment;
};
