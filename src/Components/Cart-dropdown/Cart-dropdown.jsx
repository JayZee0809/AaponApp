import { useContext } from "react"
import { dropdownContext } from "../../Contexts/dropdown.context"
import { CartDropdownComponent } from "../Cart-dropdown-Component/Cart-dropdown-component";


export const CartDropdown = () => {
    const { visibility } = useContext(dropdownContext);

    return (
        <>
            {visibility && <CartDropdownComponent/>}
        </>
    )
}