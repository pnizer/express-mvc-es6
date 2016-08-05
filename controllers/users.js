import {action, get} from "../lib/ctrl-routes";

export default class UsersController {
   constructor() {
      this.foo = 'bar';
   }
 
   @get('/')
   index(req, res) {
      res.json( {foo: this.foo} );
   }

   @action('post', '/foo')
   foo(req, res) {
      res.json('bar');
   }
}

