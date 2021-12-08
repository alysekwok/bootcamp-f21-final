import {findCatByName} from "../../../../server/mongodb/actions"



export const findCatServerCall = async (name) => {
    try {
      const cat = await findCatByName(name)
      return cat
    } catch (e) {
      return {
        success: false,
        message: "ruh roh",
      }
    }
  }


  const handler = (req, res) => {
  const name = req.query.name
  findCatServerCall(name).then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })
}

export default handler
  