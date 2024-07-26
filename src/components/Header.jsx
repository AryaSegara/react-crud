import { Info } from "lucide-react";
import { Film } from "lucide-react";
import { Phone } from "lucide-react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-cyan-900 py-6 flex">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">Streaming App</h1>
        </div>

        <nav className="hidden sm:flex space-x-8">
          <Link
            to="/"
            className="flex items-center gap-2 hover:underline transition-colors duration-300"
          >
            <Home size={24} />
            <span className="font-bold text-white">Home</span>
          </Link>
          <Link
            to="/film"
            className="flex items-center gap-2 hover:underline transition-colors duration-300"
          >
            <Film size={24} />
            <span className="font-bold text-white">Film</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:underline transition-colors duration-300"
          >
            <Info size={24} />
            <span className="font-bold text-white">About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:underline transition-colors duration-300"
          >
            <Phone size={24} />
            <span className="font-bold text-white">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
