import React, { useRef, useEffect } from "react";

const Canvas6 = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    var context = canvas.getContext("2d");
    canvas.width = 35;
    canvas.height = 14;

    var col = function (x, y, r, g, b) {
      context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      context.fillRect(x, y, 1, 1);
    };

    var R = function (x, y, t) {
      return Math.floor(180 + 100 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x, y, t) {
      return Math.floor(
        180 +
          84 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x, y, t) {
      return Math.floor(
        180 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var t = 0;

    var run = function () {
      for (let x = 0; x <= 40; x++) {
        for (let y = 0; y <= 40; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.05;
      window.requestAnimationFrame(run);
    };

    run();
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

export default Canvas6;
