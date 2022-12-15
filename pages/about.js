import Head from 'next/head';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>SICAKUR | About</title>
        <meta name="about" content="Tentang Kami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full h-screen flex flex-col bg-hero-topography-25 bg-cyan-50">
        <div className="max-w-7xl mx-auto w-full flex flex-col my-6 gap-9 pt-5">
          <div className='text-4xl font-bold text-center'>
            <p className='underline'>Pengukuran Baju Dewasa Indonesia </p>
          </div>
          <div className='card bg-base-100 shadow-xl max-w-screen-xl h-full gap-9 p-5'>
            <div className='card-title underline font-bold'>
              <p>Tentang</p>
            </div>
            <section className='text-2xl font-Dosis text-justify'>
              <p>Ukuran baju merupakan rujukan utama pengguna saat memilih baju yang pas bagi tubuh nya. Ukuran baju yang sangat umum digunakan dan sangat sering di temui di pasaran adalah kelompok ukuran S,M,L,XL dan XXL .</p>
            </section>


          </div>
          <div className='text-4xl font-bold'>
            <p>Team:</p>
          </div>
          <div className='grid grid-cols-3 gap-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><Image src={"/images/1.jpg"} width={500} height={500} alt="wita_image" /></figure>
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Wita Nurjanah
                  <div className="badge badge-warning">20.14.1.0059</div>
                </h2>
                <p className='text-s'>Ketua Kelompok</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><Image src={"/images/3.jpg"} width={500} height={500} alt="septian_image" /></figure>
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Septian Nugraha Kartadilaga
                  <div className="badge badge-warning">20.14.1.0073</div>
                </h2>
                <p className='text-s'>Anggota</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><Image src={"/images/2.jpg"} width={500} height={500} alt="jawaril_image"/></figure>
              <div className="card-body">
                <h2 className="card-title font-bold">
                  Jawaril Haq Al-Azkiya
                  <div className="badge badge-warning">20.14.1.0025</div>
                </h2>
                <p className='text-s'>Anggota</p>
                <div className="card-actions justify-end">
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
