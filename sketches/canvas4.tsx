import React, { useRef, useEffect } from "react";

const Canvas4 = (props) => {
  const canvasRef = useRef(null);
  const lines = [];
  var mouseX = 1;
  var mouseY = 1;
  var step = 0;

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "rgba(40, 60, 140, 0.2)";

    lines.forEach((line) => {
      ctx.beginPath();

      line.points.forEach((point) => {
        (point.x = point.nx),
          (point.y =
            point.ny +
            Math.sin((point.x * line.ran + (step + point.ny)) / 30) *
              (6 + (point.ny / ctx.canvas.height) * 34));
      });

      line.points.forEach((point, h) => {
        let nextPoint = line.points[h + 1];

        if (h === 0) {
          ctx.moveTo(point.x, point.y);
        } else if (nextPoint) {
          let cpx = point.x + (nextPoint.x - point.x) / 2;
          let cpy = point.y + (nextPoint.y - point.y) / 2;
          ctx.quadraticCurveTo(point.x, point.y, cpx, cpy);
        }
      });

      ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
      ctx.lineTo(0, ctx.canvas.height);

      ctx.closePath();

      ctx.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 300;
    let halfHeight = canvas.height / 2;
    let animationFrameId;

    lines.length = 0;

    let lineCount = halfHeight / 40;
    let pointCount = 12;
    let spacingH = canvas.width / pointCount;
    let spacingV = halfHeight / lineCount - 16;

    for (let v = 0; v < lineCount; v++) {
      let line = {
        points: [],
        ran: 0.3 + (Math.random() * (1 - 0.6) + 0.1) * 0.6,
      };

      for (let h = 0; h < pointCount; h++) {
        line.points.push({
          nx: h * spacingH,
          ny: v * spacingV + halfHeight,
        });
      }

      line.points.push({
        nx: canvas.width + spacingH,
        ny: v * spacingV + halfHeight,
      });

      lines.push(line);
    }

    canvas.onmousemove = function (e) {
      mouseX = Math.floor(e.offsetX / 20);
      mouseY = Math.floor(e.offsetY / 20);
    };
    canvas.onmouseleave = function () {
      mouseX = 1;
      mouseY = 1;
    };

    const render = () => {
      step += mouseY * 0.4;
      draw(context);
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

export default Canvas4;
