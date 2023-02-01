import React from "react";
import { useImmer } from "use-immer";

import axios from "axios";
import "./setUpAccount.scss";

export default function SetUpAccount() {
  const id = window.location.href.slice(34);
  let userEmail;

  const [address, setAddress] = useImmer({
    barangay: "",
    municipality: "",
    province: "",
  });
  const [userData, setUserData] = useImmer({
    email: "",
    firstName: "",
    midleName: "",
    lastName: "",
    studentNumber: "",
    contactNumber: "",
    address: "",
    dob: "",
    program: "",
    yearStanding: "",
    section: "",
    sex: "",
  });

  function handleUserData(e) {
    const name = e.target.name;
    if (name === "address1" || name === "address2" || name === "address3") {
      setUserData((draft) => {
        draft.address = `${address.barangay}, ${address.municipality}, ${address.province}`;
      });
      return;
    }
    setUserData((draft) => {
      draft[name] = e.target.value;
    });
  }
  async function getEmail() {
    await axios.post("/query/getVerifiedEmail", { id: id }).then((response) => {
      userEmail = response.data.email;
    });
    setUserData((draft) => {
      draft.email = userEmail;
    });
  }
  getEmail();
  function handleSetUpAccount(e) {
    e.preventDefault();
    if (Object.values(userData).every((val) => val !== "")) {
      console.log(id);
      axios.post("/query/addUser", { ...userData, id }).then((response) => {
        console.log(response);
        if (response.data.status === "ok") {
          if (
            confirm(
              'User Account Created, \nClick "ok": Go to the Organizations Page\nClick "canccel": Go to Sign Up'
            )
          ) {
            window.location.href = response.data.href;
          }
        } else if (response.data.status === "error") {
          alert("User Account is Already Created Goin to Organizations Page");
          window.location.href = response.data.href;
        }
      });
    } else alert("Please Fill up the Form");
  }

  return (
    <div className="container">
      <h1>Set up Account Details</h1>
      <div className="content">
        <form action="#">
          <br />
          <br />
          <div className="user-details">
            <span className="details">Email address</span>
            <input
              className="input-details"
              name="email"
              onChange={handleUserData}
              type="text"
              disabled
              value={userData.email}
              required
            />

            <span className="details">First name </span>
            <input
              className="input-details"
              name="firstName"
              onChange={handleUserData}
              type="text"
              required
            />

            <span className="details">Middle name </span>
            <input
              className="input-details"
              name="midleName"
              onChange={handleUserData}
              type="text"
              required
            />

            <span className="details">Last name </span>
            <input
              className="input-details"
              type="text"
              name="lastName"
              onChange={handleUserData}
              required
            />

            <span className="details">Student number</span>
            <input
              className="input-details"
              type="text"
              placeholder="0000000"
              onChange={handleUserData}
              name="studentNumber"
              required
            />

            <span className="details">Contact number</span>
            <input
              className="input-details"
              type="text"
              placeholder="09xxxxxxxxx"
              onChange={handleUserData}
              required
              name="contactNumber"
            />

            <span className="details">Residential Address</span>
            <input
              className="input-details"
              type="text"
              placeholder="Barangay"
              onChange={(e) => {
                setAddress((draft) => {
                  draft.barangay = e.target.value;
                });
                handleUserData(e);
              }}
              name="address1"
              required
            />
            <input
              className="input-details"
              type="text"
              placeholder="Municipality/City"
              name="address2"
              onChange={(e) => {
                setAddress((draft) => {
                  draft.province = e.target.value;
                });
                handleUserData(e);
              }}
              required
            />
            <input
              className="input-details"
              type="text"
              placeholder="Province"
              onChange={(e) => {
                setAddress((draft) => {
                  draft.municipality = e.target.value;
                });
                handleUserData(e);
              }}
              name="address3"
              required
            />

            <span className="details">Date of birth</span>
            <input
              className="input-details"
              type="date"
              placeholder="Date of birth"
              onChange={handleUserData}
              name="dob"
              required
            />
            <br />

            <span className="details">Program</span>
            <select
              className="input-details"
              id="program"
              name="program"
              required
              onChange={handleUserData}
            >
              <option name="program" value="BS in Computer Science">
                BS in Computer Science
              </option>
              <option
                name="program"
                value="BS in Entertainment and Multimedia Computing"
              >
                BS in Entertainment and Multimedia Computing
              </option>
              <option name="program" value="BS in Information Technology">
                BS in Information Technology
              </option>
            </select>

            <span className="details">Year standing</span>
            <select
              className="input-details"
              id="year"
              name="yearStanding"
              onChange={handleUserData}
              required
            >
              <option name="yearStanding" value="First year">
                First year
              </option>
              <option name="yearStanding" value="Second year">
                Second year
              </option>
              <option name="yearStanding" value="Third year">
                Third year
              </option>
              <option name="yearStanding" value="Fourth year">
                Fourth year
              </option>
            </select>

            <span className="details">Section</span>
            <select
              className="input-details"
              id="section"
              name="section"
              onChange={handleUserData}
              required
            >
              <option name="section" value="A">
                A
              </option>
              <option name="section" value="B">
                B
              </option>
              <option name="section" value="C">
                C
              </option>
              <option name="section" value="D">
                D
              </option>
            </select>

            <span className="details">Sex</span>
            <br />
            <input
              type="radio"
              name="sex"
              id="dot-1"
              value="male"
              onChange={handleUserData}
            />
            <span className="details">Male</span>
            <br />
            <input
              type="radio"
              name="sex"
              id="dot-2"
              value="female"
              onChange={handleUserData}
            />
            <span className="details">Female</span>
          </div>
          <br />
          <input
            className="submit-account-details-btn"
            style={{ verticalAlign: "middle" }}
            type="submit"
            onClick={handleSetUpAccount}
          />
        </form>
      </div>
    </div>
  );
}
