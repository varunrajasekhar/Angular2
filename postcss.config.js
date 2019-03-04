// module.exports = {
//   plugins: [
//     require('precss'),
//     require('autoprefixer')
//   ]
// }

const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    plugins: {
        precss,
        autoprefixer: { browsers: ['last 2 versions', 'ios 8', 'ie 9', 'ie 10', 'ie 11'] }
    },
};
