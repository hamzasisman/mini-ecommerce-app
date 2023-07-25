import { useRef } from "react";
import { Navbar, Sidebar } from "../../components";
import { Error404 } from "../../assets/svg";
import { useLocalization } from "../../hooks/useLocalization";

const ErrorLayout = () => {
    const navbarContentRef = useRef();
    const navbarRef = useRef();

    const strings = useLocalization();
  
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
                    <div className="w-full h-[500px] md:h-[650px] flex flex-col items-center justify-center text-center pb-[80px]">
                        <img
                            className="inline-block"
                            src={Error404}
                            alt=""
                            width="256"
                            height="256"
                        />

                        <p className="font-bold text-[16px] mt-7">{strings.errors.error404_title}</p>
                        <p className="mt-5 text-[14px]">{strings.errors.error404_content}</p>
                    </div>
                  </div>
                </div>
            </div>
          </main>
        </div>
      </>
    );
}

export default ErrorLayout