import './globals.css'
import { Raleway } from 'next/font/google'
import Header from '../components/header';
import Footer from '../components/footer';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Phoenix Control',
  description: 'Electricien sur paris,petite couronne et yvelines',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}