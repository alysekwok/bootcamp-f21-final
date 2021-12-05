import AdminPage from "../screens/Admin/AdminPage";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/applications")
    const apps = await res.json()
    
    return {
        props: { apps }
    }
}

export default AdminPage;