import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components";

const DashboardLayout = () => {
  const navbarContentRef = useRef();
  const navbarRef = useRef();

  return (
    <>
      <Sidebar navbarContentRef={navbarContentRef} navbarRef={navbarRef} />

      <div
        ref={navbarContentRef}
        id="content"
        className="flex flex-1 flex-col duration-500 md:pl-[250px]"
      >
        <Navbar navbarContentRef={navbarContentRef} navbarRef={navbarRef} />

        <main className="flex-1 mt-3 md:mt-[60px] overflow-y-scroll max-h-[92vh] min-h-[92vh]">
          <div className="py-3 mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
                <div className="rounded-md bg-white p-5 max-xs:px-2 shadow-content text-[13px]">
                    <Outlet />
                </div>
              </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
