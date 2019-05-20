import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const selection = [
  "age",
  "education",
  "sex",
  "fulltime",
  "weight",
  "citizenship",
  "year"
]

class SimpleSelect extends React.Component {
  state = {
    age: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    this.props.handleQueryChange(event.target.value)
  }

  renderSelectionOptions = () => {
    return selection.map(query => {
      return <MenuItem value={query}>{query}</MenuItem>
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Pick a Statistic</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            {this.renderSelectionOptions()}
          </Select>
        </FormControl>
      </Paper>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleSelect)
