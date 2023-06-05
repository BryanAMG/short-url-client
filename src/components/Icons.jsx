
export const OpenEyeIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    ><path stroke='none' d='M0 0h24v24H0z' /><path d='M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0' /><path d='M11.143 17.961C7.922 17.666 5.207 15.68 3 12c2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6-.222.37-.449.722-.68 1.057M15 19l2 2 4-4' />
    </svg>
  )
}
export const CloseEyeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M10.585 10.587a2 2 0 0 0 2.829 2.828' />
    <path d='M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87' />
    <path d='M3 3l18 18' />
  </svg>
)

export const DeleteIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icon-tabler-trash-filled'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path
      fill='currentColor'
      stroke='none'
      d='M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6h16zM14 2a2 2 0 0 1 2 2 1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2h4z'
    />
  </svg>
)

export const CopyIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icon-tabler-clipboard-copy'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3m9-9V7a2 2 0 0 0-2-2h-2M13 17v-1a1 1 0 0 1 1-1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1-1 1h-1m-3 0h-1a1 1 0 0 1-1-1v-1' />
    <path d='M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z' />
  </svg>
)
