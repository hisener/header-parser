module.exports = (req) => {

  var language = req.headers['accept-language'].split(/[,;]/);
  var software = req.headers['user-agent'].match(/\((.*?)\)/);
  return {
    "ipaddress": req.ip,
    "language": language[0],
    "software": software[1]
  }
};
