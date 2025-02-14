import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[300px]">
            {/* header */}
            <div className="flex items-center justify-between">
              <div>
                <h1>Book Your Trip</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
              />
              <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
