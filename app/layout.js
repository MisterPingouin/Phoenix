import './globals.css'
import { Raleway } from 'next/font/google'
import Header from '../components/header';

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
      </body>
    </html>
  )
}