import Navbar from "./components/Navbar";
import styled from "styled-components/macro";
import { Link, animateScroll as scroll } from "react-scroll";
import { Colors } from "./data/Variables";
import GlobalStyle from "./globalStyle";
import { Switch, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CgArrowLongUp } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

const BackToTopArrow = styled(CgArrowLongUp)`
  color: ${Colors.white};
  font-size: 2rem;
  padding: 4px 1px;
  border: none;
  background: ${Colors.gold};
  position: fixed;
  bottom: 70px;
  right: 50px;
  z-index: 999;
  cursor: pointer;
  &:hover {
    background: ${Colors.brown};
  }
  @media screen and (max-width: 992px) {
    right: 30px;
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  //show back-to-top arrow when page is scrolled down 400px from top
  const showArrow = () => {
    if (window.scrollY >= 400) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  };
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", showArrow);
    };
    watchScroll();
  }, []);

  let ArrowStyle = {
    opacity: isScrolledDown ? "1" : "0",
    transition: "all 0.4s ease-in-out",
  };

  //toggle dropdown menu
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  //animations
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </Switch>
      <Link
        to=""
        style={ArrowStyle}
        smooth={false}
        offset={-70}
        duration={1000}
        onClick={scrollToTop}
      >
        <BackToTopArrow />
      </Link>
      <Footer />
    </>
  );
}

export default App;
