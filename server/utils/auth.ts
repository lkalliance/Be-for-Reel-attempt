const jwt = require("jsonwebtoken");

const secret = "poorjuddisdead";
const expiration = "14d";

export const authMiddleware = function ({ req }: any) {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }

  return req;
};

export const signToken = function ({
  email,
  username,
  _id,
}: {
  email: string;
  username: string;
  _id: string;
}) {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
