import customCreateApi from 'services/customCreateApi';

const homeApi = customCreateApi
  .enhanceEndpoints({ addTagTypes: ['Home'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Get all Categories
      fetchCategories: builder.query<any, void>({
        query: () => ({
          url: '/categories/items',
          method: 'GET',
          params: { expand: 'fields' }
        })
      }),

      // Get all OfferTypesConfiguration
      fetchOfferTypesConfiguration: builder.query<any, void>({
        query: () => ({
          url: '/OfferTypesConfiguration/items?$select=fields&$filter=fields/IsActive eq 1&$orderby=fields/Order0 asc&$top=4999&expand=fields',
          method: 'GET',
          params: {
            // use params here
          }
        })
      }),

      // Get all Vendor Master
      fetchVendorMaster: builder.query<any, void>({
        query: () => ({
          url: "/Vendor Master/items?$filter=fields/Status eq 'Approved'&$orderby=fields/Created desc&$top=20&expand=fields",
          method: 'GET',
          params: {
            // use params here
          }
        })
      }),

      // Get all Slider Items
      fetchSliderItems: builder.query({
        query: () => ({
          url: '/Slideritems/items?select=Id,FontColorId,FontColor/HexCode,EndDate,StartDate,OfferType/OfferTypes,OffersID/ID,Title,ShortDescription,Attachments,AttachmentFiles,OfferType/Title,OfferType/Id,OffersID/Title,OffersID/Id,FontColor/Title,FontColor/Id&expand=Fields,AttachmentFiles,OfferType,OffersID,FontColor&$top=2&expand=fields',
          method: 'GET',
          params: {
            // use params here
          }
        })
      })
    })
  });

export const {
  useFetchCategoriesQuery,
  useFetchOfferTypesConfigurationQuery,
  useFetchVendorMasterQuery,
  useFetchSliderItemsQuery
} = homeApi;
