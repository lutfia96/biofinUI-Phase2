import React, { useState } from "react";
import type { Product } from "../../types/AttractionType";
import { triggerCartUpdate } from "../Header/HeaderOne";

interface ReservationFormProps {
  attractionTitle?: string;
  product?: Product[];
}

const PricingForm = ({ ...props }: ReservationFormProps) => {
  const [formData, setFormData] = useState({
    price: "",
    currency: "",
    product_code: "",
    quantity: 1,
    category: "",
    price_USD: "",
    price_group: "",
    name: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function setPriceAndCurrencyByProductCode(product_code: string) {
    const selectedProduct = props.product?.find(
      (item) => item.product_code === product_code
    );
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        price: selectedProduct.price,
        currency: selectedProduct.currency,
        category: selectedProduct.product_category,
        price_group: selectedProduct.price_group,
        price_USD: selectedProduct.price_USD,
        name: selectedProduct.name,
      }));
    }
  }

  // Get cart from localStorage
  const existingCart: Product[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  // Check if current product is already in cart
  const isProductInCart = existingCart.some(
    (item) => item.product_code === formData.product_code
  );

  const isCurrencyInCart = existingCart.some(
    (item) => item.currency === formData.currency
  );

  existingCart || !isCurrencyInCart;
  // toast.message("You can't mix diffent Currency", { duration: 3000 })
  const handleSubmit = () => {
    localStorage.setItem("quantity", formData.quantity.toString());
    localStorage.setItem("product_code", formData.product_code.toString());
    localStorage.setItem("category", formData.category.toString());
    localStorage.setItem("price", formData.price.toString());
    localStorage.setItem("price_USD", formData.price_USD.toString());
    localStorage.setItem("currency", formData.currency.toString());

    // toast.success("Product added to cart successfully!", {
    //   duration: 3000,
    //   position: "top-center",
    //   style: {
    //     backgroundColor: "#f0fff4",
    //     color: "#16a34a",
    //     border: "1px solid #bbf7d0",
    //   },
    // });

    const newCart = [
      ...existingCart,
      {
        product_code: formData.product_code,
        quantity: formData.quantity,
        price: formData.price,
        currency: formData.currency,
        category: formData.category,
        price_USD: formData.price_USD,
        price_group: formData.price_group,
        name: formData.name,
      },
    ];

    localStorage.setItem("cart", JSON.stringify(newCart));
    triggerCartUpdate();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        price: "",
        currency: "",
        product_code: "",
        quantity: 1,
        category: "",
        price_USD: "",
        price_group: "",
        name: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center">
          <span className="fa fa-check text-3xl w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Added to Cart!
          </h2>
          <p className="text-gray-600 text-lg">
            You have successfully added the pricing category to your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
      {/* Category Badge */}
      {props.product && props.product[0]?.product_category && (
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 capitalize">
            {props.product[0].product_category}
          </span>
        </div>
      )}

      <div className="space-y-6">
        {/* Product Selection */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Choose Package
          </h4>

          {/* Check if products exist */}
          {!props?.product || props.product.length === 0 ? (
            <div className="text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="fa fa-cart-shopping w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                No Packages Available
              </h3>
              <p className="text-gray-500">
                There are currently no packages available for this attraction.
                Please check back later or contact us for more information.
              </p>
            </div>
          ) : (
            <>
              <div className="max-h-64 md:max-h-80 overflow-y-auto overflow-x-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {props.product.map((res) => (
                  <div
                    key={res.product_code}
                    className={`relative p-2 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      formData.product_code === res.product_code
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        product_code: res.product_code,
                      }));
                      setPriceAndCurrencyByProductCode(res.product_code);
                    }}
                  >
                    <div>{res.price_group}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            formData.product_code === res.product_code
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.product_code === res.product_code && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-gray-800 text-base truncate space-x-2">
                            <div>{res.name}</div>
                          </h6>
                        </div>
                      </div>
                      <div className="text-right ml-4 shrink-0">
                        <span className="text-xl font-bold text-blue-600">
                          {Object.is(res.currency, "TZS")
                            ? res.price
                            : res.price_USD}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          {res.currency}
                        </span>
                        <p className="text-gray-500 text-xs">per person</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fixed Bottom Section - Quantity and Submit */}
              <div className="border-t border-gray-200 pt-6 bg-white">
                <div className="flex flex-col sm:flex-row items-end gap-4">
                  <div className="flex-1 w-full">
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Number of People
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="fa fa-users w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        max="20"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Add to Cart
                    </label>
                    <button
                      style={{ borderRadius: ".6rem" }}
                      onClick={handleSubmit}
                      type="button"
                      disabled={
                        !formData.product_code ||
                        isProductInCart ||
                        (!isCurrencyInCart && existingCart.length > 0)
                      }
                      className="w-full rounded-4xl bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 transform disabled:hover:scale-100"
                    >
                      <span className="fa fa-cart-plus w-5 h-5" />
                      {isProductInCart ? "Already in Cart" : "Add To Cart"}
                    </button>
                    {/* {localStorage.getItem("cart") && <button>View Cart</button>} */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
