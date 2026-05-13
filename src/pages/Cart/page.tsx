const Cart = () => (
  <div className="py-16 px-[8%] bg-gray-50 min-h-[70vh]">
    <h1 className="text-center text-gray-800 text-3xl md:text-4xl mb-2">Shopping Cart</h1>
    <p className="text-center text-gray-500 mb-10">Manage your items</p>

    <div className="bg-white rounded-xl overflow-x-auto shadow-sm">
      <table className="w-full border-collapse min-w-150">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-4 text-left font-semibold">Book</th>
            <th className="p-4 text-left font-semibold">Price</th>
            <th className="p-4 text-left font-semibold">Quantity</th>
            <th className="p-4 text-left font-semibold">Total</th>
            <th className="p-4 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="p-5 align-middle">
              <div className="flex items-center gap-4">
                <img src="/images/1984.jpeg" alt="1984" className="w-15 h-20 object-cover rounded-lg" />
                <div className="cart-info">
                  <h4 className="text-gray-800 mb-1">1984</h4>
                  <p className="text-gray-500 text-sm">George Orwell</p>
                </div>
              </div>
            </td>
            <td className="p-5 align-middle text-gray-800 font-medium">$12.99</td>
            <td className="p-5 align-middle">
              <input type="number" className="w-16.25 p-2 border border-gray-200 rounded-lg text-center" defaultValue="1" min="1" />
            </td>
            <td className="p-5 align-middle font-bold text-gray-800">$12.99</td>
            <td className="p-5 align-middle">
              <button className="bg-none border-none text-xl cursor-pointer text-gray-400 transition-colors hover:text-red-500" type="button">
                ✕
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="p-5 align-middle">
              <div className="flex items-center gap-4">
                <img src="/images/alchemist.jpeg" alt="The Alchemist" className="w-15 h-20 object-cover rounded-lg" />
                <div className="cart-info">
                  <h4 className="text-gray-800 mb-1">The Alchemist</h4>
                  <p className="text-gray-500 text-sm">Paulo Coelho</p>
                </div>
              </div>
            </td>
            <td className="p-5 align-middle text-gray-800 font-medium">$14.99</td>
            <td className="p-5 align-middle">
              <input type="number" className="w-15 p-2 border border-gray-200 rounded-lg text-center" defaultValue="1" min="1" />
            </td>
            <td className="p-5 align-middle font-bold text-gray-800">$14.99</td>
            <td className="p-5 align-middle">
              <button className="bg-none border-none text-xl cursor-pointer text-gray-400 transition-colors hover:text-red-500" type="button">
                ✕
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex justify-between gap-7.5 mt-8 flex-wrap">
      <div className="flex gap-2.5 items-start">
        <input type="text" className="p-3 border border-gray-200 rounded-lg w-50" placeholder="Coupon code" />
        <button className="px-5 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700" type="button">
          Apply
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl min-w-70 shadow-sm">
        <h3 className="text-gray-800 mb-5 pb-2 border-b-2 border-gray-100">Order Summary</h3>
        <div className="flex justify-between py-2 text-gray-800">
          <span>Subtotal:</span>
          <span>$27.98</span>
        </div>
        <div className="flex justify-between py-2 text-gray-800">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="h-px bg-gray-100 my-2"></div>
        <div className="flex justify-between py-2 text-xl font-bold text-gray-800">
          <span>Total:</span>
          <span>$27.98</span>
        </div>
        <button className="w-full mt-4 mb-2 bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-500" type="button">
          Proceed to Checkout
        </button>
        <a href="/" className="block text-center text-gray-500 no-underline text-sm hover:text-orange-600">
          Continue Shopping
        </a>
      </div>
    </div>
  </div>
);

export default Cart;