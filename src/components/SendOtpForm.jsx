import React from "react";

function SendOtpForm({ step, mobile, setMobile }) {
  const submitHander = (event) => {
    event.preventDefault();
    console.log(event);
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
