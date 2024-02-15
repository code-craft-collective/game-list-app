import NotFoundImage from "../assets/ErrorImage.jpg";

const ErrorPage = () => {
  const containerStyle = {
    backgroundImage: `url(${NotFoundImage})`,
    backgroundSize: "contain", 
    backgroundPosition: "center",
    height: "90vh",
    width: "100vw",
  };

  return (
    <div
      className="flex flex-col items-center justify-center text-white h-screen"
      style={containerStyle}
    >
      <div className="text-center space-y-6 ">
        <h1 className="text-4xl font-bold ">404 - Not Found</h1>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist. Please head to the
          homepage.
        </p>
        <div className="mt-24">
          <a
            href="/"
            className=" px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
