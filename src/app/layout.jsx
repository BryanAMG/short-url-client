import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <header className='flex justify-between items-center bg-black text-gray-50'>
          <span>ShortUrl</span>
          <Navbar />
        </header>
        <main className='flex grow items-center justify-center '>
          {children}
        </main>
      </body>
    </html>
  )
}
