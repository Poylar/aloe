import {
  FirebaseCMSApp,
  SnackbarProvider,
  buildCollection,
} from '@camberi/firecms';
import React from 'react';

import firebase from '../../Database/Firebase';
import { ISheetPageData } from '../FrontPage/FrontPage.types';

const FrontPageCollection = buildCollection<ISheetPageData>({
  name: 'FrontPage',
  singularName: 'FrontPage',
  path: 'FrontPage',
  properties: {
    id: {
      name: 'id',
      dataType: 'string',
      hideFromCollection: true,
    },
    title: {
      name: 'title',
      dataType: 'string',
    },
    description: {
      name: 'description',
      dataType: 'string',
    },
    cards: {
      dataType: 'array',
      name: 'cards',
      of: {
        dataType: 'map',
        properties: {
          tags: {
            dataType: 'array',
            name: 'tags',
            of: {
              dataType: 'string',
            },
          },
          title: {
            name: 'title',
            dataType: 'string',
          },
          description: {
            name: 'description',
            dataType: 'string',
          },
          cardButton: {
            name: 'cardButton',
            dataType: 'map',
            properties: {
              element: {
                name: 'element',
                dataType: 'string',
              },
              archon: {
                name: 'archon',
                dataType: 'string',
              },
              name: {
                name: 'name',
                dataType: 'string',
              },
            },
          },
        },
      },
    },
  },
});

const AdminApp = () => (
  <SnackbarProvider>
    <FirebaseCMSApp
      basePath='/admin'
      name='admin page'
      collections={[FrontPageCollection]}
      firebaseConfig={firebase.firebaseConfig}
    />
  </SnackbarProvider>
);

export default AdminApp;
