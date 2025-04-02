import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worlwide shipping
          </p>
          <Link to="#" className="px-8 py-4 bg-black border border-black rounded-lg hover:text-sm transition-all">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
