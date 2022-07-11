function ensureAuth(req, res, next) {
  const { auth } = req.query;
  if (!auth || auth !== process.env.AUTH) {
    console.log('!! Unauthorized user attempt');
    res.json({ message: 'You are not authorized to execute this request.', success: false });
    res.redirect('/');
  } else {
    return next();
  }

}

module.exports = ensureAuth;