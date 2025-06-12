import React from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "/about" },
  { name: "Admin", href: "/admin" },
];

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
        >
            <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Portfolio Framna</span>
                <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                />
            </a>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
            </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
                >
                {item.name}
                </a>
            ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
            </a>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
