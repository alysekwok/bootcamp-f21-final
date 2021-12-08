import {findCatByID} from "../../../../server/mongodb/actions"



export const findCatServerCall = async (id) => {
    try {
      const cat = await findCatByID(id)
      return cat
    } catch (e) {
      return {
        success: false,
        message: "ruh roh",
      }
    }
  }


  const handler = (req, res) => {
  const id = req.query._id
  findCatServerCall(id).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })
}

export default handler
  