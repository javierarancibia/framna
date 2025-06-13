import React from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Admin", href: "/admin" },
];

const Navbar = () => {
  return (
    <header className="flex justify-center">
        <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
        >
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                { navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-sm/6 font-light text-white hover:text-purple-500 transition-colors duration-200"
                    >
                    {item.name}
                    </a>
                ))}
            </div>
            
        </nav>
    </header>
  );
};

export default Navbar;
