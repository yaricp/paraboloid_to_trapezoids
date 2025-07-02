import React from "react";
import ResultPicture from "./ResultPicture";

type RowResultType = {
  layer: number;
  height: number;
  base1: number;
  base2: number;
  max_length: number;
};

const RowResult = (props: RowResultType) => {
  const { layer, height, base1, base2, max_length } = props;

  return (
    <>
      <tr>
        <td>{layer}</td>
        <td>{height}</td>
        <td>{base1}</td>
        <td>{base2}</td>
        <td>
          <ResultPicture 
            height_trap={height}
            base1={base1} 
            base2={base2}
            max_length={max_length}
          />
        </td>
      </tr>
    </>
  );
}

export default RowResult;