import React, { Component } from "react";
import { Link } from "react-router-dom";
class CO2List extends Component {
  render() {
    let CO2EmissionData = this.props.CO2data;
    CO2EmissionData = CO2EmissionData.sort((a, b) =>
      a.Year < b.Year ? 1 : b.Year < a.Year ? -1 : 0
    );
    if (CO2EmissionData.length === 0) return <p>Det finns ingen data</p>;

    return (
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Å<img src="" alt="" sizes="" srcset=""/></th>
            <th>Total</th>
            <th>Gas bränsle</th>
            <th>Flytande bränsle</th>
            <th>Fast bränsle</th>
            <th>Cement</th>
            <th>Brinnande gas</th>
            <th>Per Invånare</th>
          </tr>
        </thead>
        <tbody>
          {CO2EmissionData.map(co2 => (
            <tr key={co2.Year}>
              <td>
                <Link to={"/co2/" + co2.Year}>{co2.Year}</Link>
              </td>
              <td>{co2["Total"]}</td>
              <td>{co2["Gas Fuel"]}</td>
              <td>{co2["Liquid Fuel"]}</td>
              <td>{co2["Solid Fuel"]}</td>
              <td>{co2["Cement"]}</td>
              <td>{co2["Gas Flaring"]}</td>
              <td>{co2["Per Capita"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CO2List;
