import BLACK_LOGO from "../../Assets/Logo/BLACK_LOGO.png";

const Sidebar = () => {
  return (
    <div
      className="p-0 m-0 box-border"
      style={{ width: "225px", height: "100vh" }}
    >
      <main className="flex flex-col h-full bg-black justify-center items-center">
        <ul className="text-white text-2xl flex flex-col items-center">
          <li className="cursor-pointer">
            <a>
              <img
                src={BLACK_LOGO}
                alt="DIGIBRI"
                style={{ width: "140px", height: "auto" }}
              />
            </a>
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-400">
            <a>Category</a>
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-400">
            <a>Location Rack</a>
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-400">
            <a>Books</a>
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-400">
            <a>Issue Book</a>
          </li>
          <li className="py-4 cursor-pointer hover:text-gray-400">
            <a>Library Patron</a>
          </li>
          <li className="py-4 cursor-pointer hover:text-red-500">
            <a>Logout</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Sidebar;
