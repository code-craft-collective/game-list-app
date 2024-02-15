import NotFoundImage from "../assets/ErrorImage.jpg";

const ErrorPage = () => {
  const containerStyle = {
    backgroundImage: `url(${NotFoundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "125h",
  };

  return (
    <div
      className="flex flex-col items-center justify-center text-white h-screen"
      style={containerStyle}
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist, head to home page
          please
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
