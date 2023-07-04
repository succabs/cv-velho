import React from "react";

const FontSelect = ({ onSelectFont }) => {
  const handleFontChange = (event) => {
    const selectedFont = event.target.value;
    onSelectFont(selectedFont);
  };

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        onChange={handleFontChange}
      >
        <option>Garamond</option>
        <option>Arial</option>
        <option>Calibri</option>
        <option>Georgia</option>
        <option>Verdana</option>
      </select>
    </div>
  );
};

export default FontSelect;
