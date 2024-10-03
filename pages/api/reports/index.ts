import { authMiddleware } from "../middlewares/authMiddleware";
import { reportController } from "./controllers/reportController";


export default authMiddleware(reportController);