function Ordersum({
  subtotal,
  deliveryFee,
  total,
}) {
  return (
    <div className="w-full lg:w-[340px]">

      <div className="flex items-center gap-3 mt-6">

        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 h-12 px-4 border border-gray-200 rounded-full outline-none text-sm" />

        <button className="bg-[#FFF5F2] text-[#F85A00] px-6 h-12 rounded-full font-semibold" >
          Apply
        </button>

      </div>

      {/* Order Summary */}

      <div className="mt-8">

        <h2 className="text-3xl font-bold mb-6">
          Order Summary
        </h2>

        {/* Subtotal */}

        <div className="flex justify-between mb-4">

          <p className="text-gray-600">
            Sub Total
          </p>
          <p className="font-semibold">
            ${subtotal.toFixed(2)}
          </p>
        </div>

        {/* Delivery */}
        <div className="flex justify-between mb-6">

          <p className="text-gray-600">
            Delivery fee
          </p>

          <p className="font-semibold">
            ${deliveryFee.toFixed(2)}
          </p>

        </div>

        <hr className="mb-6" />

        {/* Total */}

        <div className="flex justify-between items-center">

          <h2 className="text-4xl font-bold">
            Total
          </h2>

          <p className="text-4xl font-bold">
            ${total.toFixed(2)}
          </p>

        </div>

      </div>

      <button  className="w-full h-14 mt-8 rounded-full bg-[#F85A00] text-white text-lg font-semibold hover:bg-[#e65100] duration-300">
        Checkout
      </button>

    </div>
  );
}
export default Ordersum;