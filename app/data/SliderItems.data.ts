/* eslint-disable import/no-unused-modules */
// https://qforgqa0.sharepoint.com/Privilegeportal/_api/web/lists/getByTitle('SliderItems')/items?$select=Id%2CId%2CFontColorId%2CFontColor%2FHexCode%2CEndDate%2CStartDate%2COfferType%2FOfferTypes%2COffersID%2FID%2CTitle%2CShortDescription%2CStartDate%2CAttachments%2CAttachmentFiles%2COfferType%2FTitle%2COfferType%2FId%2COffersID%2FTitle%2COffersID%2FId%2CFontColor%2FTitle%2CFontColor%2FId&$expand=AttachmentFiles%2COfferType%2COffersID%2CFontColor&$filter=(StartDate%20le%20datetime%272024-12-12T11%3A51%3A35.020Z%27%20and%20EndDate%20ge%20datetime%272024-12-12T11%3A51%3A35.020Z%27)&$orderby=Created%20asc&$top=4999
// $select=Id
// $select=FontColorId
// $select=FontColor/HexCode
// $select=EndDate
// $select=StartDate
// $select=OfferType/OfferTypes
// $select=OffersID/ID
// $select=Title
// $select=ShortDescription
// $select=StartDate
// $select=Attachments
// $select=AttachmentFiles
// $select=OfferType/Title
// $select=OfferType/Id
// $select=OffersID/Title
// $select=OffersID/Id
// $select=FontColor/Title
// $select=FontColor/Id
// $expand=AttachmentFiles
// $expand=OfferType
// $expand=OffersID
// $expand=FontColor
// $filter=(StartDate le datetime'2024-12-15T07:59:15.532Z' and EndDate ge datetime'2024-12-15T07:59:15.532Z')
// $orderby=Created asc
// $top=4999
export const mockSliderItemsAPI = {
  'odata.metadata':
    'https://qforgqa0.sharepoint.com/PrivilegePortal/_api/$metadata#SP.ListData.SliderItemsListItems&$select=Id,Id,FontColorId,FontColor/HexCode,EndDate,StartDate,OfferType/OfferTypes,OffersID/ID,Title,ShortDescription,StartDate,Attachments,AttachmentFiles,OfferType/Title,OfferType/Id,OffersID/Title,OffersID/Id,FontColor/Title,FontColor/Id',
  value: [
    {
      'odata.type': 'SP.Data.SliderItemsListItem',
      'odata.id': '710fc5c8-4ac2-4b47-8efd-70e7e4bfb127',
      'odata.etag': '"6"',
      'odata.editLink': "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)",
      'AttachmentFiles@odata.navigationLinkUrl':
        "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/AttachmentFiles",
      AttachmentFiles: [
        {
          'odata.type': 'SP.Attachment',
          'odata.id':
            "https://qforgqa0.sharepoint.com/PrivilegePortal/_api/Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/AttachmentFiles('JOOD QND 2023_Maktabi_Option_2.png')",
          'odata.editLink':
            "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/AttachmentFiles('JOOD%20QND%202023_Maktabi_Option_2.png')",
          FileName: 'JOOD QND 2023_Maktabi_Option_2.png',
          FileNameAsPath: {
            DecodedUrl: 'JOOD QND 2023_Maktabi_Option_2.png'
          },
          ServerRelativePath: {
            DecodedUrl:
              '/PrivilegePortal/Lists/SliderItems/Attachments/66/JOOD QND 2023_Maktabi_Option_2.png'
          },
          ServerRelativeUrl:
            '/PrivilegePortal/Lists/SliderItems/Attachments/66/JOOD QND 2023_Maktabi_Option_2.png'
        }
      ],
      'OffersID@odata.navigationLinkUrl':
        "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/OffersID",
      'OfferType@odata.navigationLinkUrl':
        "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/OfferType",
      OfferType: {
        'odata.type': 'SP.Data.OfferTypesListItem',
        'odata.id': 'b5a9749f-d915-4898-8c0b-f23d12d7c71a',
        OfferTypes: 'Qatar National Day Offer',
        Title: '6',
        Id: 6
      },
      'FontColor@odata.navigationLinkUrl':
        "Web/Lists(guid'33333434-a6d2-4910-a871-ab03aec4c836')/Items(66)/FontColor",
      FontColor: {
        'odata.type': 'SP.Data.ColorsListItem',
        'odata.id': 'fa2f8dd5-6d4b-4702-9ca1-8d105dfd054a',
        HexCode: '#17202A',
        Title: 'Black',
        Id: 2
      },
      Id: 66,
      Title: null,
      ShortDescription: null,
      StartDate: '2024-11-30T21:00:00Z',
      EndDate: '2024-12-30T21:00:00Z',
      FontColorId: 2,
      ID: 66,
      Attachments: true
    }
  ]
};
