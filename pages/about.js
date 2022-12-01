import NavBar from "../components/NavBar";
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
            <div className="w-full h-screen flex flex-col bg-hero-overlapping-circles-donker bg-cyan-100">
                <div className="container mx-auto px-6 py-8">
                    <h3 className="text-gray-700 text-2xl font-medium">About Page</h3>
                    <span className="mt-3 text-sm text-gray-500">SICAKUR | About</span>
                </div>
            </div>
        </>
    );
}