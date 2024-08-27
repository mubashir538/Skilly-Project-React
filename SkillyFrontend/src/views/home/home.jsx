import { assets } from "../../assets/app";
import "./home.css";
import Compartment from "../../components/homepage-Compartments/compartment";
import CategorySection from "../../components/categorysection/categorysection";
import Carousel from "../../components/carousel/carousel";
import Card1 from "../../components/card1/card1";
import HorizontalScroller from "../../components/horizontalscroller/horizontalscroller";
import Feature from "../../components/feature/feature";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="title">
          <div className="t1">Free Skill Learning Platform</div>
          <div className="t2">
            Learn Easily From the Biggest Library of Courses
          </div>
          <div className="t3">
            Skilly helps you to learn any skill from the world-class Educators
            on Youtube and to earn a great Job with new skilset
          </div>
          <div className="btns">
            <button className="btn1" onClick={() => {navigate('/signup')}}>
              <span>Get Started</span>
            </button>
            <button className="btn2" onClick={() => {navigate('/about')}}>Learn More</button>
          </div>
        </div>
        <div className="image">
          <img src={assets.hompage_title} alt="" />
        </div>
      </div>
      <Compartment title="Inspired By" padding={"4rem"} headpad={"0"}>
        <div className="inspired">
          <img src={assets.udemy} alt="" />
          <img src={assets.skillshare} alt="" />
          <img src={assets.unacademy} alt="" />
          <img src={assets.udacity} alt="" />
          <img src={assets.coursera} alt="" />
        </div>
      </Compartment>
      <Compartment title="Top Categories" padding={"1rem"} headpad={"3rem"}>
        <HorizontalScroller>
          <CategorySection />
          <CategorySection />
          <CategorySection />
        </HorizontalScroller>
      </Compartment>
      <Compartment title="Top Instructors" padding={"0"} headpad={"4rem"}>
        <Carousel />
      </Compartment>
      <Compartment title="Top Courses" padding={"1rem"} headpad={"3rem"}>
        <div className="cards">
          <HorizontalScroller>
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
          </HorizontalScroller>
        </div>
      </Compartment>
      <Compartment title="Features" padding={"4rem"} headpad={"0"}>
        <div className="features">
          <Feature
            position={1}
            title="What Will You Discover?"
            desc="Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you."
            img={assets.f1}
            btnText="Browse Courses"
            btnlink="courses"
          />
          <Feature
            position={2}
            title="Online Learning Designed For Real Life"
            desc="Move your creative journey forward without putting life on hold. Skillshare's short online classes help you find inspiration that fits your routine."
            img={assets.f2}
            btnText="Explore Site"
            btnlink="category"
          />
          <Feature
            position={3}
            title="Learner outcomes"
            desc="87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career"
            img={assets.f3}
            btnText="Learn More"
            btnlink="about"
          />
        </div>
      </Compartment>
    </>
  );
};

export default Home;
