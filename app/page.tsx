import Image from 'next/image'; 
import Link from 'next/link';
import Carousel from './../components/Carousel'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col pt-12 p-10 pb-4 bg-colorblue text-white">
     <h1 className="text-4xl">Votre éléctricien de confiance sur Paris, petite couronne et Yvelines</h1>
     <p className="mt-4">Nous sommes à votre service pour tous travaux en électricité courant fort et courant faible. </p>
</div>
<div className="w-full">
        <Image 
          src="/images/acceuil1.webp" 
          alt="Electricien" 
          layout="responsive"
          width={1792} 
          height={1024}
          className="bg-transparent" 
        />
      </div>
      <div className="flex flex-col pt-6 pb-6 p-10 text-colorblack">
<p className=" text-sm mt-1">
Que vous soyez particulier , entreprise , assurance , syndic… 
nous mettons à votre disposition notre expérience de plus de trente ans.</p>
<div className='flex justify-center items-center'>
<Link 
          href="/contact" 
          className="mt-4 inline-block bg-colorblue hover:bg-sky-400 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Contactez-nous
        </Link>
        </div>
</div>
<div>
<Carousel/>
</div>
    </main>
  );
}
