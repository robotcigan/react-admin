const apiVersion = 1;
const serverLink = `http://localhost:1337`;
const serverFullAdress = `${ serverLink }/api/v${apiVersion}`
const imgStorage = `${ serverLink }/media/`


module.exports.imgStorage = imgStorage;
module.exports.server = serverFullAdress;