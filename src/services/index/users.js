import axios from 'axios'

export const signup = async({name, email,password})=>{
    try {
        const response = await axios.post("/api/users/register",{
            name,
            email,
            password
        })

return response.data;

    } catch (error) {
if(error.response && error.response.data.message)
 throw new Error(error.response.data.message)
throw new Error(error.message)
    }
}

export const login = async({email,password})=>{
    try {
        const response = await axios.post("/api/users/login",{

            email,
            password
        })

return response.data;

    } catch (error) {
if(error.response && error.response.data.message)
 throw new Error(error.response.data.message)
throw new Error(error.message)
    }
}

export const getUserProfile = async({token})=>{
    try {

const config = {
headers: {
    Authorization: `Bearer ${token}`
}
}

        const response = await axios.get("/api/users/profile", config)

return response.data;

    } catch (error) {
if(error.response && error.response.data.message)
 throw new Error(error.response.data.message)
throw new Error(error.message)
    }
}

export const updateProfile = async({token, userData})=>{
    try {
const config = {
headers: {
    Authorization: `Bearer ${token}`
}
}

        const response = await axios.put("/api/users/updateProfile",userData, config)

return response.data;

    } catch (error) {
if(error.response && error.response.data.message)
 throw new Error(error.response.data.message)
throw new Error(error.message)
    }
}

export const updateProfilePicture = async ({ token, formData }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        "/api/users/updateProfilePicture",
        formData,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
