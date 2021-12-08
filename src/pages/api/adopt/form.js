import {findForm} from "../../../../server/mongodb/actions"



export const findFormServerCall = async () => {
    try {
      const form = await findForm()
      return form
    } catch (e) {
      return {
        success: false,
        message: "ruh roh",
      }
    }
  }

  const handler = (req, res) =>
  findFormServerCall().then((payload) => {
    if (payload.success) res.status(200)
    else res.status(500)
    res.json(payload)
  })

export default handler
  