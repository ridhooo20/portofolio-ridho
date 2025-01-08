import React, { useEffect,useRef } from "react";
import { Element } from "react-scroll";
import Card from "../Card"; // Pastikan path sesuai
import p from "../img/p.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";




const Portofolio = () => {

  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)
  const judulRef = useRef(null)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add("fade-down-animate")
          } else {
            entry.target.classList.remove("fade-down-animate")
          }
        });
      }, { threshold: 0.3}
    );

    if(div1Ref.current) observer.observe (div1Ref.current)
    if(div2Ref.current) observer.observe (div2Ref.current)
    if(div3Ref.current) observer.observe (div3Ref.current)
    if(div4Ref.current) observer.observe (div4Ref.current)
    if(judulRef.current) observer.observe (judulRef.current)

    return () =>{
      if(div1Ref.current) observer.unobserve (div1Ref.current)
      if(div2Ref.current) observer.unobserve (div2Ref.current)
      if(div3Ref.current) observer.unobserve (div3Ref.current)
      if(div4Ref.current) observer.unobserve (div4Ref.current)
      if(judulRef.current) observer.unobserve (judulRef.current)
    }
  }, [])


  return (
    <Element name="portofolio">
      <section className="w-full lg:h-[95rem] h-[170rem] bg-white">
        <div className="pt-16">
          <div className="fade-down" ref={judulRef}>
            <p className="text-7xl font-bold text-cyan-700 opacity-40 text-center -z-10 ">
              Portofolio
            </p>
            <p className="text-5xl font-bold mt-[-3.2rem] text-cyan-700 text-center z-10 ">
              Portofolio
            </p>
          </div>
          <div className="pt-12 grid mx-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded- mt-3 fade-down" ref={div1Ref}>
              <Card
                image={p}
                title="Web Community"
                description="web community is an online platform for a community."
                content="An example of a web community is Abhaya Dhairya, which is the website of the 2024 Odd Scout community from Sriwijaya University, which is used to store albums or memories."
                buttonLabel="Create Your Version"
              />
            </div>
            <div className="rounded-lg mt-3 fade-down" ref={div2Ref}>
            <Card
                image={p2}
                title="Web Personal"
                description="a portfolio website is an online platform for showcasing one's work, skills, and experience."
                content="A personal website or portfolio is an online platform to showcase work, skills, and experience, serving as a digital introduction to highlight projects and expertise."
                buttonLabel="Create Your Version"
              />
            </div>
            <div className="rounded-lg mt-3 fade-down" ref={div3Ref}>
            <Card
                image={p3}
                title="Web News"
                description="info jeme kite website is an information website from various regions in South Sumatra."
                content="A web news site is an online platform that delivers up-to-date information on various topics, offering news articles, multimedia, and analysis."
                buttonLabel="Create Your Version"
              />
            </div>
            <div className="rounded-lg mt-3 fade-down" ref={div4Ref}>
            <Card
                image={p4}
                title="Web E-Commerce"
                description="a web e-commerce site is an online platform for buying and selling products or services."
                content="A web e-commerce site is an online platform that allows businesses and individuals to buy and sell products or services. It features product listings, shopping carts, and secure payment options for a seamless shopping experience."
                buttonLabel="Create Your Version"
              />
            </div>
            {/* <div className="h-64 rounded-lg bg-gray-200"></div> */}
            {/* <div className="h-64 rounded-lg bg-gray-200"></div> */}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Portofolio;
