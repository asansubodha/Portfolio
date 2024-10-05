import { ButtonPrimary, ButtonOutline } from "./Button";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] 
                    lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            Exploring the Future of Tech with Every Project.
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className=" hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto 
                    bg-gradient-to-t from-gray-400 via-25% via-sky-40
                    to-65% rounded-[40px] overflow-hidden"
          >
            <img
              src="/src/assets/hero-banner.PNG"
              width={656}
              height={800}
              alt="Asan Subodha"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
