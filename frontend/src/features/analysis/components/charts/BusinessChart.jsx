// features/analysis/components/charts/BiologyChart.jsx
import React from "react";


function getWaffleData(values, colors, totalSquares = 100) {
  const total = values.reduce((a, b) => a + b, 0);
  const squares = values.map(val => Math.round((val / total) * totalSquares));
  let sum = squares.reduce((a, b) => a + b, 0);
  squares[squares.length - 1] += totalSquares - sum;
  let grid = [];
  squares.forEach((count, idx) => {
    for (let i = 0; i < count; i++) {
      grid.push(colors[idx]);
    }
  });
  return grid;
}

const WaffleChart = ({
  values = [0, 0], // default to zeros
  colors = ["DarkKhaki", "DarkOliveGreen"],
  labels = [
    "People who actually became ",
    "People who majored in Biology"
  ],
  rows = 10,
  columns = 10,
  size = 20,
  gap = 2
}) => {
  const grid = getWaffleData(values, colors, rows * columns);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${rows}, ${size}px)`,
          gridTemplateColumns: `repeat(${columns}, ${size}px)`,
          gap: gap
        }}
      >
        {grid.map((color, idx) => (
          <div
            key={idx}
            style={{
              background: color,
              width: size,
              height: size,
              borderRadius: 3
            }}
            title={labels[colors.indexOf(color)]}
          />
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        {labels.map((label, idx) => (
          <div key={label} style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
            <div style={{
              width: 16,
              height: 16,
              background: colors[idx],
              marginRight: 8,
              borderRadius: 3
            }} />
            <span>
              {label}: {values[idx]} ({((values[idx] / values.reduce((a, b) => a + b, 0)) * 100).toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaffleChart;
