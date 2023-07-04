import React from "react";

const LangSelect = () => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Suomi</option>
        <option>Englanti</option>
        <option>Ruotsi</option>
      </select>
    </div>
  );
};

export default LangSelect;
