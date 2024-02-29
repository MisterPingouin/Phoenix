import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-colorblue">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
          <div className="px-5 pb-2 font-semibold">
            <p className="text-base text-white hover:text-gray-200">Deux adresses pour être au plus proche :</p>
          </div>
          <div className="px-5">
            <p className="text-base text-white hover:text-gray-200">46 Rue de la Belle Épine 78650 Beynes</p>
          </div>
          <div className="px-5">
            <p className="text-base text-white hover:text-gray-200">14 Rue Jouffroy D’Abbans 75017 Paris</p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:mb-8 flex flex-col justify-center items-center text-white text-sm space-x-6 md:order-3">
          <p>Du lundi au vendredi : 09.00 – 18.00</p>
          <p>Samedi : sur rendez-vous</p>
        </div>
        <div className="mt-6 md:order-1 flex items-center justify-center text-white space-x-4 ">
        <Image 
          src="/svg/phone.svg" 
          alt="Electricien" 
          width={10} 
          height={10}
          className="bg-transparent h-6 w-6" 
        />
          <p>07.65.16.69.21</p>
        </div>
      </div>
    </footer>
  );
}
