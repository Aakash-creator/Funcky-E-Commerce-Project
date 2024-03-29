const { login, user } = require("../models/AuthModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//get user data as profile

const UserData = async (req, res) => {
  const { email } = req.body;
  res.status(200).json(username);
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isThere = await user.findOne({ email });

    if (isThere === null) {
      res.json("User does not exist, register user before trying"); //.status(400)
    } else {
      const userId = isThere._id;
      if (isThere.email === email) {
        if (await bcrypt.compare(password, isThere.password)) {
          const accesstoken = JWT.sign({ email, userId }, process.env.JWTACCESSTOKENSECRET, {
            expiresIn: "10m",
          });
          const refreshtoken = JWT.sign({ email, userId }, process.env.JWTREFRESHTOKENSECRET, {
            expiresIn: "12m",
          });

          res.cookie("accesstoken", accesstoken, {
            // maxAge: 60000,
            httpOnly: true,
            secure: true,
            // sameSite: "Strict",
          });

          res.cookie("refreshtoken", refreshtoken, {
            // maxAge: 300000,
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
          });
          if (isThere.role === "Admin") {
            res.status(200).json("Admin");
          } else {
            res.status(200).json("Login Sucessfull!");
          } // for testing send accesstoken, refreshtoken , accesstoken, refreshtoken
        } else {
          res.json("Incorrect Credentials");
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const role = "User";
    const isThere = await user.findOne({ email }); //check if user exists returns an object|null
    if (name && email && password) {
      if (isThere === null) {
        //if null then then user does not exist
        const hashPass = await bcrypt.hash(password, 12);
        const data = await user.create({ name, email, password: hashPass, role }).then((dt) => {
          //create user user
          // console.log(dt); // remove later
          res.status(201).json("User Created Sucessfully");
        });
      } else {
        if (isThere.email === email) {
          res.json(`User already exist using email ${email}, try other usernames`);
        }
      }
    } else {
      res.json("Name, Email and Password required.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};

const isUserValid = async (req, res, next) => {
  try {
    const accesstoken = req.cookies.accesstoken;
    const refreshtoken = req.cookies.refreshtoken;

    if (!accesstoken) {
      if (!refreshtoken) {
        return res.status(401).json({ message: "User not logged in" });
      } else {
        JWT.verify(refreshtoken, process.env.JWTREFRESHTOKENSECRET, (err, decode) => {
          if (err) {
            console.log(err);
            return res.status(401).json({ valid: false, message: "Invalid refresh token" });
          } else {
            email = decode.useremail;
            userId = decode.userId;
            const newAccessToken = JWT.sign({ email, userId }, process.env.JWTACCESSTOKENSECRET, {
              expiresIn: "10m",
            });

            res.cookie("accesstoken", newAccessToken, {
              maxAge: 60000,
              httpOnly: true,
              secure: true,
            });
            next();
          }
        });
      }
    } else {
      JWT.verify(accesstoken, process.env.JWTACCESSTOKENSECRET, (err, decode) => {
        if (err) {
          console.log(err);
          return res.status(401).json({ valid: false, message: "Invalid access token" });
        } else {
          return next();
        }
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { loginUser, registerUser, isUserValid, UserData };
