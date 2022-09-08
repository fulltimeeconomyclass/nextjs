import Image from 'next/image'
import floor3 from '../../public/Floor3.png'

export default function Floor3() {
    return (
        <Image src={floor3} alt="floor 3 pic" placeholder="blur" />
    )
}