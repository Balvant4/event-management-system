import { Router } from "express";
import { registerUser } from "../controllers/usercontroller/registercontroller.js";
import { loginUser } from "../controllers/usercontroller/logincontroller.js";
import { registerEventProvider } from "../controllers/eventprovidercontroller/eventProviderRegister.js";
import { loginEventProvider } from "../controllers/eventprovidercontroller/eventProviderLogin.js";
import { loginAdmin } from "../controllers/admincontroller/adminController.js";

const router = Router();

router.route("/registeruser").post(registerUser);
router.route("/loginuser").post(loginUser);
router.route("/registe-event-provider").post(registerEventProvider);
router.route("/login-event-provider").post(loginEventProvider);
router.post("/loginadmin", loginAdmin);

//secure routes
// router.route("/logout").post(verifyJWT, logoutUser);
export default router;
