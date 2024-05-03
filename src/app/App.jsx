
import NavBarComponent from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Initial from "../initial/page";
import Success from "../success/page";
import Cancel from "../cancel/page";
import Loja from "./loja/page";
import CartProvider from "./CartContext";

function App(){

    return(
        <CartProvider>
            <Container>
            <NavBarComponent/>
            <BrowserRouter>
                <Routes>
                    <Route index element ={<Initial/>} />
                    <Route path = "success" element={<Success/>} />
                    <Route path ="cancel" element={<Cancel />} />
                    <Route path = "loja" element={<Loja />} />
                </Routes>
            </BrowserRouter>
            </Container>

        </CartProvider>
            

    )
}

export default App;