import passport from "passport";
import authService from "@/services/authService.js";
import { Strategy as LocalStrategy, VerifyFunction, IStrategyOptions } from "passport-local";

const options: IStrategyOptions = { usernameField: "email", session: false };

const verify: VerifyFunction = async (email: string, password: string, done) => {
  try {
    const user = await authService.verifyLogin(email, password);
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
};

passport.use(new LocalStrategy(options, verify));
