import Image from 'next/image'
import myimg from '../public/pnf.jpg'

export default function PageNotFound() {

    return (
      <>
        <h1>Page Not Found</h1>
        <Image
            src={ myimg }
            alt="Picture of the author"
            width={500}
            height={500}
        />
      </>
    )
  }

  