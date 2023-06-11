import { Link } from "react-router-dom";
export default function StartButton() {
  return (
    <div className="p-8 text-center">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to={`luo`}>Aloita</Link>
      </button>
    </div>
  );
}
