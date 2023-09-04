import { Outlet } from "react-router-dom"
import NavBar from "../components/Core/NavBar"
import Footer from "../components/Core/Footer"
import Container from "../components/Container"

function Core() {
    return(
        <>
            <NavBar/>
            <Container customClass="min-height">
                <Outlet/>
            </Container>
            <Footer/>
        </>
    )
}

export default Core