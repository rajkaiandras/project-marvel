export const marvelApiConfig = () => {
  const apiEndpoint = 'http://gateway.marvel.com/v1/public/characters';
  const limit = '100';
  const timeStamp = '1'; /* Date.now(); */
  /* const privateApiKey = '48dbef645afbcafc5f0f47b477710eb700edd201'; */
  const publicApiKey = 'e0ad2376684bf39059edab0e642cf460';
  const md5Hash =
    '9b6a3948740843db9a5fe0ef867400c7'; /* md5(timeStamp+privateKey+publicKey) */
};
