"use client";
import { useState } from "react";
import { Button, Input } from "pixel-retroui";

export default function Login() {
  const [step, setStep] = useState(1); // Step to track the current form step
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    setStep(2); // Move to password step
  };

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here, like an API call
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className={"container"}>
      {step === 1 ? (
        // Step 1: Ask for email
        <form className={"form"} onSubmit={handleEmailSubmit}>
          <h2 className={"main-paragraph"}>Great to see you again! 😊</h2>

          <label htmlFor="email" className={"label"}>
            <div className="label-text">What was your email again, buddy?</div>
            <Input
              id="email"
              value={email}
              type="email"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" w-[350px] text-base "
            />
          </label>

          <Button type="submit" className={"submitBtn"}>
            Next
          </Button>
        </form>
      ) : (
        // Step 2: Ask for password
        <form className={"form"} onSubmit={handlePasswordSubmit}>
          <h2 className={"main-paragraph"}>Almost there! 🔒</h2>

          <label htmlFor="password" className={"label"}>
            <div className="label-text">
              And your super secret password, please!
            </div>
            <Input
              type="password"
              id="password"
              className=" w-[350px] text-base"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <Button type="submit" className={"submitBtn"}>
            Let's Go!
          </Button>
        </form>
      )}
    </div>
  );
}
