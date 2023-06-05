import EditInput from './EditInput'
import { CopyIcon, DeleteIcon } from './Icons'

export default function CardUrl({ title, setTitle }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(title).catch(() => {})
  }

  return (
    <article className='border-2 p-3 rounded-lg flex flex-col gap-4 items-center sm:flex-row'>
      <div className='flex w-full grow flex-col justify-center gap-2'>
        <EditInput title={title} setTitle={setTitle} />
        <div className='flex gap-4 items-center '>
          <span className='font-bold text-'> Url generada : </span>
          <label> http::/Adasdasdasd</label>
          <button className='bg-secondary text-black px-1 py-1 rounded-lg hover:bg-opacity-80' title='Copy' onClick={handleCopy}>
            <CopyIcon />
          </button>
        </div>
      </div>
      <button className='text-white px-1 py-1 self-stretch  flex justify-center bg-delete  rounded-lg hover:bg-opacity-80 sm:self-center' title='Delete'>
        <DeleteIcon />
      </button>
    </article>
  )
}
