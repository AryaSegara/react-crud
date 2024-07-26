export default function Home() {
  return (
    <div
      className="px-4 lg:px-24 bg-slate-200 flex items-center"
      style={{
        backgroundImage: "url('/images/film3.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex md:flex-row justify-between items-center gap-12 py-56">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full ml-96 mt-20">
          <h2 className="text-5xl font-bold leading-snug text-white font-serif">
            <span className="text-red-700">Streaming</span>
            <span className="text-blue-700"> Best Here</span>
          </h2>
          <p className="md:w-4/5 text-black font-bold text-2xl flex item-center">
            Film terbaik di sepanjang masa saat ini dipercaya membuat
            banyak peminatnya dan terus berkembang seiring berjalannya waktu.
            Banyaknya Judul- judul film yang menarik dan yang
            terbaik menurut saya
          </p>
        </div>

        {/* right side */}
        <div>{/* <BannerCard></BannerCard> */}</div>
      </div>
    </div>
  );
}
