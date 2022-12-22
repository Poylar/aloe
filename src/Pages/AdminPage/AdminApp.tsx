import {
  FirebaseCMSApp,
  SnackbarProvider,
  buildCollection,
  buildProperty,
} from '@camberi/firecms';
import React from 'react';

import { IEmailItem } from '../../App.types';
import firebase from '../../Database/Firebase';
import { ISheetPageData, ITeamPageData } from '../FrontPage/FrontPage.types';

const FrontPageCollection = buildCollection<ISheetPageData | ITeamPageData>({
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
          image: buildProperty({
            dataType: 'string',
            name: 'image',
            storage: {
              mediaType: 'image',
              storagePath: 'images',
              acceptedFiles: ['image/*'],
              metadata: {
                cacheControl: 'max-age=1000000',
              },
            },
            description: 'Upload field for images',
          }),
          name: {
            name: 'name',
            dataType: 'string',
          },
          desc: {
            name: 'desc',
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

const EmailsCollection = buildCollection<{ emails: Array<IEmailItem> }>({
  name: 'Emails',
  singularName: 'Emails',
  path: 'Emails',
  properties: {
    emails: {
      name: 'emails',
      dataType: 'array',
      of: {
        dataType: 'map',
        properties: {
          email: {
            name: 'email',
            dataType: 'string',
          },
          time: {
            name: 'time',
            dataType: 'string',
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
      collections={[FrontPageCollection, EmailsCollection]}
      firebaseConfig={firebase.firebaseConfig}
    />
  </SnackbarProvider>
);

export default AdminApp;
