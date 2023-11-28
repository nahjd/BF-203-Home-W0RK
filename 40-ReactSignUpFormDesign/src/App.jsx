import React from 'react'
import './App.css'
import img1 from "./assets/images/img1.png"
import img2 from "./assets/images/img2.png"
import playmarket from "./assets/images/playmarket.png"
import appstore from "./assets/images/appstore.png"
import logo from "./assets/images/logo.png"
function App() {


  return (
    <>
      <section>
        <div className="main">
          <div className="Cards">
            <div className="leftCard">
              <p>Social media shared today, tomorrow <br /> or by location</p>
              <div className="image">
                <img src={img1} alt="logo" />
              </div>

            </div>
            <div className="rightCard">
              <div className="header">
                <div className="capzul">
                  <img src={logo} alt="Logo" />
                  <h3>Capzul</h3>
                </div>
                <div className="Createaccount">
                  <h1>Create account</h1>
                  <br />
                  <span>For business, band or celebrity.</span>
                </div>

                <div className="inputs">
                  <div className="oneinput">
                    <label htmlFor=""
                      id='label1'
                    >First name</label>

                    <input type="text"
                      id='input1' />
                    <label htmlFor=""
                      id='label2'
                    >Last name</label>
                    <input type="text"
                      id='input2' />
                  </div>

                  <div className="twoinput">
                    <label htmlFor=""
                      id='label3'>Email or phone number </label>
                    <input type="email"
                      id='input3' />
                    <label htmlFor=""
                      id='label4'>Date of birth </label>
                    <input type="date"
                      id='input4' />
                  </div>
                  <div className="threeinput">
                    <label htmlFor=""
                      id='label5'>Password</label>
                    <input type="password"
                      id='input5' />
                    <label htmlFor=""
                      id='label6'>Confirm password</label>
                    <input type="password"
                      id='input6' />
                  </div>
                </div>
                <div className="footer">
                  <div className="remember">
                    <div className="check">
                      <div className="inputt">
                        <input type="checkbox" id="vehicle1" name="vehicle1" />

                        <label htmlFor=""
                        >Remember me</label><br />
                      </div>

                      <input type="checkbox" name="vehicle1" />
                      <label htmlFor=""
                        id='check'>I agree to all the <a >Terms</a> and <a >Privacy </a>policy</label><br />

                    </div>
                    <div className="forgot">
                      <a>Forgot password?</a>
                    </div>

                  </div>

                  <div className="buttons">
                    <div className="leftbtn">
                      <p>Create account</p>
                    </div>
                    <div className="rightbtn">
                      <div className="imagebutton">

                        <img src={img2} alt="img2" />
                        <p>Sign-in with google</p>
                        <span>Don’t have an account? <a >Log In</a> </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
              <div className="endbutton">
                <img src={playmarket} alt="playmarket" />
                <img src={appstore} alt="appstore" />
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default App
