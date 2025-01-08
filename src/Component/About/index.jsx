import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Element } from "react-scroll";
import Ridho from "../img/Ridho.jpg";
import HTML from "../img/HTML.svg";
import CSS from "../img/CSS.svg";
import JS from "../img/JS.svg";
import REACT from "../img/REACT.svg";
import TL from "../img/TAILWINDCSS.svg";
import GIT from "../img/GIT.svg";

const About = () => {
  const textRef = useRef(null);
  const introRef = useRef(null);
  const gambarRef = useRef(null);
  const skillRef = useRef(null);
  const sRef = useRef(null);
  const timeRef = useRef(null);

  const [time, setTime] = useState(new Date()); // Menyimpan waktu saat ini

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-down-animate");
          } else {
            entry.target.classList.remove("fade-down-animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (gambarRef.current) observer.observe(gambarRef.current);
    if (skillRef.current) observer.observe(skillRef.current);
    if (sRef.current) observer.observe(sRef.current);
    if (timeRef.current) observer.observe(timeRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (introRef.current) observer.unobserve(introRef.current);
      if (gambarRef.current) observer.unobserve(gambarRef.current);
      if (skillRef.current) observer.unobserve(skillRef.current);
      if (sRef.current) observer.unobserve(sRef.current);
      if (timeRef.current) observer.unobserve(timeRef.current);
    };
  }, []);

  // Mengupdate waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval); // Membersihkan interval saat komponen unmount
    };
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value); // Format angka jika lebih kecil dari 10

  return (
    <Element name="about">
      <section className="pt-12 lg:h-[58rem] h-[75rem] w-full background-about">
        <div className="text-center fade-down" ref={textRef}>
          <p className="text-6xl font-bold opacity-30 -z-10">About Me</p>
          <p className="text-4xl font-bold z-10 mt-[-2.5rem]">About Me</p>
        </div>
        <div className="text-2xl font-bold text-center pt-8 fade-down" ref={timeRef}>
          <span>{formatTime(time.getHours())}</span>:
          <span>{formatTime(time.getMinutes())}</span>:
          <span>{formatTime(time.getSeconds())}</span>
        </div>
        <div className="pt-44 lg:flex">
          <div className="paragraf self-center lg:w-[50%]">
            <p
              className="lg:text-2xl text-xl mx-8 mb-8 lg:ml-7 font-semibold max-w-[38rem] fade-down self-center"
              ref={introRef}
            >
              "Hi, I'm{" "}
              <span className="text-cyan-300 lg:text-3xl text-2xl">
                Ridho Mulya,
              </span>{" "}
              a Computer Engineering student and{" "}
              <span className="lg:text-3xl text-2xl text-cyan-300">
                Front-End Developer
              </span>{" "}
              passionate about user-friendly designs. Let's innovate!"
            </p>
            <p className="text-xl mx-8 font-bold fade-down" ref={sRef}>
              SKILL
            </p>
            <div className="skill flex flex-wrap ml-0 fade-down" ref={skillRef}>
              <div className="flex flex-col items-center m-2">
                <img
                  src={HTML}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">HTML</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src={CSS}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">CSS</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src={JS}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">
                  JavaScript
                </p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src={REACT}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">React</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src={TL}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src={GIT}
                  className="w-24 h-24 opacity-30 hover:opacity-100 hover:scale-110 ease-in-out duration-300"
                />
                <p className="text-center mt-2 text-sm font-medium">Git</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-12 self-center gambar">
            <img
              src={Ridho}
              className="md:w-[27rem] md:h-[27rem]  w-[17rem] h-[17rem] fade-down rounded-md mx-auto lg:ml-36 self-center"
              ref={gambarRef}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
