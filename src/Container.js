import React, { Component } from "react"
import Api from "./Api"
import StatsTable from "./StatsTable"
import TableExample from "./TableExample"
import DropdownExample from "./DropdownExample"

class StatContainer extends Component {
  state = {}
  // why is it pulling multiple times

  handleQueryChange = newQuery => {
    Api.queryDB(newQuery).then(d => this.setState({ stats: d }))
  }

  render() {
    return (
      <React.Fragment>
        <DropdownExample handleQueryChange={this.handleQueryChange} />
        {this.state.stats ? (
          <TableExample stats={this.state.stats} />
        ) : (
          "tableExample"
        )}
      </React.Fragment>
    )
  }
}

export default StatContainer
