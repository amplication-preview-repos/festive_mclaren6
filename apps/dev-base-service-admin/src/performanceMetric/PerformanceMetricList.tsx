import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PerformanceMetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PerformanceMetrics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="metricName" source="metricName" />
        <TextField label="value" source="value" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="context" source="context" />
      </Datagrid>
    </List>
  );
};
