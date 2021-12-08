import {
    findApplication, findApplicationofCat, setApproved
} from "../../../../server/mongodb/actions/Application";

const handler = (req, res) => {
    const id = req.query.id;
    const catname = req.query.catname;
  
    if (req.method === "GET") {
      if (!id && !catname) {
        return res.status(400).json({
          success: false,
          message: "Either id or cat name is missing",
        });
      } else if (!id && catname) {
        findApplicationofCat(catname).then((out) => {
          return res.status(200).json({
              success: true,
              payload: out,
            }).catch ((err) => {
              return res.status(400).json({
                success: false,
                message: err.message,
              });
            });
        });
      } else {
        findApplication(id).then((out) => {
            return res.status(200).json({
              success: true,
              payload: out,
            });
          }).catch ((err) => {
            return res.status(400).json({
              success: false,
              messsage: err.message,
            });
          });
        }
    } else if (req.method === "PUT") {
        if (!id) {
            return res.status(400).json({
              success: false,
              message: "id is missing",
            });
          } else {
            setApproved(id).then((out) => {
                return res.status(200).json({
                  success: true,
                  payload: out,
                });
              }).catch ((err) => {
                return res.status(400).json({
                  success: false,
                  messsage: err.message,
                });
              });
            }
    } else {
        return res.status(400).json({
            success: false,
            message: "Error",
          });
    }
}
export default handler;