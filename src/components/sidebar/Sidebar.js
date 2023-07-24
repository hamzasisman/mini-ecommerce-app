import classnames from "classnames";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SidebarMobile } from "..";
import { LogoBeyaz } from "../../assets/svg";
import { DefaultProfile } from "../../assets/img";
import { useLocalization } from "../../hooks/useLocalization";
import { url } from "../../routes/utility";
import { employeeLogout } from "../../store/EmployeeSlice";
import { animateArrow, toggleProfile, toggleSidebar } from "../Toggle";

const Sidebar = ({ navbarContentRef, navbarRef }) => {
  const strings = useLocalization();
  const dispatch = useDispatch();

  const language = useSelector(state => state.localizationStore.language);

  const profileContentRef = useRef();
  const animateArrowRef = useRef();
  const sidebarRef = useRef();
  const sidebarContentRef = useRef();
  const scrollBarRef = useRef();

  const [isClick, setIsClick] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();
  const pathName = location.pathname || "/dashboard";

  return (
    <>
      <div
        ref={sidebarRef}
        className="hidden md:fixed md:inset-y-0 md:flex md:w-[250px] md:flex-col duration-500"
      >
        <div
          ref={scrollBarRef}
          className="flex flex-grow flex-col overflow-x-hidden overflow-y-scroll sm:overflow-y-hidden hover:overflow-y-scroll transition-all duration-300 shadow-sidebar border-gray-200 bg-blue"
        >
          <div className="flex justify-between items-center pr-2 px-3 fixed w-[250px] z-20 bg-blue h-[62px]">
            <Link
              to={url("dashboard")}
              className="flex flex-shrink-0 items-center px-4 mb-[3px]"
            >
              <img
                className="h-[33px] w-auto"
                src={LogoBeyaz}
                alt="ClickIVO Prime"
              />
            </Link>
            {/* <!-- Web view --> */}
            <button
              className="mr-4"
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
                toggleSidebar(
                  sidebarRef,
                  sidebarContentRef,
                  navbarContentRef,
                  scrollBarRef,
                  navbarRef
                )
              }}
            >
              <span className="material-symbols-outlined text-white text-3xl menu-btn cursor-pointer">
                menu
              </span>
            </button>
          </div>
          <div className="mt-3 pt-2 flex flex-grow flex-col bg-white">
            {/* <!-- WEB --> */}
            <nav
              ref={sidebarContentRef}
              className="flex-1 space-y-1 px-3 pb-4 mt-[43px]"
            >
              <div>
                <div className="w-full text-[13px]">
                  <input type="checkbox" name="panel" className="hidden" />
                  <a
                    className="relative block py-4 cursor-pointer"
                    onClick={() => {
                      if(isSidebarOpen){
                        setIsClick(true);
                        toggleProfile(profileContentRef);
                        animateArrow(animateArrowRef);
                      }
                    }}
                  >
                    <div className="flex items-center px-1">
                      <div className="ml-2 flex items-center justify-between w-full toggled">
                        <div>
                          <p className="mb-[2px] text-[#777]">
                            employee.FullName
                          </p>
                          <p className="font-bold text-[#555]">
                            employeeType, language
                          </p>
                        </div>
                        <div
                          ref={animateArrowRef}
                          className="dropdown-arrow transition-all duration-500 absolute right-4 top-[calc(50%-2px)]"
                        ></div>
                      </div>
                      <img
                        className="rounded-full order-first flex-shrink-0"
                        src={ DefaultProfile }
                        width="42"
                        height="42"
                        alt=""
                      />
                    </div>
                  </a>
                  <div
                    ref={profileContentRef}
                    className="py-3 px-5 transition-all animate-fadeOut max-h-0 -mt-[25px] w-full"
                  >
                    <div className={`${!isClick ? 'hidden' : ''}`}>
                      <p className="mb-1">{strings.sidebar.profile.my_profile}</p>
                      <a
                        className="py-1 px-2 cursor-pointer hover:bg-gray-100 focus:bg-blue flex w-full"
                        onClick={() => dispatch(employeeLogout())}
                      >
                        {strings.sidebar.profile.logout}
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="mx-2" />
              </div>
              <div className="pt-4">
                <Link
                  to={url("dashboard")}
                  className={classnames("sidebar-buttons group justify-end", {
                    "active-button": pathName === "/dashboard",
                  })}
                  onClick={() => { 
                    pathName === "/dashboard" && (window.location.href = "/dashboard");
                  }}
                >
                  <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                    home
                  </span>
                  <span className="toggled w-full">
                    {strings.sidebar.home_page}
                  </span>
                </Link>
              </div>
              <div>
                <div className="header text-section">
                  <h4>{strings.sidebar.teacher.title}</h4>
                  <span className="material-symbols-outlined ml-1 font-bold hidden">
                    more_horiz
                  </span>
                </div>
                <Link
                  to={url("teacher")}
                  className={classnames("sidebar-buttons group justify-end", {
                    "active-button": pathName === "/teacher",
                  })}
                  onClick={() => { 
                    pathName === "/teacher" && (window.location.href = "/teacher");
                  }}
                >
                  <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                    school
                  </span>
                  <span className="toggled w-full">
                    {strings.sidebar.teacher.list}
                  </span>
                </Link>

                <Link
                  to={url("teacher.create")}
                  className={classnames("sidebar-buttons group justify-end", {
                    "active-button": pathName === "/teacher/create",
                  })}
                  onClick={() => { 
                    pathName === "/teacher/create" && (window.location.href = "/teacher/create");
                  }}
                >
                  <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                    add_circle
                  </span>
                  <span className="toggled w-full">
                    {strings.sidebar.teacher.add_teacher}
                  </span>
                </Link>

                <Link
                  to={url("teacher.program")}
                  className={classnames("sidebar-buttons group justify-end", {
                    "active-button": pathName === "/teacher/program",
                  })}
                >
                  <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                    hourglass_empty
                  </span>
                  <span className="toggled w-full">
                    {strings.sidebar.teacher.teacher_program}
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <SidebarMobile />
    </>
  );
};

export default Sidebar;


