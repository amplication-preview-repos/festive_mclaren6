import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="lastLogin" source="lastLogin" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="profilePicture" source="profilePicture" />
        <BooleanField label="twoFactorEnabled" source="twoFactorEnabled" />
        <TextField label="preferredLanguage" source="preferredLanguage" />
        <TextField label="timezone" source="timezone" />
      </Datagrid>
    </List>
  );
};
