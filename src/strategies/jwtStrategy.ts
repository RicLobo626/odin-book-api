import passport from "passport";
import usersService from "@/services/usersService.js";
import { JWT_SECRET } from "@/utils/config.js";
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions, VerifyCallback } from "passport-jwt";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET!,
};

const verify: VerifyCallback = async (jwtPayload, done) => {
  try {
    const user = await usersService.findUserById(jwtPayload.id);
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
};

passport.use(new JwtStrategy(options, verify));
