let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/books",{
    useNewUrlParser: true,
    useFindandModify: true,
});

const bookSeed = [
    {
        authors: "Stephenie Meyer",
        description: "It is the first book in the Twilight series, and introduces seventeen-year-old Isabella Bella Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body. ",
        image: "https://images-na.ssl-images-amazon.com/images/I/615ZIxEDozL.jpg",
        link: "https://www.google.com/search?q=twilight+book&rlz=1C5CHFA_enUS883US917&sxsrf=AOaemvLiWrjh-D5mw6yJfGaLSnl7aYCO3A%3A1632582093762&ei=zTlPYe3-La2Uxc8P7faR2AU&oq=twilight+book&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDEEMQkwIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6DQguEMgDELADEEMQkwI6CgguEMgDELADEENKBQg6EgExSgUIOBIBMUoECEEYAFCm7gFYpu4BYIHxAWgBcAJ4AIABYogBYpIBATGYAQCgAQHIAQ_AAQE&sclient=gws-wiz&ved=0ahUKEwitmY-esprzAhUtSvEDHW17BFsQ4dUDCA8&uact=5",
        title: "Twilight"
    }
  
];

db.Book.remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.insertedCount + " record(s) inserted!");
        process.exit(0);
    })
    .catch(err =>{
        console.error(err);
        process.exit(1);
    });