const express = require('express');
const { createNews, fetchNews, fetchNew, deleteNews, updateValidation, updateNews, updateImage } = require('../controllers/newsController');
const auth = require('../utils/auth');
const router = express.Router();


router.post('/news', auth, createNews);
router.get('/news', fetchNews);
router.get('/news/:id', fetchNew);
router.delete('/deletenews/:id', auth, deleteNews);
router.post('/newsupdate', [auth, updateValidation], updateNews);
router.post('/updatenImage', auth, updateImage);

module.exports = router;