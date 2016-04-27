module.exports = (req) => {

  var language = null, software = null;

  if(req.headers['accept-language'])
    language = req.headers['accept-language'].split(/[,;]/)[0];

  if(req.headers['user-agent'])
    software = req.headers['user-agent'].match(/\((.*?)\)/);
  
  software = (software != null) ? software[1] : null;

  return {
    "ipaddress": req.ip,
    "language": language,
    "software": software
  }
};
