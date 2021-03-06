let _ = require('lodash');
let yaml = require('js-yaml');
let path = require('path');
let fs = require('fs');

let config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'config.yml'), 'utf-8'));

exports.SERVER = _.pick(config['SERVER'], ['ADDRESS', 'PORT', 'SECRET_KEYS', 'MAXAGE']);

exports.SWITCH_HOST = config['SWITCH_HOST'];
