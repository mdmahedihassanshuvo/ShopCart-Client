import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useCart = () => {
    const {user} = useContext(AuthContext)
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addCart?email=${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return [products, refetch]
};

export default useCart;