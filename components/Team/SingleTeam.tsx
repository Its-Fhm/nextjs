import { Team } from "./team";
import Image from "next/image";

const SingleTeam = ({ team }: { team: Team }) => {
  const { name, image, content } = team;

  return (
    <div className="w-full">
      <div
        className="wow rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        
        <div className="relative h-[300px] w-full max-w-[260px] mx-auto">
            <Image src={image} alt={name} fill loading='lazy' sizes="(max-width: 260px) 100vw, (max-width: 260px) 50vw, 33vw" />
          </div>
        <div className="w-full text-center my-2">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
          </div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white text-center">
          "{content}"
        </p>
      </div>
    </div>
  );
};

export default SingleTeam;
