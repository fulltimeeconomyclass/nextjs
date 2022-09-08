import Image from 'next/image'
import floor1 from '../../public/Floor1.png'

export default function Floor1() {
    return (
        <Image src={floor1} alt="floor 1 pic" placeholder="blur" />
    )
}