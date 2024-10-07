import Image from "next/image";
import { ContactForm } from "./_components/ContactForm";

const products = [
  {
    name: "Equipos médicos",
    image: "equipos.jpg",
  },
  {
    name: "Paneles de hospitalización",
    image: "panel_hospitalario.jpg",
  },
  {
    name: "Columnas UCI",
    image: "columna.jpg",
  },
  {
    name: "Concentradores de oxigeno",
    image: "concentrador_oxigeno.jpg",
  },
  {
    name: "Manifolds de gases",
    image: "manifold.jpg",
  },
  {
    name: "Cajas de corte",
    image: "caja_corte.jpg",
  },
  {
    name: "Alarma de gases",
    image: "alarma_gases.jpg",
  },
  {
    name: "Diseño e instalación",
    image: "diseno.jpg",
  },
  {
    name: "Mantenimiento",
    image: "mantenimiento.jpg",
  },
  {
    name: "Revestimientos asépticos hospitalarios",
    image: "revestimiento.jpg",
  },
  {
    name: "Vinil conductivo",
    image: "vinil.jpg",
  },
  {
    name: "Climatización",
    image: "climatizacion.jpg",
  },
  {
    name: "Ventilación",
    image: "ventilacion.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl mx-auto">
      <div className="w-full h-auto bg-gray-300 pt-16 overflow-hidden relative">
        <Image
          src="/images/hospital.jpg"
          className="w-full min-w-[800px] h-auto"
          height={926}
          width={1368}
          alt="Oxiservicios Banner"
        />
        <div className="absolute w-full h-full bg-black/50 top-0">
          <div className="text-center my-auto self-center absolute top-[50%] md:left-[50%]">
            <h2 className="text-4xl text-white font-light">
              Sistemas de Gases Medicinales y Equipos Médicos
            </h2>
          </div>
        </div>
      </div>
      <section id="about" className="scroll-mt-12">
        <div className="w-full py-12 md:px-24 lg:px-32 px-8 text-center">
          <h3 className="font-bold text-2xl mb-8">Quiénes somos</h3>
          <p>
            Somos una empresa ecuatoriana que cuenta con una exitosa trayectoria
            en el mercado del sector Salud ofreciendo las mejores condiciones
            técnico económicas en materia de Sistemas Centralizados de Gases
            Medicinales, Accesorios de Monitoreo de Signos Vitales, Accesorios
            de Vacío y Oxigenoterapia, Equipos y Accesorios Médicos.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-8">
            <div className="flex w-50">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/1ByPJSGSt-g?si=p2GnatHJta68Lp9E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/nwDl78LtxOY?si=SLjOBkeoRzRCdJUh"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p>
            Suministramos desde un repuesto o accesorio hasta el diseño,
            instalación y puesta en marcha de la más completa red de
            distribución de gases medicinales en Proyectos de ampliación,
            remodelación o construcción de Centros de Salud. Somos
            representantes para el mercado ecuatoriano de algunas de las
            compañías más importantes en las áreas que atendemos.
          </p>
        </div>
      </section>
      <section id="products" className="scroll-mt-12 bg-neutral-100">
        <div className="w-full py-12 md:px-24 lg:px-32 px-8 text-center">
          <h3 className="font-bold text-2xl mb-4">Equipos disponibles</h3>
          <div className="flex flex-wrap justify-center space-x-8">
            {products.map((product, index) => (
              <div key={index} className="mt-4 w-[120px]">
                <div className="w-[100px]">
                  <Image
                    src={`/images/${product.image}`}
                    className="h-[100px] w-auto mx-auto object-cover"
                    height={100}
                    width={100}
                    alt={product.name}
                  />
                </div>
                {product.name}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services1" className="scroll-mt-12">
        <div className="w-full pt-12 pb-8 md:px-24 lg:px-32 px-8">
          <h3 className="font-bold text-2xl mb-8 text-center">Servicios</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 pb-4 gap-y-8 gap-x-24 items-center">
            <div>
              <ul className="list-disc">
                <li>
                  Fabricación y montaje de redes y manifold para gases
                  medicinales.
                </li>
                <li>Instalación de redes para gases especiales.</li>
                <li>
                  Montaje y mantenimiento de tuberías y maquinaria en acero
                  inoxidable para procesamiento de alimentos.
                </li>
                <li>
                  Diseño y montaje de equipos para tratamiento de aguas
                  industriales y residuales.
                </li>
                <li>Soldadura de todo tipo de tubería.</li>
                <li>Montaje de todo tipo de unidades de refrigeración.</li>
                <li>Equipos médicos.</li>
                <li>Paneles de hospitalización.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/hospital1.jpg"
                className="w-full h-auto"
                height={254}
                width={930}
                alt="Servicios"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <section id="services2" className="scroll-mt-12">
        <div className="w-full pb-12 pt-8 md:px-24 lg:px-32 px-8 bg-neutral-300">
          <div className="grid md:grid-cols-2 grid-cols-1 pt-4 gap-y-8 gap-x-24 items-center">
            <div className="md:order-last">
              <ul className="list-disc">
                <li>Columnas UCI, cieliticas.</li>
                <li>Manifolds y central de gases.</li>
                <li>Cajas de corte.</li>
                <li>Alarmas.</li>
                <li>Diseño, instalación y mantenimiento.</li>
                <li>Tubería al vacío y acero inoxidable.</li>
                <li>Mantenimiento tanques criogénicos y CO2.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/hospital2.jpg"
                className="w-full h-auto"
                height={254}
                width={930}
                alt="Servicios"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="scroll-mt-12 bg-neutral-100">
        <div className="w-full py-12 md:px-24 lg:px-32 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-last md:order-first">
              <div className="w-full h-full min-h-[500px]">
                <iframe
                  className="h-[80%] w-full mb-4"
                  src={`https://www.google.com/maps/embed/v1/place?q=Ponce+de+León+Oe+8-103+y+Javier+Lizarazu&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
                  allowFullScreen
                ></iframe>
                <p>
                  <span className="font-bold">Dirección:</span> Ponce de León Oe
                  8-103 y Javier Lizarazu
                </p>

                <p>
                  <span className="font-bold">Teléfono:</span> +593 2 3530528
                </p>
                <p>
                  <span className="font-bold">Celular:</span> 094707509
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  info@oxiservicios.com.ec
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Contáctanos</h3>
              <p className="mb-5">
                Deja tus datos y nosotros nos comunicaremos contigo.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="scroll-mt-12">
        <div className="w-full py-12 md:px-24 lg:px-32 px-2 text-center">
          <h3 className="font-bold text-2xl mb-8">Nuestros clientes</h3>
          <div className="lg:px-24">
            <Image
              src="/images/clients.png"
              className="w-full h-auto"
              height={254}
              width={930}
              alt="Clientes Oxiservicios"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
