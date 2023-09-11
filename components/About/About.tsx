import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const listData = [
  "Quality",
  "Tailwind",
  "Use for a lifetime",
];


const About = () => {

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[1000px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/4.jpeg"
                  alt="about-image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Crafted for fun and educational purposes"
                paragraph="Lorem ipsum or something lim it and more but less. Lorem ipsum or something lim it and more but less"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  {listData.map((item, index) => (
                    <div
                      key={index}
                      className="w-fullm:w-1/3 lg:w-full xl:w-1/3"
                    >
                      <div className="flex items-center mb-5 text-center animate-pulse ">
                        <div className="mr-4 flex h-[100px] w-[100px] items-center rounded-full bg-purple-500 mb">
                        {/* {item} */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


