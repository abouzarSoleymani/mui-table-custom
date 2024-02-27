import {Skeleton} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const TableLoadingSkeleton = ({columns}) => {
    return(
        <TableRow>
            {columns.map(column => (<TableCell>
                    <Skeleton height={50} animation="wave"  />
                    <Skeleton height={50} animation="wave" />
                    <Skeleton height={50} animation="wave"   />
                </TableCell>)
            )}
        </TableRow>


    )
}