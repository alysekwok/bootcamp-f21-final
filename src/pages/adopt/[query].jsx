//import { findCatByName } from "../../../server/mongodb/actions"
import FormPage from "../../screens/form/formPage"
import { findCatServerCall } from "../api/adopt/name"

export async function getServerSideProps(context) {
    console.log(context.params)
    const { query } = context.params
    const cats = await findCatServerCall(query)
    const cat = JSON.parse(JSON.stringify(cats))
    console.log(cat[0])
    return {
        props: { cat : cat[0] }
    }
    
}

export default FormPage;