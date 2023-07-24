import { useEffect, useRef, useState } from "react";
import { LogoBeyaz } from "../../assets/svg";
import { NavbarProfile  } from '../navbar';
import { toggleInfo, closeInfo } from "../../components";
import { useLocalization } from "../../hooks/useLocalization";
import { Link } from "react-router-dom";
import { url } from "../../routes/utility";
import OutsideClickHandler from "react-outside-click-handler";
import { DefaultProfile } from "../../assets/img";


const Navbar = ({ navbarContentRef, navbarRef }) => {

  const strings = useLocalization();

  const navbarProfileRef = useRef();


  //Navbarda bulunan profil butonunun dışına tıklandığında kullanılıyor.
  const [isProfileOutside, setIsProfileOutside] = useState(false);

  //Navbarda bulunan profil butonunun içeriklerinin açık/kapalı durumunu kontrol ediyor.
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  //Profile butonunun dışına tıklandığında kapanmasını sağlıyor.
  useEffect(() => {
    if(isProfileOutside && isProfileOpen){
      setIsProfileOpen(!isProfileOpen);
      closeInfo(navbarProfileRef);
    }
  }, [isProfileOutside])

  return (
    <>
      <div
        ref={navbarContentRef}
        id="content"
        className="flex flex-1 flex-col duration-500 "
      >
        <div>
          <div
            ref={navbarRef}
            id="navbar"
            className="sticky md:fixed md:w-[calc(100%-250px)] top-0 z-30 flex h-[62px] flex-shrink-0 bg-[#1269db] shadow-lg"
          >
            <button id="menu_mobile" className="ml-4 md:hidden max-sm:z-20">
              <span className="material-symbols-outlined text-white text-3xl menu-btn">
                menu
              </span>
            </button>
            <div className="flex flex-1 justify-between px-4 mx-3">
              <div className="flex flex-1">
                <form
                  className="w-full md:ml-0 my-3 hidden sm:flex"
                >
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-white focus-within:text-[#BFBFBF]">
                    <label
                      htmlFor="search-field"
                      className="cursor-pointer hover:opacity-80 absolute inset-y-0 left-0 flex items-center px-3"
                    >
                      <svg
                        className="h-5 w-5 mt-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent bg-[#0F5ABC] focus-within:bg-white transition-colors duration-400 py-2 pl-14 pr-3 text-[#BFBFBF] placeholder-white focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm rounded-md"
                      placeholder={strings.navbar.search}
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
                <Link
                  to={url("home")}
                  className="flex sm:hidden flex-shrink-0 items-center justify-center w-full mb-[3px] max-sm:z-20"
                >
                  <img
                    className="h-[33px] w-auto"
                    src={LogoBeyaz}
                    alt="ClickIVO Prime"
                  />
                </Link>
              </div>
              <label
                htmlFor="menu-toggle"
                className="ml-3 sm:hidden flex items-center max-sm:z-20"
              >
                <span className="material-symbols-outlined text-white text-3xl font-bold">
                  more_vert
                </span>
              </label>
              <input type="checkbox" id="menu-toggle" className="hidden peer" />
              <ul
                id="nav"
                className="ml-4 hidden sm:flex items-center max-sm:peer-checked:flex animate-slideIn toggle-content"
              >
                <li>
                  <OutsideClickHandler onOutsideClick={() => setIsProfileOutside(true)}>
                    <div className="relative ml-3">
                      <button
                        onClick={() => {
                          setIsProfileOpen(!isProfileOpen);
                          setIsProfileOutside(false);
                          toggleInfo(navbarProfileRef);
                        }}
                        type="button"
                        className="group flex max-w-xs items-center rounded-full"
                      >
                         <img
                          className="h-10 w-10 rounded-full"
                          src={ DefaultProfile }
                          alt="Profil"
                        />
                      </button>
                      <div
                        id="info"
                        ref={navbarProfileRef}
                        className="hidden md:info py-4 animate-fadeIn md:absolute max-md:fixed max-md:mx-auto max-md:w-[90%] max-md:top-12 max-w-[300px] max-md:inset-0 md:right-0 z-10 min-h-max md:mt-[10px] w-72 origin-top-right text-[13px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <NavbarProfile ref={navbarProfileRef} />
                      </div>
                    </div>
                  </OutsideClickHandler>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>         
    </>
  );
};

export default Navbar;
