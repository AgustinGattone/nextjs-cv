import Head from 'next/head'
import { Inter } from 'next/font/google'
import Profile from './profile'
import Card from './cards'
import Jobs from './jobs'
import Languajes from './languajes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen font-mono">
        <Head>
          <title>Agustin Gattone</title>
          <meta name="description" content="Mi aplicación con React, Next y TailwindCSS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="max-w-4xl mx-auto py-10">
          <div className="w-full md:w-full bg-black p-4 border border-black rounded-lg shadow-md">
            <div>
              <Profile />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 ">
            <div className="w-full md:w-full bg-black p-4 border border-black rounded-lg shadow-md">
              <Card />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 ">
            <div className="w-full md:w-full bg-black p-4 border border-black rounded-lg shadow-md">
              <Jobs />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 ">
            <div className="w-full md:w-full bg-black p-4 border border-black rounded-lg shadow-md">
              <Languajes />
            </div>
          </div>
        </main>

        <footer className="bg-gray-900 py-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500">© 2023 Agustin Gattone, All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
