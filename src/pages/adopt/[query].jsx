//import { findCatByName } from "../../../server/mongodb/actions"
import FormPage from "../../screens/form/formPage"
import { findCatServerCall } from "../api/adopt/name"

export async function getServerSideProps(context) {
    /*
    console.log(context.params)
    const { query } = context.params
    const res = await fetch(`http://localhost:3000/api/adopt/cats?id=${query}`)
    const cats = await res.json()
    for (let index = 0; index < cats.length; index++) {
        const cat = cats[index];
        if(cat.name == query) {
            console.log(cat)
            return {
                props: { cat}
            }
        }
    }
    return {
        props: { cats: cats[0] }
    }
    */
    
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