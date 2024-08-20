import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { editUser, infoUser, loginUser, registerUser } from "../services/DataService";
import { useLocation, useNavigate } from "react-router-dom";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [dataUser, setDataUser] = useState('')

    const regiterMutation = useMutation({
        mutationKey: ['register'],
        mutationFn: registerUser,
        onError: data => alert(data.response.data.message),
        onSuccess: ({ data }) => {
            console.log(data.message)
            navigate('/login')
        }
    })

    const Login = useMutation({
        mutationKey: ['login'],
        mutationFn: loginUser,
        onError: data => alert(data.response.data.message),
        onSuccess: ({ data }) => {
            console.log(data.message)
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.user.id)
            setDataUser(data.user)
            navigate('/dashboard')
        }
    })

    const edit = useMutation({
        mutationKey: ['edit'],
        mutationFn: editUser,
        onError: (error) => {
            console.log("Error data:", error);
            const errorMessage = error?.response?.data?.message || "Error desconocido";
            alert(errorMessage);
        },
        onSuccess: (data) => {
            console.log("Success data:", data);
            const successMessage = data?.message || "Operación exitosa";
            console.log(successMessage);

            navigate('/dashboard');
        }
    })


    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: infoUser,
        enabled: pathname === '/dashboard',
    });

    useEffect(() => {
        if (data && !isLoading) {
            setDataUser(data);
        }
    }, [data, isLoading]);

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setDataUser(null)
        navigate('/login')
        setModal(false)
    }

    function options() {
        setModal(!modal)
    }
    return (
        <Authcontext.Provider value={{ options, modal, regiterMutation, Login, dataUser, edit, logout, isLoading, isError }}>
            {children}
        </Authcontext.Provider>)
}
