import axios from '../Axios/axiosInstance';


const UserServices =()=>{
  const services=()=>{
    return{
        getUser: async()=>{
          
            return await axios.get('/posts');
        },
        addNews:async (data:object)=>{
          return await  axios.post('/posts', data);

        },
        getAdmin: async()=>{
          return await axios.get('/admin');
        }
    };
  };
  return services;

}
export default UserServices;