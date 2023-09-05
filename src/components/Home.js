import React from "react";
import Cards from "./FunctionalityApi";
import Menucard from "./Menucard";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser, faPhone, faMessage,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import fitnessimage from "../assets/fitnessimage.png";
import Fitnessdata from "./Fitnessdata";
import Rightcontainer from "./Rightcontainer";
import TrainWithUsData from "./TrainWithUsData";
import Trainwithus from "./Trainwithus";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <div className="quote">
            <div id="animation1">
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
            <h1 className=".firstLetter"> IT HAPPEN</h1>
            <div id="animation2">
              <FontAwesomeIcon
                icon={faDumbbell}
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </div>
          </div>
          <p className="theme2" data-aos="zoom-in">
            <div className="extraInfo">Get Bigger Stronger and Ripped !</div>
            <div className="extraInfo">
              We are described as the new revolution in the context of muscle
              building and strength training. Get yourself daily dose of
              essential nutritions and required training.
            </div>
          </p>
        </main>
      </div>
      <div className="home2Parent" data-aos="zoom-out">
        <h1 className="firstLetter"> No Gaps</h1>
        <div className="home2">
          <Menucard Cards={Cards} />
        </div>
      </div>
      <section className="about" id="about">
        <div className="left-content" data-aos="fade-out">
          <div className="left-content-img">
            <img src={fitnessimage} alt="" />
            <div className="left-content-text">
              <h3 className="firstLetter">
                What
                <span className="firstLetter"> We</span>
                <br />
                Provide
              </h3>
            </div>
          </div>
        </div>

        <div className="right-content" data-aos="fade-in">
          <Rightcontainer Fitnessdata={Fitnessdata} />
        </div>
      </section>
      <div className="trainsec" data-aos="zoom-out-up">
        <h1 className="firstLetter"> With Us</h1>
        <Trainwithus TrainWithUsData={TrainWithUsData} />
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;