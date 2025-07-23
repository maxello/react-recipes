import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
import type { IngredientTableCols, IngredientTableRows } from "../types";

export default function IngredientTable({
  rows, 
  cols
}: {
  rows: IngredientTableRows[],
  cols: IngredientTableCols[]
}) {
  return (
    <Table aria-label="Ingredient table">
      <TableHeader columns={cols}>
        {(column) => <TableColumn className="uppercase" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
