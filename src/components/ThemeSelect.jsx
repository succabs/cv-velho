import React from "react";

const ThemeSelect = () => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Pohja 1</option>
        <option>Pohja 2</option>
        <option>Pohja 3</option>
        <option>Pohja 4</option>
      </select>
    </div>
  );
};

export default ThemeSelect;
