import Image from 'next/image'
import floor2 from '../../public/Floor2.png'

export default function Floor2() {
    return (
        <Image src={floor2} alt="floor 2 pic" placeholder="blur" />
    )
}