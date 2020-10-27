import React, { useRef, useEffect } from "react";

const Canvas2 = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.stroke();
    for (var i = 0; i < 3; i++) {
      var x = Math.random() * ctx.canvas.width;
      var y = Math.random() * ctx.canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 20 * Math.sin(5 * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      // frameCount++;
      draw(context, frameCount);
      // animationFrameId = window.requestAnimationFrame(render);
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

export default Canvas2;
