import classnames from "classnames";
import { useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LogoBeyaz } from "../../assets/svg";
import { useLocalization } from "../../hooks/useLocalization";
import { url } from "../../routes/utility";
import { employeeLogout } from "../../store/EmployeeSlice";
import { animateArrow, closeSidebarMobile, toggleProfile, toggleSidebarMobile } from "../Toggle";
import { DefaultProfile } from "../../assets/img";

const SidebarMobile = () => {

  const strings = useLocalization();
  const dispatch = useDispatch();

  const language = useSelector(state => state.localizationStore.language);

  const sidebarRef = useRef();
  const profileContentRef = useRef();
  const mobileOverlayRef = useRef();
  const mobileButtonRef = useRef();
  const animateArrowRef = useRef();
  const windowSize = useRef(window.innerWidth);

  const location = useLocation();
  const pathName = location.pathname || "/dashboard";

  useEffect(() => {
    const handleSidebarOpen = () => {
      if (windowSize.current && windowSize.current < 768) {
        toggleSidebarMobile(sidebarRef, mobileOverlayRef, mobileButtonRef);
      }
    };

    handleSidebarOpen();
  }, [windowSize.current, pathName]);

  return (
    <>
      <div className="relative z-40 md:hidden" role="dialog" aria-modal="true">
        <div
          ref={mobileOverlayRef}
          id="transparent_bg"
          className="fixed inset-0 bg-gray-600 bg-opacity-75 animate-fadeIn"
        ></div>
        <OutsideClickHandler
          onOutsideClick={() =>
            closeSidebarMobile(sidebarRef, mobileOverlayRef, mobileButtonRef)
          }
        >
          <div
            id="sidebar_mobile"
            ref={sidebarRef}
            className="fixed w-[250px] inset-0 z-40 flex duration-500"
          >
            <div className="relative flex w-full max-w-[250px] flex-1 flex-col bg-white pb-4">
              <div className="flex items-center justify-between pr-2 px-3 bg-blue h-[62px] shadow-lg">
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

                {/* <!-- Mobil view --> */}
                <button
                  ref={mobileButtonRef}
                  className="mr-4"
                  onClick={() =>
                    toggleSidebarMobile(
                      sidebarRef,
                      mobileOverlayRef,
                      mobileButtonRef
                    )
                  }
                >
                  <span className="material-symbols-outlined text-white text-3xl menu-btn">
                    menu
                  </span>
                </button>
              </div>
              <div className="h-0 flex-1 overflow-y-scroll sm:overflow-y-hidden hover:overflow-y-scroll">
                {/* <!-- Mobil --> */}
                <nav className="space-y-1 px-2">
                  <div>
                    <div id="accordion_mobil" className="w-full text-[13px]">
                      <input
                        type="checkbox"
                        name="panel"
                        id="panel-mobil"
                        className="hidden"
                      />
                      <a
                        id="panel-mobil"
                        htmlFor="panel-1"
                        className="label relative block bg-transparent px-4 py-4 cursor-pointer"
                        onClick={() => {
                          toggleProfile(profileContentRef);
                          animateArrow(animateArrowRef);
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
                              className="dropdown-arrow transition-transform duration-500 absolute right-4 top-[calc(50%-2px)]"
                            ></div>
                          </div>
                          <img
                            className="rounded-full order-first"
                            src={ DefaultProfile }
                            width="42"
                            height="42"
                            alt=""
                          />
                        </div>
                      </a>
                      <div
                        ref={profileContentRef}
                        className="accordion__content py-3 px-5 overflow-hidden transition-max-height duration-500 animate-fadeOut max-h-0 bg-transparent -mt-[25px] w-full"
                      >
                        <p className="mb-1">
                          {strings.sidebar.profile.my_profile}
                        </p>
                        <a
                          className="py-1 px-2 cursor-pointer hover:bg-gray-100 focus:bg-blue flex w-full"
                          onClick={() => dispatch(employeeLogout())}
                        >
                          {strings.sidebar.profile.logout}
                        </a>
                      </div>
                    </div>
                    <hr className="mx-2" />
                  </div>
                  <div className="pt-4">
                    <Link
                      to={url("dashboard")}
                      className={classnames("sidebar-buttons group", {
                        "active-button": pathName === "/dashboard",
                      })}
                    >
                      <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                        home
                      </span>
                      <span>{strings.sidebar.home_page}</span>
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-section">
                      {strings.sidebar.teacher.title}
                    </h4>
                    <Link
                      to={url("teacher")}
                      className={classnames("sidebar-buttons group", {
                        "active-button": pathName === "/teacher",
                      })}
                    >
                      <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                        school
                      </span>
                      <span>{strings.sidebar.teacher.list}</span>
                    </Link>

                    <Link
                      to={url("teacher.create")}
                      className={classnames("sidebar-buttons group", {
                        "active-button": pathName === "/teacher/create",
                      })}
                    >
                      <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                        add_circle
                      </span>
                      <span>{strings.sidebar.teacher.add_teacher}</span>
                    </Link>

                    <Link
                      to={url("teacher.program")}
                      className={classnames("sidebar-buttons group", {
                        "active-button": pathName === "/teacher/program",
                      })}
                    >
                      <span className="material-symbols-outlined mr-3 flex-shrink-0 h-6 w-6">
                        hourglass_empty
                      </span>
                      <span>{strings.sidebar.teacher.teacher_program}</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default SidebarMobile;
