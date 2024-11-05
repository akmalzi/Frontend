import { useState } from 'react';
import { Link } from "react-router-dom"

function TelusuriButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center relative">
      <button
        onClick={togglePopup}
        className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor mb-2"
      >
        Telusuri
      </button>

      {isOpen && (
        <div className="bg-primaryColor rounded-lg shadow-lg text-center text-white w-fit mt-2 absolute top-5 left-4 z-50">
          <Link
            onClick={() => setIsOpen(false)}
            to="/navigasi"
            className="block text-lg font-semibold py-2 w-full hover:bg-green-600 rounded-t-lg px-4"
          >
            Navigasi
          </Link>
          <hr className="border-white opacity-50" />
          <Link
            onClick={() => setIsOpen(false)}
            to="/fasilitas"
            className="block text-lg font-semibold py-2 w-full hover:bg-green-600 rounded-b-lg px-4"
          >
            Fasilitas
          </Link>
        </div>
      )}
    </div>
  );
}

export default TelusuriButton;