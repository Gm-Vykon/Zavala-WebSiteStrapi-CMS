'use strict';
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::quote-request.quote-request');
