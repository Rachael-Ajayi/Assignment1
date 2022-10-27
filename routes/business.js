let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our contact Model
let Contact = require('../models/contact');

/* GET Route for the contact List page - READ OPeration */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(contactList);

            //res.render('book', {title: 'Book List', BookList: bookList})            
        }
    });
});

module.exports = router;