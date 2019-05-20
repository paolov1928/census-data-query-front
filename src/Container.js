import React, { Component } from "react"
import Api from "./Api"
import Table from "./Table"
import Dropdown from "./Dropdown"

class Container extends Component {
  state = {}

  handleQueryChange = newQuery => {
    Api.queryDB(newQuery).then(d => this.setState({ stats: d }))
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown handleQueryChange={this.handleQueryChange} />
        {this.state.stats ? <Table stats={this.state.stats} /> : " "}
      </React.Fragment>
    )
  }
}

export default Container
