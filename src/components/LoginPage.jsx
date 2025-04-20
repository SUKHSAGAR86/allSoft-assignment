import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [OTP, setOTP] = useState(false);
  const navigate = useNavigate();
  const [MobileNumber, setMobileNumber] = useState("");
  const [inputOtp, setInputOtp] = useState("");

  const generateOTP = async () => {
    if (MobileNumber != "" && !isNaN(parseInt(MobileNumber))) {
      console.log(MobileNumber);
    } else {
      alert("Mobile Number should not be empty and string");
      return false;
    }

    try {
      const res = await fetch(
        "https://apis.allsoft.co/api/documentManagement/generateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "token": "<your_generated_token>",
          },
          body: JSON.stringify({ mobile_number: MobileNumber }),
        }
      );

      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.log("Error while generating OTP: " + error);
    }

    setOTP(true);
  };

  const veryfiyMobileOTP = async () => {
    if (inputOtp != "" || MobileNumber != "" || !isNaN(parseInt(inputOtp))) {
      console.log(inputOtp);
    } else {
      alert("Mobile Number and OTP should not be empty and string");
      return false;
    }

    const URL = "https://apis.allsoft.co/api/documentManagement//validateOTP";
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_number: MobileNumber,
          otp: "",
        }),
      });
      const response = await res.json();
      console.log(response);
      if (response) {
        navigate("/admin");
      }
    } catch (error) {
      console.log("Error while verifying OTP : " + error);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center h-100 mt-5">
        <div className=" col-md-6 col-12  border rounded-2 p-3 fw-bold">
          <div className="text-center">
            <h2 className="text-center mb-3">
              <i className="bi bi-person-fill me-2" />
              Login
            </h2>
            <p className="text-center text-muted">Please login to continue</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3 ">
              <label htmlFor="userName" className="form-label">
                <i className="bi bi-person-fill me-2" />
                User Name
              </label>
              <input type="text" className="form-control" id="userName" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <i className="bi bi-lock-fill me-2"></i>
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                <i className="bi bi-phone-fill me-2"></i>
                Mobile Number
              </label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  maxLength="10"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            {OTP ? (
              <>
                <div className="mb-3">
                  <label htmlFor="verifyOTP" className="form-label">
                    <i className="bi bi-shield-lock me-2" />
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="veryfiyOTP"
                    value={inputOtp}
                    onChange={(e) => setInputOtp(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary" onClick={veryfiyMobileOTP}>
                  Verify OTP
                </button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={generateOTP}>
                Generate OTP
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

