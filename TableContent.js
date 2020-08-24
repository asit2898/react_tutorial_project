
{/*
This is a component that expects props of the following type:
{tableHeading: " Heading ",
tableColumns: ["col1", "col2",....]
getTableItems: ()
setTableItem: (index)
deleteTableItem:()
createTableItem:()
}
*/}

function preventDefault(event) {
    event.preventDefault();
  }
  
  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));
  
  export default function TableContents(props) {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Title>{props.tableHeading}</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </React.Fragment>
    );
  }
