export type OrderTypeResponse = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: [
    {
      product_code: string;
      quantity: number;
    }
  ];
};
