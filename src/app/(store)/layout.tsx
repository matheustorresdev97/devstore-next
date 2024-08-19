import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[1600px] w-full min-h-screen mx-auto grid grid-rows-app gap-5 px-8 py-8'>
      <Header />
      {children}
    </div>
  )
}