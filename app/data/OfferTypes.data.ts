// https://qforgqa0.sharepoint.com/Privilegeportal/_api/web/lists/getByTitle('OfferTypesConfiguration')/items?$select=Id%2CId%2CTitle%2CTitle_Ar%2CCategory%2COrder0%2CIsActive&$expand=&$filter=IsActive%20eq%201&$orderby=Order0%20asc&$top=4999
export const mockOfferTypesConfigurationAPI = {
  'odata.metadata':
    'https://qforgqa0.sharepoint.com/PrivilegePortal/_api/$metadata#SP.ListData.OfferTypesConfigurationListItems&$select=Id,Id,Title,Title_Ar,Category,Order0,IsActive',
  value: [
    {
      'odata.type': 'SP.Data.OfferTypesConfigurationListItem',
      'odata.id': '26f56c24-547e-43bc-a9cf-13e010f444c3',
      'odata.etag': '"1"',
      'odata.editLink': "Web/Lists(guid'80506bcb-55e4-4b3e-a821-2e6e32a383d5')/Items(7)",
      Id: 7,
      Title: 'Qatar National Day Offer',
      Title_Ar:
        '\u0639\u0631\u0636 \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u062f\u0648\u0644\u0629 \u0642\u0637\u0631',
      Category: 'Qatar National Day Offer',
      Order0: 1.0,
      IsActive: true,
      ID: 7
    },
    {
      'odata.type': 'SP.Data.OfferTypesConfigurationListItem',
      'odata.id': '2fe4d629-e6c1-4fb8-bc9a-52a52676ae18',
      'odata.etag': '"2"',
      'odata.editLink': "Web/Lists(guid'80506bcb-55e4-4b3e-a821-2e6e32a383d5')/Items(3)",
      Id: 3,
      Title: 'Special Offers',
      Title_Ar: '\u0639\u0631\u0636 \u062e\u0627\u0635',
      Category: 'special offer',
      Order0: 2.0,
      IsActive: true,
      ID: 3
    },
    {
      'odata.type': 'SP.Data.OfferTypesConfigurationListItem',
      'odata.id': '59e3cfdc-9174-4b33-9c0a-8ce223814a73',
      'odata.etag': '"2"',
      'odata.editLink': "Web/Lists(guid'80506bcb-55e4-4b3e-a821-2e6e32a383d5')/Items(4)",
      Id: 4,
      Title: 'Temporary Offers',
      Title_Ar: '\u0639\u0631\u0648\u0636 \u0645\u0624\u0642\u062a\u0629',
      Category: 'temporary offers',
      Order0: 3.0,
      IsActive: true,
      ID: 4
    },
    {
      'odata.type': 'SP.Data.OfferTypesConfigurationListItem',
      'odata.id': '286dbf1b-6785-4f61-b941-925131f0f112',
      'odata.etag': '"2"',
      'odata.editLink': "Web/Lists(guid'80506bcb-55e4-4b3e-a821-2e6e32a383d5')/Items(5)",
      Id: 5,
      Title: 'Recently Added',
      Title_Ar: '\u0645\u0636\u0627\u0641\u0629 \u062d\u062f\u064a\u062b\u064b\u0627',
      Category: 'recently added',
      Order0: 4.0,
      IsActive: true,
      ID: 5
    },
    {
      'odata.type': 'SP.Data.OfferTypesConfigurationListItem',
      'odata.id': '3d4ac6b1-3b84-4b69-9fa5-1627427723c8',
      'odata.etag': '"2"',
      'odata.editLink': "Web/Lists(guid'80506bcb-55e4-4b3e-a821-2e6e32a383d5')/Items(1)",
      Id: 1,
      Title: 'Most Visited',
      Title_Ar: '\u0627\u0644\u0623\u0643\u062b\u0631 \u0632\u064a\u0627\u0631\u0629',
      Category: 'most visited',
      Order0: 5.0,
      IsActive: true,
      ID: 1
    }
  ]
};

// https://qforgqa0.sharepoint.com/Privilegeportal/_api/web/lists/getByTitle('offerTypes')/items?$select=Id%2CId%2COfferTypes%2CArabic&$expand=&$orderby=Id%20asc&$top=4999
export const mockOfferTypes = {
  'odata.metadata':
    'https://qforgqa0.sharepoint.com/PrivilegePortal/_api/$metadata#SP.ListData.OfferTypesListItems&$select=Id,Id,OfferTypes,Arabic',
  value: [
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': 'cbc429cf-29b3-436d-afcf-7801b9e0b565',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(1)",
      Id: 1,
      OfferTypes: 'General',
      Arabic: '\u0639\u0627\u0645',
      ID: 1
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '39bd93f2-b63e-4428-bb9b-f281750cd2cb',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(2)",
      Id: 2,
      OfferTypes: 'Special Offer',
      Arabic: '\u0639\u0631\u0636 \u062e\u0627\u0635',
      ID: 2
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '4ffd0861-7275-4623-a563-cd30ee44e694',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(3)",
      Id: 3,
      OfferTypes: 'Ramadan Offer',
      Arabic: '\u0639\u0631\u0648\u0636 \u0631\u0645\u0636\u0627\u0646 ',
      ID: 3
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '79d56371-6c18-4477-92ed-7f0ec710bee7',
      'odata.etag': '"7"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(4)",
      Id: 4,
      OfferTypes: 'Eid Al-Adha Offer',
      Arabic:
        '\u0639\u0631\u0636 \u0639\u064a\u062f \u0627\u0644\u0623\u0636\u062d\u0649',
      ID: 4
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '8b4e3c60-6d1b-465f-be1a-6b63da0ab220',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(5)",
      Id: 5,
      OfferTypes: 'Eid Al-Fitr Offer',
      Arabic: '\u0639\u0631\u0636 \u0639\u064a\u062f \u0627\u0644\u0641\u0637\u0631',
      ID: 5
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '5a389029-2870-4715-a847-94b6236dd35b',
      'odata.etag': '"4"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(6)",
      Id: 6,
      OfferTypes: 'Qatar National Day Offer',
      Arabic:
        '\u0639\u0631\u0636 \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064a \u0644\u062f\u0648\u0644\u0629 \u0642\u0637\u0631',
      ID: 6
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': 'e05d5f2e-f066-4194-a271-d06b7e661dd5',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(7)",
      Id: 7,
      OfferTypes: 'Qatar Sports Day Offer',
      Arabic:
        '\u0639\u0631\u0636 \u0627\u0644\u064a\u0648\u0645 \u0627\u0644\u0631\u064a\u0627\u0636\u064a \u0644\u0644\u062f\u0648\u0644\u0629',
      ID: 7
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '760c0b84-f935-404b-b546-5f972a7d7a18',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(8)",
      Id: 8,
      OfferTypes: 'Temporary Offers',
      Arabic: '\u0639\u0631\u0648\u0636 \u0645\u0624\u0642\u062a\u0629',
      ID: 8
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': 'df72e9e5-2453-46a1-b5df-bdb54cc437ae',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(10)",
      Id: 10,
      OfferTypes: 'Ramadan and Eid Al-Fitr Offers',
      Arabic:
        '\u0639\u0631\u0648\u0636 \u0631\u0645\u0636\u0627\u0646 \u0648\u0639\u064a\u062f \u0627\u0644\u0641\u0637\u0631 ',
      ID: 10
    },
    {
      'odata.type': 'SP.Data.OfferTypesListItem',
      'odata.id': '05d49480-f47d-4f54-bcd0-baf9d5061ec6',
      'odata.etag': '"3"',
      'odata.editLink': "Web/Lists(guid'c1f7d10b-4a07-4a31-b4e0-a6b5288bfbd1')/Items(11)",
      Id: 11,
      OfferTypes: 'Recently Added',
      Arabic: '\u0645\u0636\u0627\u0641\u0629 \u062d\u062f\u064a\u062b\u064b\u0627',
      ID: 11
    }
  ]
};
