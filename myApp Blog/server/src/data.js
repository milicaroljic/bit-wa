const loremIpsum = require('lorem-ipsum');

const Post = require("./post");

const getTitle = () => (loremIpsum({
    count: 3,
    units: 'words'
}));



const getIntro = () => (loremIpsum({
    count: 2,
    units: 'sentences'
}));

// const getInt = () => {
//    const x = loremIpsum({
//         count: 3,
//         units: 'sentences'
//     });
//     return x;
// }

// const xx = getInt();
// console.log(xx);




const getDataPostFake = (count) => {
    var arr = [];
    for (let index = 0; index < count; index++) {
        const title = getTitle();
        const intro = getIntro();
        const PostAll = new Post(index, title, intro);
        arr.push(PostAll);
    }
    return arr;
}

module.exports = {
    getDataPostFake
}
