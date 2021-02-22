import './exercisefive.css';
import React from "react";

function Exercisefive()  {   
      return (
        <div className="stockBackground">
            <label><b>Current Status </b>: Not Started </label>

            {/* Counter Buttons Start Here */}
            <div className="clockContainer">
              <div style={{margin:'auto'}}>
                    <button className="counterBtn">START</button>
              </div>
              <div style={{margin:'auto'}}>
                    <button className="counterBtn">RESET</button>
              </div>
              <div style={{margin:'auto'}}>
                <label>Speed</label>
                <div className="buttons">
                    <button className="speedBtn">0.5PX</button>
                    <button className="speedBtn">5PX</button>
                    <button className="speedBtn">10PX</button>
                </div>
              </div>
            </div>

            {/* Grid Start Here */}
              <h4>Events</h4>
          
              <div className="eventsContainer">
               
                   <div className="cardContainer">
                        <div className="cardtitle">Replay Clock</div>
                        <div className="cardbody">09:30:30.485</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Event</div>
                        <div className="cardbody">411</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Name</div>
                        <div className="cardbody">NBBO</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                        <div className="cardbody">Q</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Price 1</div>
                        <div className="cardbody">142.79</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Share 1</div>
                        <div className="cardbody">100</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                        <div className="cardbody">Q</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Price 2</div>
                        <div className="cardbody">142.9</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Share 2</div>
                        <div className="cardbody">300</div>
                   </div>
                   <div className="cardContainer">
                        <div className="cardtitle">Price 2</div>
                        <div className="cardbody">N</div>
                   </div>
                   
              </div>

            {/* Order Book Start Here */}
               <h4>Order Book</h4>

            <div className="tablesContainer">
                <div className="tableContainer">
                        <p>Bids</p>
                          <table className="bidsAsksTableStyle">
                            <tr>
                              <th>Age</th>
                              <th>Exchange</th> 
                              <th>Shares</th>
                              <th>Price</th>
                            </tr>
                            <tr>
                              <td>1.2</td>
                              <td>Q</td>
                              <td>400</td>
                              <td>142.76</td>
                            </tr>
                            <tr>
                              <td>1.2</td>
                              <td>Q</td>
                              <td>400</td>
                              <td>142.76</td>
                            </tr>
                            <tr>
                              <td>1.2</td>
                              <td>Q</td>
                              <td>400</td>
                              <td>142.76</td>
                            </tr>
                            <tr>
                              <td>1.2</td>
                              <td>Q</td>
                              <td>400</td>
                              <td>142.76</td>
                            </tr>
                            <tr>
                              <td>1.2</td>
                              <td>Q</td>
                              <td>400</td>
                              <td>142.76</td>
                            </tr>
                          </table>
                  </div>
                <div className="tableContainer">
                        <p>Asks</p>
                        <table className="bidsAsksTableStyle">
                            <tr>
                              <th>Price</th>
                              <th>Shares</th>
                              <th>Exchange</th> 
                              <th>Age</th>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>143.13</td>
                              <td>400</td>
                              <td>Q</td>
                              <td>1.2</td>
                            </tr>
                            

                          </table>
                </div>
            </div>

        </div>
      );
    
  }
   
export default Exercisefive;
