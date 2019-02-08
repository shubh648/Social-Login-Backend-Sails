/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var jwt = require('jsonwebtoken');
module.exports = {
  

  /**
   * `UserController.find()`
   */
  find: async function (req, res) {
    console.log(req.cookies);
    res.cookie("token", "mytoken");
    res.json({test:true});        
    // const data = req.params || req.body;
    // const user  = await User.findOrCreate({where:{userID: data.userID}},{...data}).catch(res.serverError);
    
    // return res.json(user);
  },

  /**
   * `UserController.create()`
   */
  create: async function (req, res) {
    console.log('came to create');
    console.log(JSON.stringify(req.cookies));
    console.log(JSON.stringify(req.signedCookies));
    

    // const data = req.body;
    
    // const user  = await User.findOrCreate({where:{userID: data.userID}} ,data).catch(res.serverError);
            
    // const token = jwt.sign({id:user.id} , 'secretdare');

    res.cookie("token", "mytoken");
    res.json({test:true});    
    // return res.json({
    //   user:user,
    //   token: token
    // });

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

