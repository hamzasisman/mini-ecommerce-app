export const toggleInfo = (ref) => {
    ref.current.classList.toggle("hidden");
  };
  
  export const toggleProfile = (ref) => {
    ref.current.classList.toggle("max-h-0");
    ref.current.classList.toggle("animate-fadeOut");
    ref.current.classList.toggle("animate-fadeIn");
    ref.current.classList.toggle("max-h-screen");
  };
  
  export const closeInfo = (ref) => {
    ref.current.classList?.add("hidden");
  };
  
  export const toggleSidebar = (
    sidebarRef,
    sidebarContentRef,
    navbarContentRef,
    scrollBarRef,
    navbarRef
  ) => {
    sidebarRef.current.classList.toggle("md:-translate-x-[180px]");
    sidebarRef.current.classList.toggle("-translate-x-[250px]");
    sidebarContentRef.current.classList.toggle("pl-[188px]");
    navbarContentRef.current.classList.toggle("md:pl-[250px]");
    navbarContentRef.current.classList.toggle("md:pl-[70px]");
    scrollBarRef.current.classList.toggle("hover:overflow-y-scroll");
    navbarRef.current.classList.toggle("md:w-[calc(100%-250px)]");
    navbarRef.current.classList.toggle("md:w-[calc(100%-70px)]");
  
    document.querySelectorAll(".toggled").forEach((element) => {
      // element.previousSibling.classList.toggle("mr-3");
      if (element.parentNode.firstElementChild.tagName === "SPAN") {
        element.parentNode.firstElementChild.classList.toggle("mr-3");
        element.parentNode.firstElementChild.classList.toggle("mr-1");
      }
      element.classList.toggle("hidden");
    });
  
    document.querySelectorAll(".header").forEach((element) => {
      element.firstElementChild.classList.toggle("hidden");
      element.lastElementChild.classList.toggle("hidden");
    });
  };
  
  export const toggleSidebarMobile = (
    sidebarRef,
    mobileOverlayRef,
    mobileButtonRef
  ) => {
    sidebarRef.current.classList.toggle("md:-translate-x-[180px]");
    sidebarRef.current.classList.toggle("-translate-x-[250px]");
    mobileOverlayRef.current.classList.toggle("w-0");
    mobileOverlayRef.current.classList.toggle("animate-fadeIn");
    mobileOverlayRef.current.classList.toggle("animate-fadeOut");
    mobileButtonRef.current.classList.toggle("ml-20");
  };
  
  export const closeSidebarMobile = (
    sidebarRef,
    mobileOverlayRef,
    mobileButtonRef
  ) => {
    sidebarRef?.current.classList.add("md:-translate-x-[180px]");
    sidebarRef?.current.classList.add("-translate-x-[250px]");
    mobileOverlayRef?.current.classList.add("w-0");
    mobileOverlayRef?.current.classList.remove("animate-fadeIn");
    mobileOverlayRef?.current.classList.add("animate-fadeOut");
    mobileButtonRef?.current.classList.add("ml-20");
  };

  export const animateArrow = (ref) => {
    ref.current.classList.toggle("-rotate-180");
  };

  export const toggleDropdown = (dropdownRef, dropdownArrowRef) => {
    dropdownRef.current.classList.toggle("scale-y-0")
    dropdownArrowRef.current.classList.toggle("rotate-180")
  }
  
  export const closeDropdown = (dropdownRef, dropdownArrowRef) => {
    dropdownRef.current.classList.add("scale-y-0")
    dropdownArrowRef.current.classList.remove("rotate-180")
  }