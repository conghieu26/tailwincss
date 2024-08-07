// Order.jsx
import React from "react";

const Order = () => {
  // Ví dụ danh sách sản phẩm
  const products = [
    {
      id: 1,
      name: "Custom Fit Polo Bear Oxford Shirt",
      image: "/image/H06ee494a8b744612bb3390dee5d42604o.avif",
      quantity: 1,
      price: 99.0,
    },
    // Thêm các sản phẩm khác nếu cần
  ];

  // Tính toán tổng giá
  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const shipping = 10.0;
  const total = subtotal + tax + shipping;

  return (
    <div className="flex flex-col md:flex-row p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:w-1/2 p-4 border-r border-gray-300">
        <div className="mb-4 flex justify-between">
          <h2 className="text-lg  font-bold">Your Product List</h2>
          <h2>3 Items</h2>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center mb-4 border-b border-gray-300 pb-4"
          >
            <img
              className="w-16 h-16 object-cover mr-4"
              src={product.image}
              alt={product.name}
            />
            <div className="flex-grow flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <button className="text-red-500 text-xl">X</button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Qty: {product.quantity}</span>
                <span className="text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Div bên phải */}
      <div className="flex flex-col md:w-1/2 p-4">
        {/* Thông tin thanh toán */}
        <div className="mb-8 border-b border-gray-300 pb-4">
          <h2 className="text-lg font-bold">Order Summary</h2>
          <div className="flex justify-between mt-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4 border-t border-gray-300 pt-4 font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo code */}
        <div>
          <h2 className="text-lg font-bold">Promo Code</h2>
          <input
            type="text"
            placeholder="Enter promo code"
            className="mt-2 p-2 border border-gray-300 rounded"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
