import AdminPage from "../screens/Admin/AdminPage";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/adopt/form")
    const apps = await res.json()
    
    return {
        props: { apps }
    }
}

export default AdminPage;