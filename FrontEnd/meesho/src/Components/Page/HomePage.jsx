import React from "react";
import "./HomePage.scss";
import Product from "./Product";
import Navbar1 from "../Navbar1";
import Navbar2 from "../Navbar2";

export default function HomePage() {
  return (
    <div>
      <div>
        <Navbar1 />
        <Navbar2 />
      </div>
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
        <div className="TopCategoriesTitle__SectionHeaderStyled-sc-1gxlcwj-0 hSGhxw">
          <div className="sctn-line"></div>
          <span>Top Categories to choose from</span>
          <div className="sctn-line"></div>
        </div>
      </div>
      <div className="section_2_layout">
        <div className="section_2_Card">
          <div className="section_2_woman_sotre">
            <div>
              <img
                src="https://images.meesho.com/images/marketing/1680091497829.webp"
                alt=""
              />
            </div>
          </div>

          <div className="section_2_man_and_kids">
            <div className="section_2_man_store">
              <img
                src="https://images.meesho.com/images/marketing/1680091584937.webp"
                alt=""
              />
            </div>
            <div className="section_2_kids_store">
              <img
                src="https://images.meesho.com/images/marketing/1680091570371.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section_3">
        <div className="viewall">
          <img
            src="https://images.meesho.com/images/marketing/1680091753547.webp"
            alt=""
          />
        </div>

        <div className="essentials_section">
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091687255.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091726469.webp"
              alt=""
            />
          </div>
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091703795.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091742705.webp"
              alt=""
            />
          </div>
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091672842.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091714965.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section_4">
        <div className="viewall">
          <img
            src="https://images.meesho.com/images/marketing/1680091753547.webp"
            alt=""
          />
        </div>

        <div className="essentials_section">
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091786758.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091813030.webp"
              alt=""
            />
          </div>
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091775036.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091826274.webp"
              alt=""
            />
          </div>
          <div className="essentials_card">
            <img
              src="https://images.meesho.com/images/marketing/1680091798704.webp"
              alt=""
            />
            <img
              src="https://images.meesho.com/images/marketing/1680091714965.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section_5">
        <div className="section_5_inner_div">
          <h2>Become a Reseller and</h2>
          <h1>Start your Online Business</h1>
          <h1>with Zero Investment</h1>
          <div className="download">
            <div>
              <img
                src="https://images.meesho.com/images/pow/playstoreIcon.webp"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.meesho.com/images/pow/appstoreIcon.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Product />
    </div>
  );
}
