import { useContext } from "react"
import { dropdownContext } from "../../Contexts/dropdown.context"
import { CartComponent } from "../Cart-Component/Cart-component";


export const CartDropdown = () => {
    const { visibility } = useContext(dropdownContext);

    return (
        <>
            {visibility && <CartComponent/>}
        </>
    )
}