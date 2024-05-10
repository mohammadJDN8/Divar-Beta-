import React, { useState } from "react";
import SendOtpForm from "../components/SendOtpForm";
import CheckOtpForm from "../components/CheckOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          mobile={mobile}
          setStep={setStep}
          code={code}
          setCode={setCode}
        />
      )}
    </div>
  );
}

export default AuthPage;
