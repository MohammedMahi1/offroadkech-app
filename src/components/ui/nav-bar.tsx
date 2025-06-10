
import Button from './button'

        // inputRef: React.RefObject<null>
    // const ref = inputRef || useRef<HTMLInputElement>(null)

const Navbar = () => {
  return (
    <div className='flex w-dvw justify-between px-20 items-center py-3'>
        <span>
            Logo
        </span>
        <Button>
            containe
        </Button>
    </div>
  )
}

export default Navbar