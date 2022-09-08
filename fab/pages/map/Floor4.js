import Image from 'next/image'
import floor4 from '../../public/Floor4.png'

export default function Floor4() {
    return (
        <Image src={floor4} alt="floor 4 pic" placeholder="blur" />
    )
}