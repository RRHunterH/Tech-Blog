const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    db.all("SELECT * FROM posts", [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.render('index', { posts: rows });
    });
  });

  return router;
};
