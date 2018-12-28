/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `AuthController.find()`
   */
  find: async function (req, res) {
    confirm.log(req.body);
    return res.json({
      todo: 'find() is not implemented yet!'
    });
  },

  /**
   * `AuthController.create()`
   */
  create: async function (req, res) {
    confirm.log(req.body);
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },

  /**
   * `AuthController.update()`
   */
  update: async function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },

  /**
   * `AuthController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

