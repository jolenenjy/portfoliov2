import React, { useRef, useEffect } from "react";

const Canvas3 = (props) => {
  const canvasRef = useRef(null);
  var size = 3;
  var mouseX = undefined;
  var mouseY = undefined;

  const draw = (ctx, size, alpha) => {
    for (var i = 1; i < 40; i++) {
      for (var j = 1; j < 15; j++) {
        ctx.beginPath();
        ctx.rect(20 * i, 20 * j, size, size);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";

        if (
          (i == mouseX && j == mouseY) ||
          (i - 1 == mouseX && j == mouseY) ||
          (i - 2 == mouseX && j == mouseY) ||
          (i == mouseX && j - 1 == mouseY) ||
          (i - 1 == mouseX && j - 1 == mouseY) ||
          (i - 2 == mouseX && j - 1 == mouseY) ||
          (i == mouseX && j - 2 == mouseY) ||
          (i - 1 == mouseX && j - 2 == mouseY) ||
          (i - 2 == mouseX && j - 2 == mouseY)
        ) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
          ctx.rect(20 * i, 20 * j, 5, 5);
        }

        ctx.fill();
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 300;

    let animationFrameId;
    canvas.onmousemove = function (e) {
      mouseX = Math.floor(e.offsetX / 20);
      mouseY = Math.floor(e.offsetY / 20);
    };
    canvas.onmouseleave = function () {
      mouseX = undefined;
      mouseY = undefined;
    };

    let alpha = 0.2;
    let dx = 0.002;

    const render = () => {
      if (alpha > 0.3) {
        dx = -dx;
      }
      if (alpha < 0.1) {
        dx = 0.002;
      }
      alpha += dx;

      context.clearRect(0, 0, canvas.width, canvas.height);
      draw(context, size, alpha);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

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

export default Canvas3;
