import AdoptPage from "../../screens/Adopt/AdoptPage";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/adopt/cats")
    const cats = await res.json()
    
    return {
        props: { cats }
    }
}

export default AdoptPage;