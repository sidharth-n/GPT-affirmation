import React, { useState } from "react";
import "./InputPage.css";

const InputPage: React.FC<{ onPaste: (text: string) => void }> = ({
  onPaste,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onPaste(inputValue);
  };

  return (
    <div className="container flex flex-col items-stretch p-4 pb-8">
      <div className="relative sm:block mt-64">
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <input
          className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm "
          id="search"
          type="search"
          placeholder="Enter your challenge or worry... "
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-power"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" x2="12" y1="2" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputPage;
