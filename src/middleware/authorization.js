const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

/**
 * Authentication middleware
 */
function authorization(request, response, next) {
  const { authorization } = request.headers;
  const error = {
    message: 'Unauthorized',
  };

  if (!authorization) {
    next();
    return;
  }

  if (authorization.indexOf(' ') === -1) {
    error.message = 'Invalid token';
    return response.status(401).send(error);
  }

  const token = authorization.split(" ")[1];
  
  jwt.verify(token, secret, function(err, decoded) {
    if (!err) {
      request.user = decoded.user;
    } else {
      return response.status(401).send(error);
    }
  });

  next();
}

module.exports = authorization;
