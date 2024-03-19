import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
function Navbar() {
  const {logout}=useLogout()
  const {user}=useAuthContext()
  const handleClick=()=>{
    logout()
  }
  return ( 
    <nav className="bg-black w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" className="text-slate-300 font-bold">
              <h6>Location<span className="text-cyan-400">Voiture</span></h6>
            </Link>
          </div>
          <div className="hidden md:block flex items-center justify-center space-x-8">
            <Link
              to="/cars"
              className="text-slate-300 hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 "
            >
              Voitures
            </Link>
            <Link
              to="/contactus"
              className="text-slate-300 hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 "
            >
              Contactez-nous
            </Link>
            <Link
              to="/about"
              className="text-slate-300 hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 "
            >
              À propos
            </Link>
            <Link
              to="/contrat"
              className="text-slate-300 hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 "
            >
              Contrat
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              
            <div className="ml-4 flex items-center md:ml-6">
              {!user ? (
                <div>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Signup
                  </Link>
                </div>)
                :
                <button onClick={handleClick} className="text-white text-2xl "><RiLogoutCircleRLine /></button>
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
