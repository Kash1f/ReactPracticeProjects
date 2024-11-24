import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  return (
<>
  {/* Defines the navbar, makes it sticky, adds padding, blur effect, and border */}
  <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    {/* Centers navbar content and applies responsive spacing */}
    <div className="container px-4 mx-auto relative lg:text-sm">
      {/* Holds and aligns navbar content in a row */}
      <div className="flex items-center justify-between">
        {/* to style the logo */}
        <div className="flex items-center flex-shrink-0"> 
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight">VirtualR</span>
        </div>
        {/* Navigation links, hidden by default and shown on larger screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-12">
            {/* Get the nav items from the constants folder and loop through the items using map */}
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Add an empty div to maintain spacing */}
        <div className="flex-shrink-0 w-[100px]" />
        {/* flex should be applied only on the larger screens */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 rounded-md border">Sign In</a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Create Account</a>
            </div>



      </div>
    </div>
  </nav>
</>
  );
};

export default Navbar;

