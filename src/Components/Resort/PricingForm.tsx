import { useState } from "react";
import type { Product } from "../../types/AttractionType";
import "./PricingForm.css";

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
  //     &&
  //   toast.message("You can't mix diffent Currency", { duration: 3000 })
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
    // triggerCartUpdate();
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
      <div className="pricing-success-container">
        <div className="text-center">
          <div className="success-icon">
            {/* <Check className="w-8 h-8 text-green-600" /> */}
          </div>
          <h2 className="success-title">Added to Cart!</h2>
          <p className="success-message">
            You have successfully added the pricing category to your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-form-container">
      {/* Category Badge */}
      {props.product && props.product[0]?.product_category && (
        <div className="category-badge">
          <div className="badge-dot"></div>
          <span className="badge-text">
            {props.product[0].product_category}
          </span>
        </div>
      )}

      <div className="pricing-content">
        {/* Product Selection */}
        <div>
          <h4 className="section-title">Choose Package</h4>

          {/* Check if products exist */}
          {!props?.product || props.product.length === 0 ? (
            <div className="empty-package-container">
              <div className="empty-package-icon">
                {/* <ShoppingCart className="w-8 h-8 text-gray-400" /> */}
              </div>
              <h3 className="empty-package-title">No Packages Available</h3>
              <p className="empty-package-text">
                There are currently no packages available for this attraction.
                Please check back later or contact us for more information.
              </p>
            </div>
          ) : (
            <>
              <div className="package-list">
                {props.product.map((res) => (
                  <div
                    key={res.product_code}
                    className={`package-item ${
                      formData.product_code === res.product_code ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        product_code: res.product_code,
                      }));
                      setPriceAndCurrencyByProductCode(res.product_code);
                    }}
                  >
                    <div className="price-group-badge">{res.price_group}</div>
                    <div className="package-content">
                      <div className="package-info">
                        <div
                          className={`radio-button ${
                            formData.product_code === res.product_code
                              ? "active"
                              : ""
                          }`}
                        >
                          {formData.product_code === res.product_code && (
                            <div className="radio-dot"></div>
                          )}
                        </div>
                        <div className="package-name">
                          <h5 className="name-text">
                            <div>{res.name}</div>
                          </h5>
                        </div>
                      </div>
                      <div className="price-info">
                        <span className="price-amount">
                          {Object.is(res.currency, "TZS")
                            ? res.price
                            : res.price_USD}
                        </span>
                        <span className="currency-text">{res.currency}</span>
                        <p className="per-person-text">per person</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fixed Bottom Section - Quantity and Submit */}
              <div className="form-footer">
                <div className="form-actions">
                  <div className="quantity-section">
                    <label htmlFor="quantity" className="input-label">
                      Number of People
                    </label>
                    <div className="quantity-input-wrapper">
                      {/* <Users className="input-icon" /> */}
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        max="20"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="quantity-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="cart-button-section">
                    <label className="input-label">Add to Cart</label>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      disabled={
                        !formData.product_code ||
                        isProductInCart ||
                        (!isCurrencyInCart && existingCart.length > 0)
                      }
                      className="cart-button"
                    >
                      {/* <ShoppingCart className="button-icon" /> */}
                      {isProductInCart ? "Already in Cart" : "Add To Cart"}
                    </button>
                    {/* {localStorage.getItem("cart") && <button className="view-cart-button">View Cart</button>} */}
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
