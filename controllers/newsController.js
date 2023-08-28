const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');
var slugify = require('slugify')
const { htmlToText } = require('html-to-text');
const { body, validationResult } = require('express-validator');
const fs = require('fs');
const News = require('../models/NewsModel')

module.exports.createNews = (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (error, fields, files) => {
        const { title, body, upcomming, language } = fields;
        const errors = [];
        if (title === '') {
            errors.push({ msg: 'Title is required' })
        }
        if (body === '') {
            errors.push({ msg: "Body is required" })
        }
        if (Object.keys(files).length === 0) {
            errors.push({ msg: 'Image is required' })
        } else {
            const { type } = files.image;
            const split = type.split('/');
            const extension = split[1].toLowerCase();
            if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
                errors.push({ msg: `${extension} is not a valid extension}` })
            }
            else {
                files.image.name = uuidv4() + '.' + extension;

            }
        }
        const checkTitle = await News.findOne({ title });
        if (checkTitle) {
            errors.push({ msg: 'please choose a unique title' })
        }
        if (errors.length !== 0) {
            return res.status(400).json({ errors, files })
        } else {
            const newPath = __dirname + `/../client/public/images/${files.image.name}`;
            fs.copyFile(files.image.path, newPath, async (error) => {
                if (!error) {
                    try {
                        const response = await News.create({
                            title,
                            body,
                            upcomming,
                            language,
                            image: files.image.name,
                        });
                        return res.status(200).json({ msg: 'News Created Successfully', response })
                    } catch (error) {
                        return res.status(500).json({ errors: error, msg: error.message })
                    }
                }
            })
        }

    });
}

module.exports.fetchNews = async (req, res) => {
    try {
        const response = await News.find().sort({ updatedAt: -1 });
        return res.status(200).json({ response: response });
    } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message })
    }
};

module.exports.deleteNews = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await News.findByIdAndRemove(id);
        return res.status(200).json({ msg: 'Your news has been deleted' });
    } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message });
    }
};

module.exports.fetchNew = async (req, res) => {
    const id = req.params.id;
    try {
        const news = await News.findOne({ _id: id });
        return res.status(200).json({ news });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ errors: error, msg: error.message });
    }
};

module.exports.updateValidation = [
    body('title').notEmpty().trim().withMessage('Title is Required'),
    body('body')
        .notEmpty()
        .trim()
        .custom((value) => {
            let bodyValue = value.replace(/\n/g, '');
            if (htmlToText(bodyValue).trim().length === 0) {
                return false;
            } else {
                return true;
            }
        })
        .withMessage('Body is required'),

]

module.exports.updateNews = async (req, res) => {
    const { title, body, id, upcomming, language } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } else {
        try {
            const response = await News.findByIdAndUpdate(id, {
                title,
                upcomming,
                language,
                body
            });
            return res.status(200).json({ msg: 'Your news has been updated' });
        } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message })
        }
    }
}

module.exports.updateImage = (req, res) => {
    const form = formidable({ multiples: true })
    form.parse(req, (errors, fields, files) => {
        const { id } = fields;
        const imageErrors = [];
        if (Object.keys(files).length === 0) {
            imageErrors.push({ msg: 'Please choose image' })
        } else {
            const { type } = files.image;
            const split = type.split('/');
            const extension = split[1].toLowerCase();
            if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
                imageErrors.push({ msg: `${extension} is not a valid extension` })
            }
            else {
                files.image.name = uuidv4() + '.' + extension;

            }
        }
        if (imageErrors.length !== 0) {
            return res.status(400).json({ errors: imageErrors });
        } else {
            const newPath = __dirname + `/../client/public/images/${files.image.name}`;
            fs.copyFile(files.image.path, newPath, async (error) => {
                if (!error) {
                    try {
                        const response = await News.findByIdAndUpdate(id, { image: files.image.name });
                        return res.status(200).json({ msg: 'Your image has been updated' })
                    } catch (error) {
                        return res.status(500).json({ errors: error, msg: error.message })
                    }
                }
            })
        }
    })
}

// module.exports.newsDetails = async (req, res) => {
//     const slug = req.params.slug;
//     try {
//         const news = await News.findOne({ slug: slug });
//         return res.status(200).json({ news });
//     } catch (error) {
//         return res.status(500).json({ errors: error, msg: error.message })
//     }
// }

