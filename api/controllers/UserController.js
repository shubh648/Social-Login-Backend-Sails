/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `UserController.find()`
   */
  find: async function (req, res) {
    const data = req.params || req.body;
    const user  = await User.findOrCreate({email: data.email},{...data}).catch(res.serverError);
    console.log("user",user);
    
    return res.json(user);
  },

  /**
   * `UserController.create()`
   */
  create: async function (req, res) {
    console.log('came to create');

    const data = req.body;
    console.log('data',data);
    const user  = await User.findOrCreate({email: data.email , data:data}).catch(res.serverError);
    console.log("user", user);
    
    return res.json(user);

  },

  /**
   * `UserController.update()`
   */
  update: async function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },

  /**
   * `UserController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

