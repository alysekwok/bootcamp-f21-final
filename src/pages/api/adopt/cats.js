import mongoDB from "../index"
import { getCats, getAdoptableCats, getCat } from "../../../../server/mongodb/actions/Cat";

const handler = (req, res) => {
    await mongoDB();
    const id = req.query.id;
    const isAdopted = req.query.isAdopted;

    if (req.method === "GET") {
        if (!isAdopted) {
            if (id) {
                getCat(id).then((out) => {
                    return res.status(200).json({
                      success: true,
                      payload: out,
                    });
                }).catch ((err) => {
                    return res.status(400).json({
                      success: false,
                      message: err.message,
                    });
                });
            } else {
                getCats().then((out) => {
                    return res.status(200).json({
                      success: true,
                      payload: out,
                    });
                }).catch ((err) => {
                    return res.status(400).json({
                      success: false,
                      message: err.message,
                    });
                });
            }
        } else {
            getAdoptableCats().then((out) => {
                return res.status(200).json({
                  success: true,
                  payload: out,
                });
            }).catch ((err) => {
                return res.status(400).json({
                  success: false,
                  message: err.message,
                });
            });
        }
    }
}
export default handler;