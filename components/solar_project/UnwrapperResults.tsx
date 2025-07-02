import RowResult from "./RowResults";

type ResultDataType = {
  number_sectors: number;
  heights_array: number[];
  bases_array: number[];
  focal_length: number;
  max_radius: number;
  size_body: number;
};

const UnwrapperResults = (props: ResultDataType) => {
  const {
    number_sectors,
    heights_array,
    bases_array,
    focal_length,
    max_radius,
    size_body 
  } = props;
  const max_length = Math.max(...heights_array);
  const heights_trapez_array = heights_array;
  const bases_trapez_array = bases_array;
  let trapezoids = [];
  for (let idx=0; idx < heights_trapez_array.length; idx++) {
    trapezoids.push({
      "id": idx,
      "layer": idx + 1,
      "height": heights_trapez_array[idx],
      "base1": bases_trapez_array[idx],
      "base2": bases_trapez_array[idx + 1]
    })
  }
  const listItems = trapezoids.map(
    trap => <RowResult 
      key={trap.id}
      layer={trap.layer}
      height={trap.height}
      base1={trap.base1}
      base2={trap.base2}
      max_length={max_length}
      />
  );

  return (
    <>
      <h1>Results Wrapper</h1>
      <p>Focal length: {focal_length}</p>
      <p>Max Radius: {max_radius}</p>
      <p>Size Body: {size_body}</p>
      <p>Area: {(Math.PI * max_radius * max_radius).toFixed(3)}</p>
      <p>Number sectors: {number_sectors}</p>
      <p></p>
      <table>
        <thead>
          <tr>
            <th>Layer</th>
            <th>height</th>
            <th>base1</th>
            <th>base2</th>
            <th>pic</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </>
  );
}

export default UnwrapperResults;