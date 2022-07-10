import React from "react";
import axios from "axios";
import { baseUrl } from "../shared/baseUrl";
function Register() {
  const RegistrationHandler = (event) => {
    event.preventDefault();
    const studentName = event.target.studentName.value;
    const sid = event.target.sid.value;
    const mobileNo = event.target.mobileNo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const accountNo = event.target.accountNo.value;
    const ifscCode = event.target.ifscCode.value;
    const branch = event.target.branch.value;
    const dob = event.target.dob.value;
    const nationality = event.target.nationality.value;
    const address = event.target.address.value;
    const fatherMobile = event.target.fatherMobile.value;
    const fatherName = event.target.fatherName.value;
    const motherName = event.target.motherName.value;
    const reference = event.target.reference.value;
    const gender = event.target.gender.value;
    const room = 0;

    const data = {
      studentName,
      sid,
      mobileNo,
      email,
      password,
      accountNo,
      ifscCode,
      branch,
      dob,
      nationality,
      address,
      fatherMobile,
      fatherName,
      motherName,
      reference,
      gender,
      room,

    };
    axios
      .post(baseUrl + "students", data)
      .then((response) => {
        console.log(response);
        // event.target.reset(null);
        alert("data submit successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
        <div className="container mt-20">
            <h3 className="Auth-form-title reg" >Registration</h3>
            <form className="form-group" onSubmit={RegistrationHandler}>
            <div className="row">
                <div className="form-group col-md-6">
                <label>Full Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="studentName"
                    placeholder="Full Name"
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Registration No.</label>
                <input
                    type="text"
                    className="form-control"
                    name="sid"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Mobile No.</label>
                <input
                    type="text"
                    className="form-control"
                    name="mobileNo"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Email ID:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder=""
                    required
                />
                </div>
                <div class="form-group col-md-6">
                <label>Gender:</label>
                <select className="form-control" name="gender">
                    <option>Select Option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div className="form-group col-md-6">
                <label>branch :</label>
                <input
                    type="text"
                    className="form-control"
                    name="branch"
                    placeholder=""
                    required
                />
                </div>

                <div className="form-group col-md-6">
                <label>Date Of Birth:</label>
                <input
                    type="date"
                    className="form-control"
                    name="dob"
                    placeholder=""
                    required
                />
                </div>

                <div className="form-group col-md-6">
                <label>Address:</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder=""
                    required
                />
                </div>

                <div className="form-group col-md-6">
                <label>Nationality:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nationality"
                    placeholder=""
                    required
                />
                </div>

                <div className="form-group col-md-6">
                <label>Father Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="fatherName"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Father/Guardian Phone No.:</label>
                <input
                    type="text"
                    className="form-control"
                    name="fatherMobile"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Mother Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="motherName"
                    placeholder=""
                    required
                />
                </div>

                <div className="form-group col-md-6">
                <label>Bank A/C No.:</label>
                <input
                    type="text"
                    className="form-control"
                    name="accountNo"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>IFSC Code:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ifscCode"
                    placeholder=""
                    required
                />
                </div>
                <div className="form-group col-md-6">
                <label>Payment Reference Number:</label>
                <input
                    type="text"
                    className="form-control"
                    name="reference"
                    placeholder=""
                    required
                />
                </div>
            </div>
            <br />
            <div className="btnn col-md-12">
                <button type="submit" className="btn btn-primary col-md-12">
                Register
                </button>
            </div>
            </form>
        </div>
    </>
  );
}

export default Register;