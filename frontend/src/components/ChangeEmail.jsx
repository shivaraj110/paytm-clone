import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Change from "./Change";
import { useNavigate } from "react-router-dom";
export default function ChangeEmail() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [verEmail, setVerEmail] = useState("");
  const nav = useNavigate();
  const putEmail = async (newEmail) => {
    const res = await axios.put(
      "http://localhost:3000/api/v1/user/",
      {
        username: newEmail,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    alert(res.data.msg);
  };

  return (
    <div className="flex justify-center self-center text-center mt-28">
      <StyledWrapper>
        <div className="form-box ">
          <form className="form">
            <span className="title">Reset Emailword</span>
            <span className="subtitle">Set a strongest Emailword!</span>
            <div className="form-container">
              <input
                type="email"
                className="input"
                placeholder="Current Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="email"
                className="input"
                placeholder="new email"
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
              />
              <input
                type="email"
                className="input"
                placeholder="confirm new email"
                onChange={(e) => {
                  setVerEmail(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                {
                  (email !== "") &
                  (newEmail !== "") &
                  (verEmail !== "") &
                  (verEmail === newEmail)
                    ? putEmail(newEmail) & nav("/dashboard")
                    : alert("invalid attempt");
                }
              }}>
              Submit
            </button>
          </form>
        </div>
      </StyledWrapper>
    </div>
  );
}
const StyledWrapper = styled.div`
  .form-box {
    max-width: 300px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  /*Form text*/
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 0.5rem;
    width: 100%;
    text-align: center;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    padding: 8px 15px;
    text-align: center;
  }

  .form-section {
    padding: 16px;
    font-size: 0.85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color 0.3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  /*Button*/
  .form button {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form button:hover {
    background-color: #005ce6;
  }
`;
