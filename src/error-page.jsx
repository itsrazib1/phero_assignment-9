import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" items-center text-center mt-20">
      <h1 className=" text-5xl font-bold mb-4">Oops!</h1>
      <img
        className="mx-auto rounded-xl"
        src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
        alt="404"
      />
      <p className="mt-3 font-semibold text-red-500 text-3xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className=" text-3xl text-green-300 bg-red-700 mx-96 mt-5 py-5 rounded-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
