import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function changepass() {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [verPass, setVerPass] = useState("");
  const nav = useNavigate();
  const PutPass = async (newPass) => {
    const res = await axios.put(
      "http://localhost:3000/api/v1/user/",
      {
        password: newPass,
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
            <span className="title">Reset Password</span>
            <span className="subtitle">Set a strongest password!</span>
            <div className="form-container">
              <input
                type="password"
                className="input"
                placeholder="current password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <input
                type="password"
                className="input"
                placeholder="new password"
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
              />
              <input
                type="password"
                className="input"
                placeholder="confirm new password"
                onChange={(e) => {
                  setVerPass(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                {
                  (pass !== "") & (newPass !== "") & (verPass !== "")
                    ? PutPass(newPass) & nav("/dashboard")
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
