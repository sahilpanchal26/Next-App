import Navbar from '@/Components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/footer/Footer'
import { ThemeProvider } from '@/Components/themeContext/ThemeContext'
import AuthProvider from '@/Components/authProvider/authProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sahil Panchal',
  description: 'This is the Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <AuthProvider>
        <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
