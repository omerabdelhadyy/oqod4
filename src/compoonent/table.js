import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "100%",
    // height: 200,
    // marginTop: theme.spacing.unit * 3,
    // overflowX: "auto",
  },
  table: {
    Width: "100%",

    // minWidth: "100%",
    // minHeight: "50%",
    // height: "10%",
    backgroundColor: "#fff",
    // overflow: "hidden",
  },
});

let id = 0;

function SimpleTable(props) {
  const { classes, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 10 }}>QTY</TableCell>
            <TableCell style={{ fontSize: 10 }} align="right">
              BID
            </TableCell>
            <TableCell style={{ fontSize: 10 }} align="right">
              Ask
            </TableCell>
            <TableCell style={{ fontSize: 10 }} align="right">
              QTY
            </TableCell>
            {/* <TableCell align="right"> quantity</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                component="th"
                scope="row"
                style={{ color: "#80848E", fontSize: 10 }}
              >
                {row.QTY}
              </TableCell>
              <TableCell
                style={{ color: "#80848E", fontSize: 10 }}
                align="right"
              >
                {row?.BID}
              </TableCell>
              <TableCell
                style={{ color: "#80848E", fontSize: 10 }}
                align="right"
              >
                {row?.Ask}
              </TableCell>
              <TableCell
                style={{ color: "#80848E", fontSize: 10 }}
                align="right"
              >
                {row?.QTY}
              </TableCell>
              {/* <TableCell align="right">{row.Record.quantity}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
