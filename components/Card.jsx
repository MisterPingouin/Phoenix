import Link from 'next/link';

const Card = ({ title, description, link, linkText, svgPath }) => (
  <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-16 w-16 rounded-full bg-colorblue transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
      <div className="flex items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-colorblue transition-all duration-300 group-hover:bg-sky-400">
        <img src={svgPath} alt="" className="h-8 w-8" /> 
        </span>        
        <h3 className="ml-4 text-2xl font-bold">{title}</h3>
      </div>
        <div className="space-y-6 pt-5 text-xl leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
        <div className="pt-5 text-xl font-semibold leading-7">
          <Link href={link} passHref>
            {linkText} &rarr;
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
