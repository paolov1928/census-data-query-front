import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
})

function SimpleTable(props) {
  const { classes } = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Variable</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Average Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stats.map(stat => (
            <TableRow key={props.stats.indexOf(stat)}>
              <TableCell component="th" scope="stat">
                {stat.Variable}
              </TableCell>
              <TableCell align="right">{stat.Count}</TableCell>
              <TableCell align="right">{stat.Average_Age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTable)
