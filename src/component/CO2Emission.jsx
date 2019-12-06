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

class CO2Emission extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          CO2 Emission (million metric tons)
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
          <Line type="monotone" dataKey="Gas Fuel" name="Gasbränsle" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Liquid Fuel" name="Flytande bränsle" stroke="orange" />
          <Line type="monotone" dataKey="Solid Fuel" name= "Fast bränsle" stroke="blue" />
          <Line type="monotone" dataKey="Cement" stroke="black" />
          <Line type="monotone" dataKey="Gas Flaring" name="Gas fackling" stroke="maroon" />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default CO2Emission;