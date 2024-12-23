"use client";
import { useState } from "react";
import { Bubble, Button, Input } from "pixel-retroui";

export default function Registration() {
  const [step, setStep] = useState(1); // Step to track the current form step
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to password step
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Move to username step
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Move to avatar selection step
  };

  const handleAvatarSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., API call
    alert(
      `Email: ${email}\nPassword: ${password}\nUsername: ${username}\nAvatar: ${avatar}`
    );
  };

  const avatars = [
    { image: "/assets/images/avatars/1-drunk-man.png", name: "Tipsy Tom" },
  ];

  const nextAvatar = () => {
    setCurrentAvatarIndex((prevIndex) =>
      prevIndex < avatars.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevAvatar = () => {
    setCurrentAvatarIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : avatars.length - 1
    );
  };

  return (
    <div className={"container"}>
      {step === 1 ? (
        <form className={"form"} onSubmit={handleEmailSubmit}>
          <h2 className={"main-paragraph"}>Welcome to the Quest! 😊</h2>
          <label htmlFor="email" className={"label"}>
            <div className="label-text">To get started, we need your email</div>
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
      ) : step === 2 ? (
        <form className={"form"} onSubmit={handlePasswordSubmit}>
          <h2 className={"main-paragraph"}>Almost there! 🔒</h2>
          <label htmlFor="password" className={"label"}>
            <div className="label-text">And now a super secret password</div>
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
          <div className="flex justify-between">
            <Button className={"backBtn"} onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" className={"submitBtn"}>
              Next
            </Button>
          </div>
        </form>
      ) : step === 3 ? (
        <form className={"form"} onSubmit={handleUsernameSubmit}>
          <h2 className={"main-paragraph"}>Choose a hero name 🧑</h2>
          <label htmlFor="username" className={"label"}>
            <div className="label-text">What will your username be?</div>
            <Input
              type="text"
              id="username"
              className=" w-[350px] text-base"
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <Button type="submit" className={"submitBtn"}>
            Next
          </Button>
        </form>
      ) : step === 4 ? (
        <form className={"form"} onSubmit={handleAvatarSubmit}>
          <h2 className={"main-paragraph"}>Choose your Avatar! 🧑</h2>
          <div className="avatar-selector flex items-center justify-center gap-24">
            <Button onClick={prevAvatar} className="arrowBtn">
              ←
            </Button>
            <div className="avatar-image-container">
              <div className="avatar-with-ground flex justify-center items-center flex-col">
                <div className="relative w-full">
                  <img
                    src={avatars[currentAvatarIndex]?.image}
                    alt={avatars[currentAvatarIndex]?.name}
                    className="avatar-image mb-[-10px]"
                  />
                  <Bubble
                    className="absolute top-[-30px] right-[-180px] w-[300px]"
                    direction="left"
                  >
                    Hello, I'm {avatars[currentAvatarIndex].name}. You must be
                    the new hero! {username} is it?
                  </Bubble>
                </div>

                <img
                  src="/assets/images/environment/floating-ground.png" // Ground image path
                  alt="Ground"
                  className="ground-image w-[300px]"
                />
              </div>
            </div>
            <Button onClick={nextAvatar} className="arrowBtn">
              →
            </Button>
          </div>
          <Button type="submit" className={"submitBtn"}>
            Register
          </Button>
        </form>
      ) : (
        <div>
          <h2 className={"title"}>Registration Completed! 🎉</h2>
          <p>Your registration is complete. Welcome aboard!</p>
        </div>
      )}
    </div>
  );
}
