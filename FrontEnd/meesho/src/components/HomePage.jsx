import React from "react";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <div className="section_1">
        <div className="section_1_div_1">
          <h1>Lowest Prices Best Quality Shopping</h1>
          <div className="section_1_icon_div">
            <div className="icon_div">
              <div className="icon_img">
                <img
                  src="https://images.meesho.com/images/pow/freeDelivery.svg"
                  alt=""
                />
              </div>
              <div>
                <p>Free Delivery</p>
              </div>
            </div>
            <div className="icon_div">
              <div className="icon_img">
                <img
                  src="https://images.meesho.com/images/pow/cod.svg"
                  alt=""
                />
              </div>
              <div>
                <p>Cash on Delivery</p>
              </div>
            </div>
            <div className="icon_div">
              <div className="icon_img">
                <img
                  src="https://images.meesho.com/images/pow/easyReturns.svg"
                  alt=""
                />
              </div>
              <div>
                <p>Easy Returns</p>
              </div>
            </div>
          </div>
          <div className="section_1_button">
            <img
              src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp"
              alt=""
            />
            <p>Download the Messho App</p>
          </div>
        </div>
        <div className="section_1_div_2">
          <img
            src="https://images.meesho.com/images/marketing/1680091453441.webp"
            alt=""
          />
        </div>
      </div>

      <div className="section_2">
        <div>
          <hr />
          <h1>Top Categories to choose from</h1>
          <hr />
        </div>
      </div>
    </div>
  );
}
