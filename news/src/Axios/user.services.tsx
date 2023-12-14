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
        deleteNews: async(id:number)=>{
          return await axios.delete(`/posts/${id}`);

        } ,
        updateNews:async (id:number, data:object)=>{
          return await axios.put(`/posts/${id}`, data);

        },
        getAdmin: async()=>{
          return await axios.get('/admin');
        },
        addAdmin: async(data : object)=>{
          return await axios.post('/admin', data);
        },
        deleteAdmin: async(id:number)=>{
          return await axios.delete(`/admin/${id}`);
        },
        updateAdmin: async (id: number, data: object) => {
          return await axios.put(`/admin/${id}`, data);
        }

    };
  };
  return services;

}
export default UserServices;