import React from 'react'
import CarouselView from '../components/CarouselView/CarouselView'
import Image from "next/image"
import img1 from "../../public/assets/Ellipse 3.png"

const index = () => {
    return (
        <div>
            <div> {/* section 1*/}
            <Image src={img1} alt="" />
            </div>
            <h1>Hola</h1>
            <p>letra</p>
            <a href="">letra</a>
            <CarouselView/>
        </div>
    )
}

export default index
