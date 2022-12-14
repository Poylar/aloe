import React from 'react';
import {
  Admin,
  ArrayField,
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  List,
  Resource,
  Show,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';
import { FirebaseDataProvider } from 'react-admin-firebase';

import firebase from '../../Database/Firebase';

const dataProvider = FirebaseDataProvider(firebase.firebaseConfig, {});

const FrontpageList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='description' />
      <ArrayField source='cards'>
        <Datagrid>
          <TextField source='tags' />
          <TextField source='title' />
          <TextField source='description' />
          <TextField source='cardButton.element' />
          <TextField source='cardButton.name' />
          <TextField source='cardButton.archon' />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const FrontpageShow = (props: any) => (
  <Show {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='description' />
      <ArrayField source='cards'>
        <Datagrid>
          <TextField source='tags' />
          <TextField source='title' />
          <TextField source='description' />
          <TextField source='cardButton.element' />
          <TextField source='cardButton.name' />
          <TextField source='cardButton.archon' />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </Show>
);

const FrontpageCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='id' multiline />
      <TextInput source='title' multiline />
      <TextInput source='description' multiline />
      <ArrayField source='cards'>
        <Datagrid>
          <TextInput source='tags' multiline />
          <TextInput source='title' multiline />
          <TextInput source='description' multiline />
          <TextInput source='cardButton.element' multiline />
          <TextInput source='cardButton.name' multiline />
          <TextInput source='cardButton.archon' multiline />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ArrayField>
    </SimpleForm>
  </Create>
);

const FrontpageEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='id' multiline />
      <TextInput source='title' multiline />
      <TextInput source='description' multiline />
      <ArrayField source='cards'>
        <Datagrid>
          <TextInput source='tags' multiline />
          <TextInput source='title' multiline />
          <TextInput source='description' multiline />
          <TextInput source='cardButton.element' multiline />
          <TextInput source='cardButton.name' multiline />
          <TextInput source='cardButton.archon' multiline />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ArrayField>
    </SimpleForm>
  </Edit>
);

const AdminPage = () => (
  <Admin title='admin' dataProvider={dataProvider}>
    <Resource
      name='FrontPage'
      list={FrontpageList}
      show={FrontpageShow}
      create={FrontpageCreate}
      edit={FrontpageEdit}
    />
  </Admin>
);

export default AdminPage;
