import backImage from '@/images/main-back.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='w-full grid place-items-center '>
      <article className='w-3/4  h-80  relative grid place-items-center'>
        <div className='z-10 relative bg-white/5  px-10 py-6 rounded-md'>
          <h1> Acortador de Url </h1>
        </div>
        <picture className='absolute inset-0 '>
          <Image src={backImage} alt='back-ground' className='h-full w-full object-cover' priority />
        </picture>
      </article>
    </div>
  )
}
