import axios from '../Axios/axiosInstance';


const UserServices =()=>{
  const services=()=>{
    return{
        getUser: async()=>{
          
            return await axios.get('/posts');
        },
        getAdmin: async()=>{
          return await axios.get('/admin');
        }
    };
  };
  return services;

}
export default UserServices;