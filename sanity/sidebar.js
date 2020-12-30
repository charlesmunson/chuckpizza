import React, { Children } from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom side bar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
