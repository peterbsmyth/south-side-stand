'use strict';

/**
 * Person.js controller
 *
 * @description: A set of functions called "actions" for managing `Person`.
 */

module.exports = {

  /**
   * Retrieve person records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.person.search(ctx.query);
    } else {
      return strapi.services.person.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a person record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.person.fetch(ctx.params);
  },

  /**
   * Count person records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.person.count(ctx.query, populate);
  },

  /**
   * Create a/an person record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.person.add(ctx.request.body);
  },

  /**
   * Update a/an person record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.person.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an person record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.person.remove(ctx.params);
  }
};
