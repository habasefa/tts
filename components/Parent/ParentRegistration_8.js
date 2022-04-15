import Container from "./Container"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"


export default function ParentRegistration(props) {
return (<>
    <Container >
        <Header />
        <Main >
            {props.children}
        </Main>
        <Footer />
    </Container >
    </>
)
}
