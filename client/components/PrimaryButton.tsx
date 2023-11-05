
type PrimaryButtonProps = {
  content: string
}

const PrimaryButton = ({content}: PrimaryButtonProps) => {
  return (
    <div className='h-12 p-1 bg-[var(--twitter-primary)] flex justify-center items-center rounded-3xl w-3/4 font-medium'>
      {content}
    </div>
  )
}

export default PrimaryButton
