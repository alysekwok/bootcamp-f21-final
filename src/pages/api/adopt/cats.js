import {findCats} from "../../../../server/mongodb/actions"


export const findCatsServerCall = async () => {
    try {
      const cat = await findCats()
      return cat
    } catch (e) {
      return {
        success: false,
        message: "ruh roh",
      }
    }
  }

  const handler = (req, res) =>
  findCatsServerCall().then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler
  



