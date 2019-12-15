'use strict';

/**
 * Widget.js controller
 *
 * @description: A set of functions called "actions" for managing `Widget`.
 */

module.exports = {

  /**
   * Retrieve widget records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.widget.search(ctx.query);
    } else {
      return strapi.services.widget.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a widget record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.widget.fetch(ctx.params);
  },

  /**
   * Count widget records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.widget.count(ctx.query, populate);
  },

  /**
   * Create a/an widget record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.widget.add(ctx.request.body);
  },

  /**
   * Update a/an widget record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.widget.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an widget record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.widget.remove(ctx.params);
  }
};
