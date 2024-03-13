"use client";
import { useEffect, useRef, useState } from "react";

function OtpInput() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtp, setSetActiveOtp] = useState(0);
  const otpBoxReference = useRef<HTMLInputElement>(null);

  const handleChange = (value: any, idx: number) => {
    let newArr = [...otp];
    newArr[idx] = value.substring(value.length - 1);
    setSetActiveOtp(idx + 1);
    setOtp(newArr);
  };

  useEffect(() => {
    otpBoxReference.current?.focus();
  }, [activeOtp]);

  return (
    <div className="w-full flex justify-around">
      {otp.map((digit: string, idx: number) => (
        <input
          key={idx}
          className="w-12 h-12 border rounded-lg text-center remove-arrow outline-none"
          type="number"
          value={otp[idx]}
          ref={idx === activeOtp ? otpBoxReference : null}
          onChange={(e) => handleChange(e.target.value, idx)}
        />
      ))}
    </div>
  );
}

export default OtpInput;
