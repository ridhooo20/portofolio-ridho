import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { Link, Element } from "react-scroll";
import cvRidhoMulya from "../CV/cvRidhoMulya.pdf";

const Hero = () => {
  const titleRef = useRef(null); // Untuk bagian teks
  const buttonRef = useRef(null); // Untuk bagian teks

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-animate");
          } else {
            entry.target.classList.remove("fade-up-animate");
          }
        });
      },
      { threshold: 0.3 } // Elemen terlihat jika 30% masuk ke viewport
    );

    // Observasi elemen teks dan gambar
    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    // Cleanup observer saat unmount
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <Element name="home">
      <section id="home" className="h-screen home relative">
        {/* Wave Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "#829EF999" }} // Biru muda sangat transparan
              />
              <stop
                offset="50%"
                style={{ stopColor: "#4CBEFF99" }} // Biru langit terang transparan
              />
              <stop
                offset="100%"
                style={{ stopColor: "#4CBEFF" }} // Biru terang penuh
              />
            </linearGradient>

            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>

        {/* Hero Content */}
        <div className="pt-4 relative">
          <div className="mt-12">
            <div className="mt-48 w-full">
              <div className="heading flex self-center items-center">
                <h1 ref={titleRef} className="fade-up md:text-2xl text-xl md:mx-auto lg:font-bold font-semibold mx-4 text-center max-w-[32rem] md:max-w-[40rem]">
                  Hi, <span className="text-cyan-400">I'm Ridho</span>-a{" "}
                  <span className="text-cyan-400">Front End Developer</span>{" "}
                  turning ideas into seamless web experiences. Let's explore my
                  journey in crafting digital creations
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center self-center items-center">
            <a ref={buttonRef}
              className="flex mt-4 fade-up  rounded border self-center border-cyan-600 bg-cyan-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500"
              href={cvRidhoMulya}
              download="cvRidhoMulya.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
