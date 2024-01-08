import React from "react";
import "./mainPage.css";

import search from "../../assets/search-icon.svg";
import sort from "../../assets/sort-icon.svg";
import download from "../../assets/download-icon.svg";
import info from "../../assets/info-icon.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const MainPage = () => {
  return (
    <section className="mainPage">
      <div className="pageHeader">
        <p className="pageHeading">Overview</p>
        <select name="Timeline" id="dropdown">
          <option value="">Last Month</option>
        </select>
      </div>

      <div className="summary">
        <div className="card">
          <p className="cardTitle">Online Orders</p>
          <p className="cardValue">231</p>
        </div>
        <div className="card">
          <p className="cardTitle">Amount Recieved</p>
          <p className="cardValue">₹23,92,312.19</p>
        </div>
      </div>

      <div className="listView">
        <div className="listTitle">Transactions | This Month</div>

        <div className="listCard">
          <div className="listCardHeader">
            <div className="insideSearch">
              <img src={search} alt="search" />
              <input type="text" placeholder="Search by order ID..." />
            </div>

            <div className="buttonWrapper">
              <button className="sortBtn">
                Sort <img src={sort} alt="" />{" "}
              </button>
              <button className="downloadBtn">
                <img src={download} alt="" />
              </button>
            </div>
          </div>

          <table className="ordersTable">
            <thead>
              <tr>
                <td>Order ID</td>
                <td>Order date</td>
                <td>Order amount</td>
                <td className="info">
                  Transaction fees <img src={info} alt="info" />
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
              <tr>
                <td className="orderId">#281209</td>
                <td>7 July, 2023</td>
                <td>₹1278.23</td>
                <td>₹22</td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <button className="previousBtn"><img src={arrowLeft} alt="arrow-left" />Previous</button>
            <div className="pageBtns">
              <button className="numberBtn">1</button>
              <button className="numberBtn">...</button>
              <button className="numberBtn currentPage">10</button>
              <button className="numberBtn">11</button>
              <button className="numberBtn">12</button>
              <button className="numberBtn">13</button>
              <button className="numberBtn">14</button>
              <button className="numberBtn">15</button>
              <button className="numberBtn">16</button>
              <button className="numberBtn">17</button>
              <button className="numberBtn">18</button>
            </div>
            <button className="nextBtn"><img src={arrowRight} alt="arrow-right" />Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
