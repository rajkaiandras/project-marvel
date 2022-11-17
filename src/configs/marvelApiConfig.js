export const marvelApiConfig = {
  apiEndpoint: 'http://gateway.marvel.com/v1/public/characters',
  limit: '100',
  timeStamp: '1' /* Date.now() */,
  /* privateApiKey: '48dbef645afbcafc5f0f47b477710eb700edd201', */
  publicApiKey: 'e0ad2376684bf39059edab0e642cf460',
  md5Hash:
    '9b6a3948740843db9a5fe0ef867400c7' /* md5(timeStamp+privateKey+publicKey) */,
};
