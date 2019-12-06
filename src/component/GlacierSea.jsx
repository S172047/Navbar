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

      let GlacierSizedata = this.props.Glacierdata.filter(x => x.Year > 1945);
      let SeaLeveldata = this.props.SeaLeveldata.filter(x => parseInt (x.Time) >1945);

      let series = [
        {
          name: "Glacier Data",
          data: [],
          color: "green"
        },

        {
          name: "Sea Level Data",
          data: [],
          color: "blue"
        }
      ];

      GlacierSizedata.map(data => series[1].data.push ({
        Year: data.Year,
        value: data ["Mean cumulative mass balance"]
      })
      );

      SeaLeveldata.map(data => series [0].data. push ({
        Year: parseInt(data.Time),
        value: data.GMSL
      })
      );

      console.log(series);




    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Korrelation mellan minskning av glaciärer och havsytans ökning
        </p>

        <LineChart
          width={1400}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>

          <XAxis dataKey="Year" type="Year"></XAxis>
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend verticalAlign="top" />

          {series.map (s => (

          <Line
            type="monotone"
            dataKey="value"
            data={s.data}
            name="Glacier"
            key={s.name}
            stroke={s.color}
            activeDot={{ r: 8 }}
          />

          <Line
          type="monotone"
            dataKey="value"
            data={s.data}
            name="Sea Level"
            key={s.name}
            stroke={s.color}

          />
          );

        </Line>
          </React.Fragment>
        );
      }
    }
    
    export default GlacierSea;