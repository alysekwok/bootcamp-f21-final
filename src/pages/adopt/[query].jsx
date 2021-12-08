import FormPage from "../../screens/form/formPage"

export async function getServerSideProps(context) {
    console.log(context.params)
    const { query } = context.params
    const res = await fetch(`http://localhost:3000/api/adopt/cats?id=${query}`)
    const cats = await res.json()
    for (let index = 0; index < cats.length; index++) {
        const cat = cats[index];
        if(cat._id == query) {
            return {
                props: { cat}
            }
        }
    }
    return {
        props: { cat: cat[0] }
    }
}

export default FormPage;