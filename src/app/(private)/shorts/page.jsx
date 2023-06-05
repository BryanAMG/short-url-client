import CreateUrl from '@/components/CreateUrl'
import UrlList from '@/components/UrlList'

export default function ShortsPage() {
  return (
    <section className='px-2 w-full'>
      <h1 className='text-center text-3xl text-primary  mt-4'>Lista de urls</h1>
      <CreateUrl />
      <UrlList />
    </section>
  )
}
