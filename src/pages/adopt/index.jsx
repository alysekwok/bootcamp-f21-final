import AdoptPage from "../../screens/Adopt/AdoptPage";

export async function getServerSideProps() {
    //tried to make this not a hardcoded url but got a typeerror
    const res = await fetch("http://localhost:3000/api/adopt/cats")
    const cats = await res.json()
    
    return {
        props: { cats }
    }
}

export default AdoptPage;