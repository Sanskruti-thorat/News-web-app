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
        },

        getAnnoucement: async () => {
          return await axios.get('/annoucment');
        },
        addAnnouce:async (data:object)=> {
          return await axios.post('/annoucment', data);
        },
        deleteAnnouce: async (id:number)=>{
          return await axios.delete(`/annoucment/${id}`);
        }

    };
  };
  return services;

}
export default UserServices;