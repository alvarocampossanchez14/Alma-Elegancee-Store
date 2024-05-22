import React from "react";
import BannerIMG from "../assets/image-banner.webp";

const About =  () => {

    return (
        <div>
            <section className="container mx-auto px-4 mt-20">
                <h1 className="text-4xl font-bold uppercase text-center mb-10">sobre nosotros</h1>
                   <div className="flex flex-col justify-center items-center">
                        <img src={BannerIMG} alt="Banner IMG" className="w-4/6 h-100 rounded-md saturate-0" />

                        <div className="text_about my-10 mx-10 xl:mx-60">
                            <div className="flex flex-col gap-7 my-7 font-light text-center">
                                <p className="">Somos Olga, Laia, Marta y Álvaro, un equipo apasionado por la moda y comprometido con ofrecerte lo mejor en ropa y accesorios. Nuestra misión es proporcionarte prendas de alta calidad que te hagan sentir cómodo, seguro y la moda en cualquier ocasión. </p>
                                <p>Cada uno de nosotros aporta su propia perspectiva y estilo, lo que nos permite curar una colección diversa y contemporánea que se adapta a todos los gustos y necesidades. Desde las últimas tendencias hasta los clásicos imprescindibles, estamos aquí para ayudarte a encontrar exactamente lo que buscas.</p>
                                <p>Nuestra tienda no solo se enfoca en la calidad de los productos, sino también en brindar una experiencia de compra excepcional. Valoramos a nuestros clientes y nos esforzamos por ofrecer un servicio personalizado, atendiendo tus inquietudes y necesidades con prontitud y dedicación.</p>
                            </div>
                        </div>

                   </div>
            </section>
        </div>
    )
}


export default About;