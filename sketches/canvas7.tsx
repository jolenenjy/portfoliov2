import React, { useRef, useEffect } from "react";

const Canvas7 = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    var context = canvas.getContext("2d");
    canvas.height = 300;
    canvas.width = 800;

    let r = 0;
    let g = 127;
    let b = 255;
    let shouldInc = true;

    let draw = function draw() {
      if (g === 255) shouldInc = false;
      if (g === 0) shouldInc = true;
      shouldInc ? r++ : r--;
      shouldInc ? g++ : g--;
      shouldInc ? b++ : b--;
      let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(
        0,
        "rgb(" + Math.abs(r) + ", " + Math.abs(g) + ", " + Math.abs(b) + ")"
      );
      gradient.addColorStop(
        1,
        "rgb(" +
          Math.abs(255 - r) +
          ", " +
          Math.abs(255 - g) +
          ", " +
          Math.abs(255 - b) +
          ")"
      );

      context.save();
      context.fillStyle = gradient;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();
      window.requestAnimationFrame(draw);
    };

    draw();
  });

  return (
    <canvas
      ref={canvasRef}
      {...props}
      style={{
        background: "rgb(13, 13, 33)",
        width: "100%",
        height: "auto",
        borderRadius: 12,
      }}
    />
  );
};

export default Canvas7;
