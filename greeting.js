const colors = require('./color');

/**
 * Gozeon Bio
 * @link https://github.com/gozeon
*/
exports.greeting =
'\n   ╭━━━━━━╮         '+
'\n   ┃      ┃         '+
'\n   ┃   ╭━╮┻╮        '+
`\n   ${colors.red('╱╲')}  ┃${('▋')}┃${('▋')}┃        `+
'\n  ╭┻   ╰━┻━━╮       '+
'\n  ╰┳  ╭━━━━┳╯      /'+
`\n   ┃  ┃ ╰━━┫  ${colors.cyan('Goze')}  `+
`\n      ${('┏━┓')}           `;
