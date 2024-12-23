"use client";
import { useState } from "react";
import { Button } from "pixel-retroui";

export default function AvatarMaker() {
  const [headIndex, setHeadIndex] = useState(0);
  const [hairstyleIndex, setHairstyleIndex] = useState(0);
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  const heads = ["head1", "head2", "head3"];
  const hairstyles = ["hairstyle1", "hairstyle2", "hairstyle3"];
  const tops = ["top1", "top2", "top3"];
  const bottoms = ["bottom1", "bottom2", "bottom3"];

  return (
    <div className="avatar-maker-container">
      <div className="avatar">
        <div className={`head ${heads[headIndex]}`}></div>
        <div className={`hairstyle ${hairstyles[hairstyleIndex]}`}></div>
        <div className={`top ${tops[topIndex]}`}></div>
        <div className={`bottom ${bottoms[bottomIndex]}`}></div>
      </div>

      <div className="controls">
        <button
          className="arrow left"
          onClick={() =>
            setHeadIndex((prev) => (prev - 1 + heads.length) % heads.length)
          }
        >
          &#8592;
        </button>
        <button
          className="arrow right"
          onClick={() => setHeadIndex((prev) => (prev + 1) % heads.length)}
        >
          &#8594;
        </button>
      </div>

      <div className="controls">
        <button
          className="arrow left"
          onClick={() =>
            setHairstyleIndex(
              (prev) => (prev - 1 + hairstyles.length) % hairstyles.length
            )
          }
        >
          &#8592;
        </button>
        <button
          className="arrow right"
          onClick={() =>
            setHairstyleIndex((prev) => (prev + 1) % hairstyles.length)
          }
        >
          &#8594;
        </button>
      </div>

      <div className="controls">
        <button
          className="arrow left"
          onClick={() =>
            setTopIndex((prev) => (prev - 1 + tops.length) % tops.length)
          }
        >
          &#8592;
        </button>
        <button
          className="arrow right"
          onClick={() => setTopIndex((prev) => (prev + 1) % tops.length)}
        >
          &#8594;
        </button>
      </div>

      <div className="controls">
        <button
          className="arrow left"
          onClick={() =>
            setBottomIndex(
              (prev) => (prev - 1 + bottoms.length) % bottoms.length
            )
          }
        >
          &#8592;
        </button>
        <button
          className="arrow right"
          onClick={() => setBottomIndex((prev) => (prev + 1) % bottoms.length)}
        >
          &#8594;
        </button>
      </div>

      <Button
        type="button"
        className={"submitBtn"}
        onClick={() => alert("Avatar Selected!")}
      >
        Confirm Avatar
      </Button>
    </div>
  );
}
