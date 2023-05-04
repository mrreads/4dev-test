import { useContext } from "react";
import { StoreContext } from "../context/store";

const useStore = () => {
	let stores = useContext(StoreContext);
    return stores;
}

export default useStore;