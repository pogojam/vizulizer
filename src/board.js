import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "rebass";

export const Bord = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const columns = 1000;
  const rows = 500;

  const marginX = width / 4;
  const marginY = height / 3;
  const pixelWidth = 10;
  const pixelHeight = 10;
  const boxWidth = width - marginX * 2;

  const pixels = [...Array(columns * rows)].map(
    (e, i) =>
      new Pixil(pixelWidth, pixelHeight, marginX + i * pixelWidth, marginY)
  );

  console.log(pixels);

  useEffect(() => {
    const can = document.getElementById("Board");
    const ctx = can.getContext("2d");

    const step = () => {
      const posX = 2;
      const posY = height / 100;

      pixels.forEach(px => {
        px.update(ctx);
      });

      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  });

  return <canvas id="Board" width={width} height={height} />;
};

function Pixil(pixelWidth, pxHeight, x, y) {
  this.update = ctx => {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 10, 10);
  };
}
