import React from "react";
import logo from "../assets/logo.svg";
import notification from "../assets/images/icon _bell_.svg";

const Navbar = () => {
  return (
    <header class="">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between py-6"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src={logo} alt="" />
          </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <div class="relative">
            <button
              type="button"
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
              aria-expanded="false"
            >
              Home
            </button>
          </div>

          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Services
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Gallery
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Pricing
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            About
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Team
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">
            Contact
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end align-middle">
          <img src={notification} alt="" className="mx-3" />

          {/* <!-- Profile dropdown --> */}
          <div class="relative">
            <div>
              <button
                type="button"
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
