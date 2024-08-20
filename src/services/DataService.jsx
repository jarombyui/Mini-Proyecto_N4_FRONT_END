import axios from "axios"

export const registerUser = async (data) => {

    const newUser = await axios.post('http://localhost:3000/api/user/', data)
    return newUser
}

export const loginUser = async (data) => {

    const user = await axios.post('http://localhost:3000/api/user/login', data)
    return user
}

export const infoUser = async () => {
    const token = localStorage.getItem('token')
    const info = await axios.get('http://localhost:3000/api/user/info', {
        headers: { Authorization: token }
    })
    return info.data
}
export const editUser = async (dataForm) => {
    const id = localStorage.getItem('id')
    const user = await axios.patch(`http://localhost:3000/api/user/${id}`,dataForm)
    console.log(user.data);
    return user.data
}
