const Navbar = () => {
  return (
    <nav className="bg-red-400 #fda4af text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/Test-Logo-Small-Black-transparent-1.png"
          alt="Logo"
          className="h-8 "
        />
        <div className="space-x-4 ">
          <button className="hover:text-gray-300">Home</button>
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Games</button>
        </div>
        <img src="" alt="Profile Image" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
