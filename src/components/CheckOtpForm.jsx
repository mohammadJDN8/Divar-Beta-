import React from "react";
import { checkOtp } from "../services/Auth";
import { setCookie } from "../utils/cookie";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/User";

export default function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید پیامک ارسال شده</p>
      <span>کد ارسال شده به شماره {mobile} را وارد نمایید</span>
      <label htmlFor="input"> کد تایید را وارد کنید</label>
      <input
        placeholder="کد تایید"
        type="text"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit"> ورود </button>
      <button onClick={() => setStep(1)}> تغییر شماره </button>
    </form>
  );
}
