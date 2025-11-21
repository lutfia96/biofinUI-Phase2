import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProceedToCheckout } from "../../hooks/query/paymentQuery";
import { triggerCartUpdate } from "../Header/HeaderOne";
import { Loader } from "../Loader";

interface CartItem {
  product_code: string;
  currency: string;
  category: string;
  price: number;
  quantity: number;
  price_USD: number;
  price_group: string;
  name: string;
}

interface ResponseData {
  order_number: string;
  invoice_id: number;
  created_at: string;
  service: string;
  payment_link: string;
  total_amount: string;
}

function CartInner() {
  const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  //   const [defaultCurrency, setDefaultCurrency] = useState("");

  const [cartItems, setCartItems] = useState<CartItem[]>([...storedCartItems]);
  const {
    mutate: proceedToCheckoutMutation,
    data: proceedToCheckoutData,
    isPending: proceedToCheckoutPending,
  } = ProceedToCheckout();

  const [responseData, setResponseData] = useState<ResponseData>();
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    localStorage.getItem("currency") || "TZS"
  );
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    currency: selectedCurrency,
    items: [
      {
        product_code: "",
        quantity: 1,
      },
    ],
  });

  const [paymentInfo, setPaymentInfo] = useState({
    billId: "",
    phoneNumber: "",
    amount: "",
  });

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [clearCartConfirmOpen, setClearCartConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [copyText, setCopyText] = useState("");
  const handleDeleteClick = (product_code: string) => {
    setItemToDelete(product_code);
    setDeleteConfirmOpen(true);
  };

  const confirmRemoveFromCart = () => {
    if (itemToDelete) {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = existingCart.filter(
        (item: CartItem) => item.product_code !== itemToDelete
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      triggerCartUpdate();
    }
    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  const updateQuantity = (product_code: string, amount: number) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = existingCart.map((item: CartItem) =>
      item.product_code === product_code
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    triggerCartUpdate();
  };

  const handleClearCartClick = () => {
    setClearCartConfirmOpen(true);
  };

  const confirmClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    triggerCartUpdate();
    setCustomerInfo({
      customerEmail: "",
      customerName: "",
      customerPhone: "",
      currency: selectedCurrency,
      items: [],
    });
    setClearCartConfirmOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
      currency: selectedCurrency,
    }));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
    setCustomerInfo((prev) => ({
      ...prev,
      currency: newCurrency,
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !customerInfo.customerName ||
      !customerInfo.customerEmail ||
      !customerInfo.customerPhone
    ) {
      return;
    }

    if (cartItems.length === 0) {
      return;
    }

    const checkoutData = {
      ...customerInfo,
      items: cartItems.map((item) => ({
        product_code: item.product_code,
        quantity: item.quantity,
      })),
    };
    proceedToCheckoutMutation(checkoutData);
  };

  const handlePaymentRedirect = () => {
    if (proceedToCheckoutData?.payment_link) {
      open(proceedToCheckoutData.payment_link, "_blank");
    }
  };

  const handlePayLater = () => {
    setResponseData(undefined);
    setIsSuccessModalOpen(false);
    confirmClearCart();
  };

  const handleMixPayment = () => {
    console.log(paymentInfo);
  };

  const totalTickets = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const displayTotalPrice = (currency: string) => {
    if (currency === "TZS") {
      return cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toLocaleString();
    } else if (currency === "USD") {
      return cartItems
        .reduce((sum, item) => sum + item.price_USD * item.quantity, 0)
        .toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    }
    return "0";
  };

  //   const displayCurrency = selectedCurrency === "USD" ? "USD" : "TZS";

  const getItemPrice = (item: CartItem) => {
    return selectedCurrency === "USD" ? item.price_USD : item.price;
  };

  const getItemTotal = (item: CartItem) => {
    return getItemPrice(item) * item.quantity;
  };

  const getCurrencySymbol = () => {
    return selectedCurrency === "USD" ? "$" : "TZS ";
  };

  useEffect(() => {
    if (proceedToCheckoutData) {
      setResponseData(proceedToCheckoutData);
      setIsSuccessModalOpen(true);
      setPaymentInfo({
        billId: proceedToCheckoutData.order_number,
        phoneNumber: "",
        amount: proceedToCheckoutData.total_amount,
      });
    }
  }, [proceedToCheckoutData]);

  return (
    <>
      {proceedToCheckoutPending && <Loader />}
      <div className="th-cart-wrapper space-top space-extra-bottom">
        {!isSuccessModalOpen && !responseData && (
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-8">
                <div className="woocommerce-message">Cart Items</div>

                <form className="woocommerce-cart-form">
                  <table className="cart_table">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <tr className="cart_item" key={item.product_code}>
                            <td>
                              <Link
                                className="cart-productname"
                                to={`/shop/${item.product_code}`}
                              >
                                {item.name}
                              </Link>
                            </td>
                            <td>
                              <span className="amount">
                                <bdi>
                                  <span>{getCurrencySymbol()}</span>
                                  {getItemPrice(item).toLocaleString()}
                                </bdi>
                              </span>
                            </td>
                            <td>
                              <div className="quantity">
                                <button
                                  className="quantity-minus qty-btn"
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.product_code, -1)
                                  }
                                >
                                  <i className="far fa-minus" />
                                </button>
                                <input
                                  type="number"
                                  className="qty-input"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  className="quantity-plus qty-btn"
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.product_code, 1)
                                  }
                                >
                                  <i className="far fa-plus" />
                                </button>
                              </div>
                            </td>
                            <td>
                              <span className="amount">
                                <bdi>
                                  <span>{getCurrencySymbol()}</span>
                                  {getItemTotal(item).toLocaleString()}
                                </bdi>
                              </span>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  handleDeleteClick(item.product_code)
                                }
                                className="remove"
                                type="button"
                              >
                                <i className="fal fa-trash-alt" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="text-center">
                            Your cart is empty
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="col-md-4">
                <div className="col-md-12 mb-4">
                  <div className="woocommerce-message">Booking Information</div>

                  <table className="cart_totals">
                    <tbody>
                      <tr>
                        <td>Number of Tickets:</td>
                        <td>{totalTickets}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="order-total">
                        <td>Total Amount</td>
                        <td>
                          <strong>
                            <span className="amount">
                              <bdi>
                                <span>{getCurrencySymbol()}</span>
                                {displayTotalPrice(selectedCurrency)}
                              </bdi>
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="wc-proceed-to-checkout mb-30">
                    <select
                      value={selectedCurrency}
                      onChange={handleCurrencyChange}
                      className="form-select"
                    >
                      <option value="TZS">TZS</option>
                      <option value="USD">USD</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="woocommerce-message">
                    Customer Information
                  </div>

                  <div className="billing-fields">
                    <p className="form-row form-row-first">
                      <input
                        type="text"
                        name="customerName"
                        className="input-text"
                        placeholder="Fullname"
                        value={customerInfo.customerName}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p className="form-row form-row-last">
                      <input
                        type="email"
                        name="customerEmail"
                        className="input-text"
                        placeholder="Email Address"
                        value={customerInfo.customerEmail}
                        onChange={handleInputChange}
                      />
                    </p>
                    <div className="clear" />
                    <p className="form-row form-row-first">
                      <input
                        type="text"
                        name="customerPhone"
                        className="input-text"
                        placeholder="Phonenumber"
                        value={customerInfo.customerPhone}
                        onChange={handleInputChange}
                      />
                    </p>

                    <div className="d-flex justify-content-between gap-3 mb-30">
                      <div className="wc-proceed-to-checkout">
                        <button
                          type="button"
                          className="th-btn"
                          onClick={handleCheckout}
                          disabled={
                            proceedToCheckoutPending || cartItems.length === 0
                          }
                        >
                          {proceedToCheckoutPending
                            ? "Processing..."
                            : "Checkout"}
                        </button>
                      </div>
                      <div className="wc-clear">
                        <button
                          type="button"
                          className="th-btn"
                          onClick={handleClearCartClick}
                          disabled={cartItems.length === 0}
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            tabIndex={-1}
          >
            <div className="relative max-w-4xl max-h-full">
              <div className="bg-white rounded-md p-3">
                <div className="">
                  <h5 className="">Confirm Removal</h5>
                </div>
                <div className="">
                  <p>
                    Are you sure you want to remove this item from your cart?
                  </p>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="th-btn"
                    onClick={() => setDeleteConfirmOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="th-btn btn-danger"
                    onClick={confirmRemoveFromCart}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clear Cart Confirmation Modal */}
        {clearCartConfirmOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <div className="bg-white rounded-md p-3">
                <div className="">
                  <h5 className="">Clear Cart</h5>
                </div>
                <div className="">
                  <p>Are you sure you want to clear your entire cart?</p>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="th-btn"
                    onClick={() => setClearCartConfirmOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="th-btn btn-danger"
                    onClick={confirmClearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {isSuccessModalOpen && responseData && (
          <>
            <div className="flex justify-center items-center">
              <h4 className="bg-slate-50 w-3/4 p-1 text-lg text-center text-gray-400 font-sans">
                Order Info
              </h4>
            </div>
            <div className="flex justify-center gap-4" tabIndex={-1}>
              <div className="border-y border-green-500 rounded-md py-2">
                <div className="content">
                  <div className="header">
                    <h5 className="title">Order Created Successfully</h5>
                  </div>
                  <div className="body">
                    <p>
                      Your Control Number: {copyText}
                      <span
                        className="p-2 rounded-2xl bg-green-300 text-white"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            responseData.order_number
                          );
                          setCopyText("Copied");
                        }}
                      >
                        {responseData.order_number}
                      </span>
                    </p>
                    <p>
                      Total Amount:{" "}
                      <span className="p-2 rounded-2xl bg-green-300 text-white">
                        {" "}
                        {responseData.total_amount}
                      </span>
                    </p>
                    <p>
                      Service:{" "}
                      <span className="p-2 rounded-2xl bg-green-300 text-white">
                        {" "}
                        {responseData.service}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      className="th-btn style6 th-icon"
                      onClick={handlePayLater}
                    >
                      Pay Later
                    </button>
                    <button
                      type="button"
                      className="th-btn style6"
                      onClick={handlePaymentRedirect}
                    >
                      Online Payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="content border-y border-green-500 py-2 rounded-md">
                <div className="header">
                  <h5 className="title">Mobile Payment</h5>
                </div>
                <div className="body">
                  <p>
                    <select name="" id="">
                      <option value="mixByYas">Mix by Yas</option>
                      <option value="mixByYas">Halo Pesa</option>
                      <option value="mixByYas">M-Pesa</option>
                    </select>
                  </p>
                  <p>
                    <input
                      type="number"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={paymentInfo.phoneNumber}
                      onChange={handlePaymentInputChange}
                    />
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className="th-btn style6 th-icon"
                    onClick={handleMixPayment}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartInner;
