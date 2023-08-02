import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'
import './styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Altos del Rosario',
  description: 'Nuevas parcelas para que construyas tu sueño inmobiliario.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
