/* eslint-disable import/no-unused-modules */
// https://graph.microsoft.com/v1.0/me/presence
export const mockPresenceAPI = {
  '@odata.context':
    "https://graph.microsoft.com/v1.0/$metadata#users('0ffb6461-b4f1-4421-9e13-3af252953819')/presence/$entity",
  id: '0ffb6461-b4f1-4421-9e13-3af252953819',
  availability: 'Away',
  activity: 'Away',
  statusMessage: null
};

// https://graph.microsoft.com/v1.0/me
export const mockMeAPI = {
  '@odata.context': 'https://graph.microsoft.com/v1.0/$metadata#users/$entity',
  businessPhones: [],
  displayName: 'Elie Khairallah',
  givenName: 'Elie Khairallah',
  jobTitle: 'Head of Projects',
  mail: null,
  mobilePhone: null,
  officeLocation: null,
  preferredLanguage: null,
  surname: null,
  userPrincipalName: 'vadm-ekhairallah@qf.org.qa',
  id: 'a37cc76c-33de-44f2-bd6e-b76d164e59dd',

  // NOT IN OBJECT, EXPECTED TO BE HERE
  employeeId: null,
  department: null
};

// https://graph.microsoft.com/v1.0/users/a37cc76c-33de-44f2-bd6e-b76d164e59dd/manager?$select=id,jobTitle,displayName,department,mail,employeeId,employeeType,userPrincipalName
export const mockManagerSelectAPI = {
  '@odata.context':
    'https://graph.microsoft.com/v1.0/$metadata#directoryObjects(id,jobTitle,displayName,department,mail,employeeId,employeeType,userPrincipalName)/$entity',
  '@odata.type': '#microsoft.graph.user',
  id: '0ffb6461-b4f1-4421-9e13-3af252953819',
  jobTitle: 'Head of IT Programme Management',
  displayName: 'Mohamed E. Khodir',
  department: 'QF IT Operations & Delivery',
  mail: 'mkhodir@qf.org.qa',
  employeeId: '13502',
  employeeType: 'Employee',
  userPrincipalName: 'mkhodir@qf.org.qa'
};

// https://graph.microsoft.com/v1.0/users/a37cc76c-33de-44f2-bd6e-b76d164e59dd?$select=id,companyName,jobTitle,displayName,businessPhones,department,mail,employeeType,officeLocation,aboutMe,skills,onPremisesExtensionAttributes,employeeId,userPrincipalName
export const mockGetUserAPI = {
  '@odata.context':
    'https://graph.microsoft.com/v1.0/$metadata#users(id,companyName,jobTitle,displayName,businessPhones,department,mail,employeeType,officeLocation,aboutMe,skills,onPremisesExtensionAttributes,employeeId,userPrincipalName)/$entity',
  id: 'a37cc76c-33de-44f2-bd6e-b76d164e59dd',
  companyName: 'QF Information Technology',
  jobTitle: 'Head of Projects',
  displayName: 'Elie Khairallah',
  businessPhones: [],
  department: 'QF Information Technology',
  mail: null,
  employeeType: 'Vendor',
  officeLocation: null,
  employeeId: null,
  userPrincipalName: 'vadm-ekhairallah@qf.org.qa',
  aboutMe:
    'Hi, I’m [Name]. I’m passionate about technology and problem-solving. With a background in [industry/field], I enjoy tackling new challenges and collaborating with teams to create meaningful solutions. Outside of work, I love spending time with friends and family, reading, and exploring new hobbies. I’m always looking for ways to grow both personally and professionally, and I’m excited about what the future holds.',
  skills: ['Problem Solving', 'Hardworking']
};
