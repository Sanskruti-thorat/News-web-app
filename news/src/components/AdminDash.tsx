/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "react-bootstrap";
import UserServices from "../Axios/user.services";
import { useState, useEffect } from "react";



interface AdminData{
    id:number;
    username:string;
    name:string;
    email:string;
    password:string;
    role:string;
}
const AdminDash = () => {
 const userServices = UserServices();
 const [adminList ,setAdminList] = useState<AdminData[]>([]);
 const[newAdmin , setNewAdmin ] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    role:"",
 });
//  const [editingUser, setEditingUser] =  useSta3te<number | null>(null);

    const getAdmin = async () => {
        try {
          const response = await userServices().getAdmin();
          console.log('response', response);
          setAdminList(response.data);
        } catch (error) {
          console.log('error', error);
        }

      };


      const addAdmin = async () => {
        try {
          const response = await userServices().addAdmin(newAdmin);
          console.log('response', response);
          setNewAdmin({ username: "", name: "", email: "", password:"" , role:""});
         getAdmin();
        } catch (error) {
          console.log('error', error);
        }
      };

      const deleteAdmin = async (id: number) => {
        try {
          const response = await userServices().deleteAdmin(id);
          console.log('response', response);
          getAdmin();
        } catch (error) {
          console.log('error', error);
        }
      };



    //   const startEditing = (user:any) => {
    //     setEditingUser(user.id);
    //     setNewAdmin({ username: "", name: "", email: "", password:"" , role:""});
    // }
      
    //   const saveEditing = async () => {
    //     try {
    //       const response = await userServices().updateAdmin(editingUser!, newAdmin);
    //       console.log(response.data);
    //       setEditingUser(null);
    //     setNewAdmin({ username: "", name: "", email: "", password:"" , role:""});
    //       getAdmin();
    //     } catch (error: any) {
    //       console.log('error editing user', error.message);
    //     }
    //   }


      
      useEffect(()=>{
      getAdmin();
      },[]);
    return ( 
    
    
    <>
    <h1>Welcome to admin dash</h1>

    <>
      <div>
        <h3>add</h3>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
          
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newAdmin.name}
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={newAdmin.email}
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
          
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={newAdmin.role}
            onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
          
          />
        </div>
      </div>
        <button  onClick={addAdmin}>
         Add 
        </button>
      <div>
        <h1>List Of employee</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>UserName</th>
                <th>Name</th>
                <th>email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminList.map((admin: any) => (
                <tr key={admin.id} >
                  <td>{admin.id}</td>
                   <td>{admin.name}</td>
                  <td>{admin.username}</td>
                  <td>{admin.email}</td>
                  <td>{admin.password}</td>
                  <td>{admin.role}</td>
                  <td>
                    <button onClick={()=>deleteAdmin(admin.id)}>Delete</button>
                    <button>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
    </> );
}
 
export default AdminDash;