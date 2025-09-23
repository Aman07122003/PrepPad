import { OAuth2Client } from "google-auth-library";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { APIResponse } from "../utils/APIResponse.js";

const client = new OAuth2Client(
  "682527723176-jmgchqucm46ho2t3ups5hdd8tb79cd27.apps.googleusercontent.com"
);

// Utility to generate JWTs
const generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m" }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d" }
  );

  return { accessToken, refreshToken };
};

// Google Login Controller
export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "682527723176-jmgchqucm46ho2t3ups5hdd8tb79cd27.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();

    // Find or create user
    let user = await User.findOne({ googleId: payload.sub });

    if (!user) {
      user = new User({
        googleId: payload.sub,
        email: payload.email,
        name: payload.name,
        given_name: payload.given_name,
        family_name: payload.family_name,
        picture: payload.picture || "",
      });
      await user.save();
    }

    // Generate JWTs
    const { accessToken, refreshToken } = generateTokens(user._id);

    // Save refresh token in DB
    user.refreshToken = refreshToken;
    await user.save();

    // Optionally set HttpOnly cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Return user info + tokens
    return res.status(200).json(
      new APIResponse(
        200,
        {
          user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            given_name: user.given_name,
            family_name: user.family_name,
            picture: user.picture,
          },
          accessToken,
          refreshToken,
        },
        "Logged In Successfully"
      )
    );
  } catch (err) {
    console.error("Google login error:", err);
    return res
      .status(400)
      .json({ success: false, message: "Invalid Google token" });
  }
};
