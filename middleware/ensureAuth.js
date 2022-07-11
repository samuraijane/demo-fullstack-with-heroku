function ensureAuth(req, res, next) {
  const { auth } = req.query;
  if (auth === process.env.AUTH) {
      return next();
  }
  res.json({ message: 'You are not authorized to execute this request.', success: false });
  res.redirect('/');
}

module.exports = ensureAuth;