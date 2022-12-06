import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";


export default function About() {
    return (
        <>
            <Head>
                <title>SICAKUR | About</title>
                <meta name="tentang" content="Tentang Kami" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="w-screen h-screen flex flex-col">
                <div className="container">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Wita</h2>
                                    <p className="text-gray-700 text-xs">
                                        Ketua Kelompok Pengantar Intelegensi Buatan
                                    </p>
                                    <p className="text-gray-700 text-base">Hobi saya adalah membaca dan mendengarkan musik.</p>
                                    <div class="px-0 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#music</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reading</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Septian Nugraha Kartadilaga</h2>
                                    <p class="text-gray-700 text-xs">
                                        Anggota
                                    </p>
                                    <p class="text-gray-700 text-base">
                                        Saya senang bermain futsal.
                                    </p>
                                    <div class="px-0 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#soccer</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sport</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Jawaril Haq Al-Azkiya</h2>
                                    <p class="text-gray-700 text-xs">
                                        Anggota
                                    </p>
                                    <p class="text-gray-700 text-xs">
                                        Ngorok bossssssssssssssssss
                                    </p>
                                    <div class="px-0 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sleeping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}