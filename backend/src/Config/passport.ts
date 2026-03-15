import passport from 'passport';
import { findUserByEmail , findUserByEmailByID} from '../Models/userModel.js';
import bcrypt from 'bcrypt'
import { Strategy as LocalStrategy } from 'passport-local';

// passport local strategy for authentication
passport.use(new LocalStrategy({
  usernameField: 'email',
    passwordField: 'password'

    },
    ( async(email: string, password: string, done: (error: any, user?: any, options?: any) => void) => {

       try {
         if (!email || !password) {
            return done(null, false, { message: 'Email and password are required.' });
          }

        // Check if the user exists
        const existingUser = await findUserByEmail(email);

         
        if(existingUser.length === 0) {
            return done(null, false, { message: 'User not found' });
        }

        // Get the user
        const user = existingUser[0];

      

        // Check if the password is correct
         const matchPassword =  await bcrypt.compare(password, user.password);

        if (!matchPassword) {
                return done(null, false, { message: 'Incorrect password' });
        }


        //return user 
          return done(null, user);


       } catch (error) {
         return done(error);
       }


})))


// Serialize  user
passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

//deserialize user
passport.deserializeUser(async (id: number, done) => {
    try {
        // Get the user
        const userArr = await findUserByEmailByID(id);    

        const user = userArr[0];

      

       

     

        done(null, user || false);
    } catch (error) {
        done(error);
    }
});


export default passport;