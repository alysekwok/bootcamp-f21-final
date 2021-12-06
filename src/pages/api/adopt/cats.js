import {findCat} from "../../../../server/mongodb/actions"


export const findCatServerCall = async () => {
    try {
      const cat = await findCat()
      return cat
    } catch (e) {
      return {
        success: false,
        message: "ruh roh",
      }
    }
  }

  const handler = (req, res) =>
  findCatServerCall().then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler
  



