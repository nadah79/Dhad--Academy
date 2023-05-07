const userModel = require("../module/userModule");
const bycrpt = require("bcrypt");
var jwt = require("jsonwebtoken");
const response = require("../utils/response");
const fs = require("fs");
const path = require("path");
const EnrollmentRequest = require("../module/userRequestCourses");

class users {
  static userRegistration = async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    const { error } = userModel.validateRegistration(req.body);
    if (error) {
      return response(res, 400, "error ocured", "", error.details[0].message);
    }
    console.log(req.body);
    console.log("done");

    try {
      const imagePath = req.file.path;

      const filePath = imagePath;
      const fileName = path.basename(filePath);

      const hashingPassword = await bycrpt.hash(password, 12);
      const createuser = await new userModel.User({
        isAdmin: isAdmin,
        image: fileName,
        username: req.body.name,
        email: email,
        password: hashingPassword,
      });

      await createuser.save();
      //   const headers = {

      //    'Access-Control-Allow-Origin': '*',
      //  };
      //  res.writeHead(206, headers);
      return response(
        res,
        201,
        "account created successfully",
        { createuser },
        ""
      );
    } catch (error) {
      response(res, 400, "error has occured", "", error.message);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const { error } = userModel.validateLogin(req.body);
    if (error) {
      return response(res, 400, "invalid Data", "", error.details[0].message);
    }

    try {
      const emailexsite = await userModel.User.findOne({ email: email });
      console.log(emailexsite);
      if (!emailexsite) {
        return response(res, 400, "email doesnt exsited");
      }
      const passwordCorrect = bycrpt.compareSync(
        password,
        emailexsite.password
      );

      if (passwordCorrect) {
        const token = emailexsite.generateAuthToken();

        const { password, ...other } = emailexsite._doc;
        return response(
          res,
          200,
          "loggin successfully",
          { ...other, token },
          ""
        );
      }

      return response(res, 400, "password not correct ", "xxxxxx");
    } catch (error) {
      return response(res, 400, "password not correct ", "", error.message);
    }
  };
  //////////////////////////////////////////////////////////////////////////////

  static getallusers = async (req, res) => {
    const category = req.query.category;
    console.log(category);

    try {
      // console.log(req.headers.authorization)

      if (category == "all" || category == "") {
        const users = await userModel.User.find().select({ password: 0 });
        return response(res, 200, "users get succefully", users);
      }
      const users = await userModel.User.find({ isAdmin: category }).select({
        password: 0,
      });
      console.log(users);
      return response(res, 200, "users get succefully", users);
    } catch (error) {}
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const { usernam, email, password, isAdmin } = req.body;

    try {
      const user = await userModel.User.findById({ _id: id });

      if (!user) {
        return res
          .status(404)
          .json({ message: `User with ID ${id} not found` });
      }

      if (req.file) {
        const imagePath = req.file.path;
        const filePath = imagePath;
        const fileName = path.basename(filePath);

        // Check if file exists in file system before deleting
        fs.access(
          path.join(__dirname, `../images/${user.image}`),
          fs.constants.F_OK,
          async (err) => {
            if (err) {
              const updateuser = await userModel.User.findByIdAndUpdate(
                { _id: id },
                { usernam: usernam, email: email, isAdmin: isAdmin },
                { new: true }
              );
              response(
                res,
                201,
                "User updated successfully",
                { updateuser },
                ""
              );
            } else {
              fs.unlink(
                path.join(__dirname, `../images/${user.image}`),
                (err) => {
                  if (err) console.log(err);
                  else console.log(`Deleted file: ${user.image}`);
                }
              );
            }
          }
        );
        const updateuser = await userModel.User.findByIdAndUpdate(
          { _id: id },
          { usernam: usernam, email: email, image: fileName, isAdmin: isAdmin },
          { new: true }
        );
      } else {
        const updateuser = await userModel.User.findByIdAndUpdate(
          { _id: id },
          { usernam: usernam, email: email, isAdmin: isAdmin },
          { new: true }
        ).select({ password: 0 });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
      const deleteuser = await userModel.User.findByIdAndDelete(id);
      if (deleteuser && deleteuser.image) {
        const imagePathToDelete = path.join(
          __dirname,
          "../images",
          deleteuser.image
        );
        if (fs.existsSync(imagePathToDelete)) {
          fs.unlinkSync(imagePathToDelete);
        }
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  };

  static addUserCourse = async (req, res) => {
    try {
      console.log();
      const { Userid, courseId } = req.body.enrollmentRequest;
      console.log(req.params.id);

      const user = await userModel.User.findByIdAndUpdate(
        Userid,
        { $push: { courses: { courseId } } },
        { new: true }
      );
      const delet = await EnrollmentRequest.findByIdAndDelete(req.params.id);

      response(res, 201, "Course added successfully", { user }, "");
    } catch (error) {
      response(res, 500, "Error adding course", {}, error.message);
    }
  };

  static removeUserCourse = async (req, res) => {
    try {
      // const { userId, courseId } = req.body;
      // const user = await userModel.User.findByIdAndUpdate(
      //   userId,
      //   { $pull: { courses: { courseId } } },
      //   { new: true }
      // );

      // res.status(200).json(user);
      console.log(req.params.id);

      const delet = await EnrollmentRequest.findByIdAndDelete(req.params.id);
      console.log(delet);
      console.log("delet");

      if (delet) {
        response(res, 200, "Course deleted successfully", { delet }, "");
      } else {
        return res.status(400).json("not found");
        return;
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getUserCourses = async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await userModel.User.findById(userId).populate(
        "courses.courseId"
      );
      const courses = user.courses;
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 

  static enrollment = async (req, res) => {
    try {
      // const { userId, courseId, userName } = req.body;
      const userId = req.user.id;
      const courseId = req.params.id;
      const userName = req.user.email;

      // Check if enrollment request already exists for this user and course
      const existingEnrollmentRequest = await EnrollmentRequest.findOne({
        userId,
        courseId,
      });
      console.log(existingEnrollmentRequest);
      if (existingEnrollmentRequest) {
        return res
          .status(400)
          .json({
            error: "Enrollment request already exists for this user and course",
          });
      }

      const enrollmentRequest = new EnrollmentRequest({
        userId: req.user.id,
        courseId: req.params.id,
        userName: req.user.email,
      });

      await enrollmentRequest.save();
      res
        .status(201)
        .json({
          message: "Enrollment request submitted successfully",
          body: enrollmentRequest,
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getrequestesenrolled = async (req, res) => {
    try {
      const enrollmentRequests = await EnrollmentRequest.find().populate(
        "userId courseId"
      );

      res.status(200).json(enrollmentRequests);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = users;
