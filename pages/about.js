import Head from 'next/head';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>SICAKUR | About</title>
        <meta name="about" content="Tentang Kami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full h-screen flex flex-col bg-hero-skulls-blue-dark-10 bg-cyan-100">
        <div className="max-w-7xl mx-auto w-full flex flex-col my-6 gap-9 pt-5">
          <div className='text-2xl font-bold text-center'>
            <p className='underline'>Pengukuran Baju Dewasa Indonesia (frontnya yang gede)</p>
          </div>
          <div className='text-3xl font-kleeOne text-justify'>
            <p>Ukuran baju merupakan rujukan utama pengguna saat memilih baju yang pas bagi tubuh nya. Ukuran baju yang sangat umum digunakan dan sangat sering di temui di pasaran adalah kelompok ukuran S,M,L,XL dan XXL .</p>
          </div>
          <div className='text-4xl font-bold'>
            <p>Team:</p>
          </div>
          <div className='grid grid-cols-3 gap-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="wita_image" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Wita
                  <div className="badge badge-primary">20.14.1.0002</div>
                </h2>
                <p>Ngorok bos</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">#sleeping</div>
                  <div className="badge badge-outline">#not_productive</div>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="septian_image" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="jawaril_image" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
