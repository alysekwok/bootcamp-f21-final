import FormPage from "../../screens/form/formPage"

export async function getServerSideProps(context) {
    console.log(context.params)
    const { query } = context.params
    const res = await fetch(`http://localhost:3001/cats?id=${query}`)
    const cat = await res.json()
    console.log(cat[0])
    return {
        props: { cat: cat[0] }
    }
}

export default FormPage;