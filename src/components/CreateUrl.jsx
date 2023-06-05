
export default function CreateUrl() {
  return (
    <form action='' className='flex flex-col gap-4 my-4 sm:flex-row'>
      <input type='text' placeholder='Enter your UrL' className='rounded-full text-black outline-none focus:outline-primary grow px-3 py-2' />
      <button className='bg-primary px-4 py-2 text-white rounded-xl hover:bg-opacity-95'> Create short url</button>
    </form>
  )
}
