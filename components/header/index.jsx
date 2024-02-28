'use client'
import Image from 'next/image'; 
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={`bg-colorblue ${styles.main}`}>
        <header className="flex items-center justify-between md:justify-center h-16 px-4 md:space-x-10 pt-[20px]"> 
          <div className="flex items-center justify-center md:flex-1">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="bg-transparent" />
          </div>
          <nav className="hidden md:flex space-x-4 flex-1 justify-center">
            <Link href="/" className="text-black hover:text-blue-500">Accueil</Link>
            <Link href="/services" className="text-black hover:text-blue-500">Services</Link>
            <Link href="/about" className="text-black hover:text-blue-500">À propos</Link>
            <Link href="/contact" className="text-black hover:text-blue-500">Contact</Link>
          </nav>
          {/* Burger visible en mobile uniquement */}
          <div className={`${styles.header} md:hidden flex-1 justify-end`}>
          <div onClick={() => setIsActive(!isActive)} className={`${styles.button} ${isActive ? styles.buttonActive : ''} md:hidden flex-1 justify-end`}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </div>
    </>
  );
}
