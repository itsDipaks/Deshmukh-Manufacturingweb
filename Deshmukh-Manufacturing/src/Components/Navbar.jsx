import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import { MdCall } from "react-icons/md";

const navigation = [
  {name: "Home", href: "/", current: true},
  {name: "About", href: "/about", current: false},
  {name: "Services", href: "/services", current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black  xs:w-full sticky top-0 z-10 " >
      {({open}) => (
        <>
          <div className="mx-auto w-full xs:w-full px-2 sm:px-6 lg:px-8 border-b-2">
            <div className="relative flex h-16 w-full items-center xl:justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

             <Link to="/"> <div className="flex flex-shrink-1 items-end">

                {/* mobile view */}
                <img
                  className="block ml-52 h-8 w-auto lg:hidden "
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                {/* full view logo */}
                <img
                  className="hidden h-8 w-auto lg:block border-4"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              </Link>
              <div className="flex w-auto items-center justify-end sm:items-stretch ">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex w-8xl justify-end gap-4  ">
                    {navigation.map((item) => (
                      <Link to={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-8 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* <div className=" inset-y-0 right-0 xs:ml-28 items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <p className="text-white flex  items-center"> <MdCall className="m-4"/> <span> 86004054456</span></p>
                </div> */}
              </div>




            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
               <Link to={item.href}>  <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button></Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
