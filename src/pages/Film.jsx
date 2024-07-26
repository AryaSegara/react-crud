import { CheckCircle } from "lucide-react";
import { Edit } from "lucide-react";
import { Info } from "lucide-react";
import { Trash2 } from "lucide-react";
import { XCircle } from "lucide-react";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import Like from "../components/Like";

const initialFilm = [
  {
    id: 1,
    name: "Spiderman",
    image: "/images/spider-man.jpg",
    durasi: 120,
    tahunRilis: 2022,
    category: "Action",
    sinopsi: `Film Spider-Man menceritakan kisah heroik Peter Parker yang memberantas kejahatan dikota New York.`,
  },
  {
    id: 2,
    name: "Frozen",
    image: "/images/frozen.jpg",
    durasi: 90,
    tahunRilis: 2013,
    category: "Animation",
    sinopsi:`Film yang mengangkat kekuatan sihir berupa es dan salju milik penerus tahta Kerajaan Arandelle.`
  },
  {
    id: 3,
    name: "Titanic",
    image: "/images/titanic.jpg",
    durasi: 100,
    tahunRilis: 1997,
    category: "Drama",
    sinopsi:`Film yang mengangkat kekuatan sihir berupa es dan salju milik penerus tahta Kerajaan Arandelle.`
  },
];

const saveTask = localStorage.getItem("myFilm");

export default function Film() {
  const [film, setFilm] = useState(
    saveTask ? JSON.parse(saveTask) : initialFilm
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editedFilm, setEditedFilm] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [newFilm, setNewFilm] = useState({
    id: "4",
    name: "",
    image: "",
    durasi: 0,
    tahunRilis:0,
    category: "Action",
    sinopsi: "",
  });

  function handleEdit(e) {
    e.preventDefault();
    const temp = film.map((vidio) =>
      vidio.id === newFilm.id ? newFilm : vidio
    );
    setFilm(temp);
    setNewFilm({ Id: "", name: "", image: "", durasi: "", tahunRilis: "", category: "", sinopsi: "" });
    setEditedFilm(false);
  }

  function handleChange(event) {
    setNewFilm({ ...newFilm, [event.target.name]: event.target.value });
  }

  function handleShowEdit(film) {
    setNewFilm(film);
    setEditedFilm(!editedFilm);
  }

  function handleDelete(filmToDelete) {
    const confirmation = window.confirm(
      `Apakah Anda yakin ingin menghapus siswa ${filmToDelete.name}?`
    );
    if (confirmation) {
      setFilm(film.filter((item) => item.id !== filmToDelete.id));
    }
  }

  const handleShowInfo = (film) =>{
    alert(`Judul Film : ${film.name}\nGenre Film : ${film.category}\nDurasi Film : ${film.durasi}\nSinopsi Film : ${film.sinopsi}`)
  }

  const filterData = film
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(search) &&
        item.category.includes(category)
      );
    });

  useEffect(() => {
    localStorage.setItem("myFilm", JSON.stringify(film));
  }, [film]);

  return (
    <>
      <header className="flex flex-wrap justify-between items-center bg-gradient-to-r from-gray-700 to-gray-300 gap-8">
        <div className="flex py-4">
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2 transform transition-transform duration-300 hover:scale-105"
          >
            <Plus size={18} />
            <span>Tambah</span>
          </button>
        </div>

        <label className="flex items-center gap-1 grow">
          <h1 className="font-bold">Cari:</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
          />
        </label>

        <section>
          <label className="flex items-center gap-1">
            <h1 className="font-bold">Genre:</h1>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-9 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
            >
              <option value="">Semua</option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Drama">Drama</option>
            </select>
          </label>
        </section>

        <section>
          <label className="flex items-center gap-1">
            <h1 className="font-bold">Urutkan:</h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
            >
              <option value="id">normal</option>
              <option value="name">Nama</option>
              <option value="durasi">Durasi</option>
              <option value="tahunRilis">Tahun Rilis</option>
            </select>
          </label>
        </section>

        <section>
          <label className="flex items-center gap-1">
            <h1 className="font-bold">Urutkan:</h1>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-9 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </section>
      </header>

      <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-300 flex items-center justify-center">
        <div className="flex justify-between bg-white shadow-xl rounded-2xl p-6 gap-6 transform transition-all duration-300 ease-in-out">
          {editedFilm && (
            <form
              className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md"
              onSubmit={handleEdit}
            >
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700">
                  Input Nama Film
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  value={newFilm.name}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div className="mb-2">
                <label htmlFor="image" className="block text-gray-700">
                  Input Url Gambar Film
                </label>
                <input
                  type="text"
                  name="image"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  value={newFilm.image}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="durasi" className="block text-gray-700">
                  Input Durasi Film
                </label>
                <input
                  type="number"
                  name="durasi"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  value={newFilm.durasi}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="tahunRilis" className="block text-gray-700">
                  Input Tahun Rilis Film
                </label>
                <input
                  type="number"
                  name="tahunRilis"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  value={newFilm.tahunRilis}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="sinopsi" className="block text-gray-700">
                  Input Sinopsis Film
                </label>
                <input
                  type="text"
                  name="sinopsi"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  value={newFilm.sinopsi}
                  onChange={handleChange}
                />
              </div>

              <select
                onChange={(e) => {
                  setNewFilm({
                    ...newFilm,
                    category: e.target.value,
                  });
                }}
              >
                <option value="Action">Action</option>
                <option value="Animation">Animasi</option>
                <option value="Drama">Drama</option>
              </select>

              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="mx-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                >
                  <CheckCircle size={18} />
                  <span>Submit</span>
                </button>
                <button
                  type="button"
                  className="mx-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setEditedFilm(false)}
                >
                  <XCircle size={18} />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          )}

          {showAdd && (
            <form
              className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md"
              onSubmit={(e) => {
                e.preventDefault();
                setFilm([
                  ...film,
                  {
                    ...newFilm,
                  },
                ]);
                setShowAdd(undefined);
                setNewFilm({
                  id: newFilm.id + 1,
                  name: "",
                  image: "",
                  price: 0,
                  category: "Action",
                });
              }}
            >
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700">
                  Input Nama Film
                </label>
                <input
                  type="text"
                  value={newFilm.name}
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, name: e.target.value })
                  }
                  required
                  autoFocus
                />
              </div>
              <div className="mb-2">
                <label htmlFor="nama" className="block text-gray-700">
                  Input Url Gambar Film
                </label>
                <input
                  type="text"
                  value={newFilm.image}
                  name="nama"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, image: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="nama" className="block text-gray-700">
                  Input Durasi Film
                </label>
                <input
                  type="numer"
                  value={newFilm.durasi}
                  name="nama"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, durasi: e.target.value })
                  }
                  required
                />
              </div>
              

              <div className="mb-2">
                <label htmlFor="nama" className="block text-gray-700">
                  Input Tahun Rilis
                </label>
                <input
                  type="numer"
                  value={newFilm.tahunRilis}
                  name="nama"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, tahunRilis: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="nama" className="block text-gray-700">
                  Input Sinopsi Film
                </label>
                <input
                  type="text"
                  value={newFilm.sinopsi}
                  name="nama"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  onChange={(e) =>
                    setNewFilm({ ...newFilm, sinopsi: e.target.value })
                  }
                  required
                />
              </div>

              <select
                onChange={(e) => {
                  setNewFilm({ ...newFilm, category: e.target.value });
                }}
              >
                <option value="Action">Action</option>
                <option value="Animation">Animasi</option>
                <option value="Drama">drama</option>
              </select>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="mx-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                >
                  <CheckCircle size={18} />
                  <span>Submit</span>
                </button>
                <button
                  type="button"
                  className="mx-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setShowAdd(false)}
                >
                  <XCircle size={18} />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          )}

          {filterData.map((stud) => (
            <div
              key={stud.id}
              className="bg-gray-400 rounded-lg p-4 mb-4 shadow-lg hover:shadow-xl transform transition-shadow duration-300"
            >
              <div className="flex space-x-4 items-center justify-between text-2xl font-semibold text-gray-700">
                {stud.name}
                <Like/>
              </div>
              
              <div className="text-gray-600">
                <img
                  className="ml-2 h-64 w-72 rounded-lg"
                  src={stud.image}
                  alt=""
                  // width={200}
                  // height={200}
                />
              </div>

              <span className="text-gray-600 font-bold">Tahun {stud.tahunRilis}</span>

              <div className="mt-4 flex space-x-2">
                <button
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => handleShowEdit(stud)}
                >
                  <Edit size={18} className="mr-2" />
                  Edit
                </button>

                <button className="flex items-center px-4 py-2 bg-slate-300 rounded-lg hover:bg-cyan-300 transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleShowInfo(stud)}>
                  <Info size={18} />
                  Informasi
                </button>

                <button
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => handleDelete(stud)}
                >
                  <Trash2 size={18} className="mr-2" />
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
