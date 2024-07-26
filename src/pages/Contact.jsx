
import { Book } from "lucide-react";
import { Cake } from "lucide-react";
import { User } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Contact
        </h1>

        <div className="flex items-center mb-4">
          <User size={36} className="text-blue-500" />
          <span className="ml-4 text-xl font-semibold">Nama: Arya Segara</span>
        </div>

        <div className="flex items-center mt-6 mb-4">
          <Cake size={36} className="text-green-500" />
          <span className="ml-4 text-xl font-semibold">TTL: Pekanbaru, 18 Oktober 2002</span>
        </div>

        <div className="flex items-center mt-6">
          <Book size={36} className="text-purple-500" />
          <span className="ml-4 text-xl font-semibold">Pelatihan: React</span>
        </div>

        <div className="flex items-center mt-6 mb-4">
          <User size={36} className="text-blue-500" />
          <span className="ml-4 text-xl font-semibold">Instruktur: Arya Segara</span>
        </div>
      </div>
    </div>
  );
}
