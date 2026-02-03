
const Navbarr = () => {
    return (
        <>
        <div>
            <div className="bg-[#a3a9c9] flex justify-between px-[10vw] py-4 items-center text-[#ffffff]  ">
                <h1 className="text-3xl font-light tracking-[0.15em] Space Grotesk">
                    Study_Hup
                </h1>

                <div className=" items-center flex gap-8 cursor-pointer  text-[10px] tracking-[0.35em] uppercase  font-light ">
                    <p  className="hover:text-xl hover:text-[#ffff]">Home</p>
                    <p className="hover:text-xl hover:text-[#ffff]">Cours</p>
                    <p className="hover:text-xl hover:text-[#ffff]">Programe</p>
                    <p className="hover:text-xl hover:text-[#ffff]">Contact</p>
                    <p className="hover:text-xl hover:text-[#ffff]">Help</p>
                </div>

                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2vw" height="2vw" fill="rgba(255,255,255,1)"><path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z"></path></svg>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbarr;