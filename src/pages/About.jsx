import { Video } from "lucide-react";
import { User } from "lucide-react";
import { FilmIcon } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            About StreamingApp
          </h1>
          <div className="flex items-center mb-4">
            <User size={36} className="text-blue-500" />
            <span className="ml-2 font-semibold">Who We Are</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            StreamingApp adalah platform yang menyediakan berbagai macam Film
            yang ingin Anda tonton , platfrom ini merukan sarana refresing diri.
          </p>
          <div className="flex items-center mb-4">
            <FilmIcon size={36} className="text-green-500" />
            <span className="ml-2 font-semibold">Our Mission</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Misi kami adalah untuk Membuat penonton enjoy dan mempermudah mereka
            mengakses lewat website atau situs yang kami sediakan sekarang.
          </p>
          <div className="flex items-center">
            <Video size={36} className="text-purple-500" />
            <span className="ml-2 font-semibold">Our Vision</span>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Visi kami adalah menjadi solusi terdepan dan termaju dari website
            atau situs web lainnya dan tanpa iklan gratis untuk mengakses nya.
          </p>
        </div>
      </div>
    </div>
  );
}
