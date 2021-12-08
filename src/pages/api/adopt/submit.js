import { submit } from "../../../../server/mongodb/actions/Application";

const handler = (req, res) => {
    if (req.method === "POST") {
        submit(req.body).then((application) => {
            return res.status(200).json({
                success: true,
                payload: application,
            });
        }).catch ((err) => {
            return res.status(400).json({
              success: false,
              message: err.message,
            });
          });
    } else {
        return res.status(400).json({
            success: false,
            message: "Error",
        });
    }
}
export default handler;