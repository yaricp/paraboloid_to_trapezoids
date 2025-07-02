import React, { useEffect, useRef } from "react";

type ResultPictureType = {
  height_trap: number;
  base1: number;
  base2: number;
  max_length: number;
};

const ResultPicture = (props: ResultPictureType) => {
  const { height_trap, base1, base2, max_length } = props;
  const canvasRef = useRef(null);
  const width = 200;
  const height = 200;

  const draw = (ctx: any) => {
    const y_border = height * 10 / 100;
    const x_center = width / 2;
    const y_center = height / 2;
    const height_coeff = (height - (2 * y_border)) / max_length;
    const height_trap_pic = height_trap * height_coeff;
    const base1_length = base1 * height_coeff;
    const base2_length = base2 * height_coeff;

    ctx.beginPath();
    ctx.arc(x_center, y_center, 4, 0, 2 * Math.PI);
    ctx.moveTo(x_center, y_center - (height_trap_pic / 2));
    ctx.lineTo(x_center, y_center + (height_trap_pic / 2));
    ctx.moveTo(x_center - (base1_length/2), y_center - (height_trap_pic / 2));
    ctx.lineTo(x_center + (base1_length/2), y_center - (height_trap_pic / 2));
    ctx.moveTo(x_center - (base2_length/2), y_center + (height_trap_pic / 2));
    ctx.lineTo(x_center + (base2_length/2), y_center + (height_trap_pic / 2));
    ctx.moveTo(x_center - (base1_length/2), y_center - (height_trap_pic / 2));
    ctx.lineTo(x_center - (base2_length/2), y_center + (height_trap_pic / 2));
    ctx.moveTo(x_center + (base1_length/2), y_center - (height_trap_pic / 2));
    ctx.lineTo(x_center + (base2_length/2), y_center + (height_trap_pic / 2));
    ctx.stroke();
  }

  useEffect(
    () => {
        const canvas: any = canvasRef.current;
        if (canvas){
            const context = canvas.getContext('2d');
            draw(context)
        }
        
    },[draw]
);


  return (
    <>
        <canvas ref={canvasRef} width={width} height={height} />;
    </>
  );
}

export default ResultPicture;