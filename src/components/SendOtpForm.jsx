import React from "react";
import { sendOtp } from "../services/Auth";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHander = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } =await sendOtp(mobile);
    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
    console.log({ response, error });
  };
  return (
    <form onSubmit={submitHander}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفا شماره تلفن خود را وارد کنید , کد
        تایید برای شما ارسال میشود
      </span>
      <label htmlFor="input">شماره خوپ را وارد کنید</label>
      <input
        placeholder="شماره موبایل"
        type="text"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
      
    </form>
  );
}

export default SendOtpForm;
