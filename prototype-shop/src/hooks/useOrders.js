import { useContext } from "react/cjs/react.development";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
    const { orders } = useContext(AppStateContext)

    return orders;
}