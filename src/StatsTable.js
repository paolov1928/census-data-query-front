import React, { Component } from "react"

class StatsTable extends Component {
  render() {
    return (
      <div className="Table">
        {this.props.stats
          ? this.props.stats.map(stat => {
              return (
                <tr>
                  <td>{stat.Variable}</td> <td>{stat.Count}</td>{" "}
                  <td>{stat.Average_Age}</td>{" "}
                </tr>
              )
            })
          : "Stats Container"}
      </div>
    )
  }
}

export default StatsTable
