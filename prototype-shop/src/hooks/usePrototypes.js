import { useContext } from "react/cjs/react.development";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
    const { prototypes } = useContext(AppStateContext)

    return prototypes;
}