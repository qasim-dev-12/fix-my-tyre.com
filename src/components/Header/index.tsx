"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "bg-gray-dark/95 shadow-sticky-dark fixed z-9999 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo flex w-full items-center gap-2 ${
                  sticky ? "py-5 xl:py-2" : "py-8"
                } `}
              >
                <img src="/images/logo/logo-800speedy-white.png" alt="800 Speedy" className="h-10 w-auto xl:h-16" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 xl:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block xl:flex xl:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary"
                                : "text-dark hover:text-primary xl:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base whitespace-nowrap xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 xl:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm xl:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 xl:pr-0">
                <a
                  href="https://wa.me/971543170355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-up hidden w-[110px] rounded-xs bg-[#25D366] py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-[#25D366]/90 xl:block"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+971543170355"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 ml-4 hidden w-[110px] rounded-xs py-3 text-center text-base font-medium text-white transition duration-300 xl:block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
