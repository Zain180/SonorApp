import React from "react";
import Home from "./components/Home";
import Header from "./components/header/Header";
import StreamMusic from "./components/StreamMusic";
import LastSection from "./components/LastSection";
import Footer from "./components/footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  // Specify the scroll container element
  smooth: true,
});
function App() {
  return (
    <div data-scroll-container className="font-[gilroy]">
      <Header />
      <Home />
      <StreamMusic />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
