import Head from 'next/head';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import InferenceService from '../services/InferenceService';

export default function Home() {
  const router = useRouter();
  const refresh = () => {
    router.reload();
  }

  const [tinggiBadan, setTinggiBadan] = useState("");
  const [ukuranBaju, setUkuranBaju] = useState("");
  const [ukuranDada, setUkuranDada] = useState("");
  const [ukuranPinggang, setUkuranPinggang] = useState("");
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const getGender = event.target.value;
    setSelected(getGender)
  }

  let calc_size = (event) => {
    event.preventDefault();

    if (selected === "men") {
      var inference = InferenceService.manInferenceCalculator(tinggiBadan, ukuranDada);
      var size = InferenceService.manSizeCalculator(inference);
      setUkuranBaju(size);
    } else {
      var inference = InferenceService.womanInferenceCalculator(ukuranDada, ukuranPinggang);
      var size = InferenceService.womanSizeCalculator(inference);
      setUkuranBaju(size);
    }
  }

  // let calc_bmi = (event) => {
  //   event.preventDefault();

  //   if (tinggiBadan === 0 || beratBadan === 0) {
  //     alert("Invalid Input");
  //   } else {
  //     let bmi = (beratBadan / (tinggiBadan * tinggiBadan) * 10000);
  //     setBmi(bmi.toFixed(2));
  //     if (bmi < 18.5) {
  //       setUkuranBaju("S");
  //     }
  //     else if (bmi >= 18.5 && bmi <= 24.9) {
  //       setUkuranBaju("M");
  //     }
  //     else if (bmi >= 25 && bmi <= 29.9) {
  //       setUkuranBaju("L");
  //     }
  //     else if (bmi >= 30 && bmi <= 39.9) {
  //       setUkuranBaju("XL");
  //     }
  //     else if (bmi >= 39.9 && bmi <= 49.9) {
  //       setUkuranBaju("XXL");
  //     }
  //     else if (bmi >= 50) {
  //       setUkuranBaju("XXXL");
  //     }
  //   }
  // }

  return (
    <>
      <Head>
        <title>SICAKUR | Home</title>
        <meta name="home" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full h-screen flex flex-col bg-hero-overlapping-circles-donker bg-cyan-100">
        <div className="max-w-7xl mx-auto w-full flex flex-col my-6 gap-9 pt-5">
          <div className='text-2xl font-bold text-center'>
            <p className='underline'>Sistem Pakar Pengukuran Baju Dewasa</p>
            </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-7">
            <form onSubmit={calc_size}>
              <div className="card card-compact bg-base-100 border rounded-xl shadow">
                <div className="card-header border-b bg-gray-100 flex justify-between px-4 py-3">
                  <div className="flex items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="192" height="192" fill="#000000" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <rect x="48" y="48" width="64" height="64" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                      <rect x="144" y="48" width="64" height="64" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                      <rect x="48" y="144" width="64" height="64" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                      <rect x="144" y="144" width="64" height="64" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                    </svg>
                    <span className="ml-2">
                      Form Pengukuran Baju
                    </span>
                  </div>
                </div>
                <div className="card-body min-h-full shadow-sm hover:shadow-xl ease-in-out transition-shadow">
                  <div className="rounded-md border bg-white p-5 my-3 border-dashed">
                    <label className='label'>Pilih Jenis Kelamin:</label>
                    <select className="select select-bordered w-full max-w-full" onChange={(e) => (handleChange(e))} autoFocus id='null'>
                      <option value="null">-Pilih-</option>
                      <option value="men">Laki-Laki</option>
                      <option value="woman">Perempuan</option>
                    </select>
                    {
                      selected === "null" && (
                        <label className='label text-red-600 text-s bold'>Pilih dulu, blok.</label>
                      )
                    }
                    {
                      selected === "men" && (
                        <div>
                          <label className='label'>Tinggi Badan</label>
                          <input type="number"
                            className="input input-bordered w-full max-w-full"
                            placeholder="Tinggi Badan dalam CM"
                            value={tinggiBadan}
                            onChange={(e) => (setTinggiBadan(e.target.value))} />
                          <label className='label'>Ukuran Dada</label>
                          <input type="number"
                            className='input input-bordered w-full max-w-full'
                            placeholder="Ukuran Dada dalam CM"
                            value={ukuranDada}
                            onChange={(e) => (setUkuranDada(e.target.value))} />
                          <div className="btn-group pt-5">
                            <button className="btn btn-active">Submit</button>
                            <button className="btn" onClick={refresh}>Refresh</button>
                          </div>
                          <div className='gap-4 pt-5'>
                            <p className="text-center text-gray-500 text-xl text-bold"> Ukuran Baju Anda Adalah </p>
                            <p className="text-center text-gray-500 text-xl text-bold" name="baju_size"> {ukuranBaju} </p>
                          </div>
                        </div>
                      )}
                    {
                      selected === "woman" && (
                        <div>
                          <label className='label'>Ukuran Dada:</label>
                          <input type="number"
                            className="input input-bordered w-full max-w-full"
                            placeholder="Ukuran Dada dalam CM"
                            value={ukuranDada}
                            onChange={(e) => (setUkuranDada(e.target.value))} />
                          <label className='label'>Ukuran Pinggang</label>
                          <input type="number"
                            className='input input-bordered w-full max-w-full'
                            placeholder="Ukuran Pinggang dalam CM"
                            value={ukuranPinggang}
                            onChange={(e) => (setUkuranPinggang(e.target.value))} />
                          <div className="btn-group pt-5">
                            <button className="btn btn-active">Submit</button>
                            <button className="btn" onClick={refresh}>Refresh</button>
                          </div>
                          <div className='gap-4 pt-5'>
                            <p className="text-center text-gray-500 text-xl text-bold"> Ukuran Baju Anda Adalah </p>
                            <p className="text-center text-gray-500 text-xl text-bold" name="baju_size"> {ukuranBaju} </p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
