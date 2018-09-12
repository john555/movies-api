const URL = require('url');

function isValidImageUrl(url, allowedExtensions) {
  allowedExtensions = allowedExtensions || ['jpg', 'png'];
  const parsedUrl = URL.parse(url);
  if (!parsedUrl.pathname) {
    return false;
  }
  const $ = parsedUrl.pathname.split('.');
  const extension = $[$.length - 1];
  return (extension && allowedExtensions.indexOf(extension) >= 0);
}

module.exports = isValidImageUrl;
