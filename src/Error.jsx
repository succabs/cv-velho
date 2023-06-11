import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <h1 className="text-4xl font-bold mb-4">Hups!</h1>
      <p className="text-lg text-center mb-2">Jokin meni vikaan.</p>
      <p className="text-sm text-center">
        <i>{error.statusText || error.message}</i>
      </p>{" "}
      <div className="p-8 text-center">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to={`/`}>Etusivulle</Link>
        </button>
      </div>
    </div>
  );
}
