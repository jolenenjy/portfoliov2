import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (x, y, radius, color, ctx) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 300;
    let frameCount = 0;
    let animationFrameId;

    var mouse = {
      x: undefined,
      y: undefined,
    };

    canvas.addEventListener("mousemove", function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    canvas.addEventListener("mouseleave", function () {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    var colorArray = [
      "rgb(255,255,255, 0.3)",
      "rgb(255,255,255, 0.2)",
      "rgb(255,255,255, 0.1)",
      "rgb(255,255,255, 0.05)",
    ];

    function Circle(x, y, dx, dy, radius, color) {
      draw(x, y, radius, color, context, frameCount);

      this.update = function () {
        var maxRadius = Math.random() * (18 - 2) + 2;
        var minRadius = 2;
        if (x + radius > canvas.width || x - radius < 0) {
          dx = -dx;
        }
        if (y + radius > canvas.height || y - radius < 0) {
          dy = -dy;
        }
        x += dx;
        y += dy;

        if (
          mouse.x - x < 50 &&
          mouse.x - x > -50 &&
          mouse.y - y < 50 &&
          mouse.y - y > -50
        ) {
          if (radius < maxRadius) {
            radius += 1;
          }
        } else if (radius > minRadius) {
          radius -= 1;
        }

        draw(x, y, radius, color, context);
      };
    }

    var circleArray = [];

    for (var i = 0; i < 200; i++) {
      var radius = 30;
      var x = Math.random() * (canvas.width - radius * 2) + radius;
      var y = Math.random() * (canvas.height - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 1;
      var dy = (Math.random() - 0.5) * 1;
      var color = colorArray[Math.floor(Math.random() * colorArray.length)];

      circleArray.push(new Circle(x, y, dx, dy, radius, color));
    }

    function animatec() {
      requestAnimationFrame(animatec);
      frameCount++;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    animatec();

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

export default Canvas;
