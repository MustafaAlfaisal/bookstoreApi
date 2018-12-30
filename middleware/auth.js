function auth(req, res, next) {
    //  check if there is a token
    const token = req.headers.token;
    if(token){
    //  decode the token and chekc if it's validate
      try {
        //  Get the payload from the jsonwebtoken
        let payload = jwt.verify(token, 'key');
        //  You can check the expiration if you want
        next();
      } catch (err) {
        res.status(400).send(err);
      }
    }else{
      res.send('you need to login');
    }
  }
  
  
  module.exports = auth;
  