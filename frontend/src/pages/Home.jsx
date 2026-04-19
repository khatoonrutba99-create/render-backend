import React, { useContext } from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import Testimonials from "../components/Testimonials";
import MessageForm from "../components/MessageForm";
import Biography from "../components/Biography";

const Home = () => {
  return (
    <>
      <Hero title="Life's On at ZeeCare Hospitals" />
      <Biography imageUrl="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" />
      <Departments />
      <Testimonials />
      <MessageForm />
    </>
  );
};

export default Home;
