import React from "react";
import { RiCopperDiamondLine } from "react-icons/ri";
import Getsvg from "./Getsvg";

const SidebardetailData = () => {
  return (
    <div className="SidebardetailData">
      <h3>Design Faster</h3>

      <div className="circle-earning">
        <div className="circles item-center">
          <div className="outercircle item-center">
            <div className="circles inner-bar item-center">
              <div className="innercircle item-center">
                <div className="innermostcircle item-center">
                  <RiCopperDiamondLine size="30" color="#8676FF" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle">
          <div className="bar"></div>
          <div className="box">
            <span></span>
          </div>
        </div>
        <p className="total-title">Total earning</p>
        <p className="updown">
          $12,875
          <span className="arrow-up">
            <i className="fa-solid fa-caret-up"></i>&nbsp;2%
          </span>
        </p>
        <p className="compare">Compared to $12,875 last year</p>
        <div className="types">
          <div>
            <span className="type-name">Travel</span>
            <span className="type-count">12,875</span>
            <Getsvg stroke="#8676FF" />
          </div>
          <div>
            <span className="type-name">Presentation</span>
            <span className="type-count">12,875</span>
            <Getsvg stroke="#FF708B" />
          </div>
          <div>
            <span className="type-name">Research</span>
            <span className="type-count">12,875</span>
            <Getsvg stroke="#FFBA69" />
          </div>
        </div>
      </div>
      <div className="bg-blue" style={{ color: "white" }}>
        <div className="blue-bottom-border">
          <p style={{ fontSize: "0.8rem" }}>Total earning</p>
          <p style={{ fontSize: "1.4rem" }}>
            $12,875
            <span className="arrow arrow-up">
              <i className="fa-solid fa-caret-up"></i>&nbsp;10%
            </span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem", opacity: "0.8" }}>
            Compared to $12,875 last year
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.8rem" }}>Sales</p>
          <p style={{ fontSize: "1.4rem" }}>
            $12,875
            <span className="arrow arrow-up">
              <i className="fa-solid fa-caret-up"></i>&nbsp;12%
            </span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem", opacity: "0.8" }}>
            Compared to $12,875 last year
          </p>
        </div>
      </div>

      <div className="types acc-data">
        <div>
          <span className="name">Travel</span>{" "}
          <span className="acc-count">852</span>
          <span>12,875</span>
          <span className="arrow-up">
            <i className="fa-solid fa-caret-up"></i>
          </span>
        </div>
        <div>
          <span className="name">Presentation</span>{" "}
          <span className="acc-count">753</span>
          <span>12,875</span>
          <span className="arrow-down">
            <i className="fa-solid fa-caret-down"></i>
          </span>
        </div>
        <div>
          <span className="name">Research</span>{" "}
          <span className="acc-count">553</span>
          <span>12,875</span>
          <span className="arrow-up">
            <i className="fa-solid fa-caret-up"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebardetailData;
