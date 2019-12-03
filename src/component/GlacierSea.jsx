import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

class GlacierSea extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Korrelation mellan minskning av glaciärer och havsytans ökning
        </p>
        <LineChart
          width={1400}
          height={500}
          data={this.props.CO2data}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>

          <XAxis dataKey="Year"></XAxis>
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Mean cumulative mass balance" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Time" stroke="orange" />
         
        </LineChart>
      </React.Fragment>
    );
  }
}

export default GlacierSea;
