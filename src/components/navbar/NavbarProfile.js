import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { DefaultProfile } from "../../assets/img";
import { useLocalization } from "../../hooks/useLocalization";
import { employeeLogout } from "../../store/EmployeeSlice";

const NavbarProfile = forwardRef(() => {
    
  const dispatch = useDispatch();
  const strings = useLocalization();

  return (
    <>
      <div className="flex px-4">
        <img
          className="rounded-lg"
          src={ DefaultProfile }
          width="60"
          height="60"
          alt=""
        />
        <div className="ml-2">
          <p className="my-1">Hamza Şişman</p>
          <p className="text-[12px] text-[#6c757d] mb-1">hamza.ssmnn@gmail.com</p>
        </div>
      </div>

      <hr className="mb-3 mt-4 px-4" />
      <button
        className="block px-5 py-[3px] hover:bg-[#F8F9FA] focus:bg-[#F8F9FA] w-full text-start"
        tabIndex="-1"
      >
        {strings.sidebar.profile.my_profile}
      </button>

      <button
        onClick={() => {
          dispatch(employeeLogout());
        }}
        className="block px-5 py-[3px] cursor-pointer hover:bg-[#F8F9FA] focus:bg-[#F8F9FA] w-full text-start"
        tabIndex="-1"
      >
        {strings.sidebar.profile.logout}
      </button>
    </>
  );
});

export default NavbarProfile;
