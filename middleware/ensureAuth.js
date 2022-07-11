function ensureAuth(req, res, next) {
  const { auth } = req.query;
  if (!auth || auth !== process.env.AUTH) {
    console.warn('\n- - - - - - - - - - - - -\nUnauthorized user attempt\n- - - - - - - - - - - - -\n');
    res.json({ message: 'You are not authorized to execute this request.', success: false });
  } else {
    return next();
  }

}

module.exports = ensureAuth;