import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.PNG";
import { Dropdown } from 'react-bootstrap';
import { useCart } from "../../context";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const { cartList } = useCart();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")) || null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setForceUpdate(prev => !prev);
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    setUser(null);
    navigate("/");
  };

  console.warn(user);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Book4CSE</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search-heart"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-check-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
              </span>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/register">Sign Up</Dropdown.Item>
                <Dropdown.Item href="/login">Log In</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {user && (
              <Dropdown>
                <Dropdown.Toggle variant="btn btn-dark" id="dropdown-basic">
                  {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
