// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Table, Form, Button, Container, Row, Col } from "react-bootstrap";
// import UserServices from "../Axios/user.services";
// import { useState, useEffect } from "react";
// // import {validationSchema} from '../Validation/ValSchma';
// // import { useFormik } from "formik";

// interface AdminData {
//   id: number;
//   username: string;
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

// const AdminDash = () => {
//   const userServices = UserServices();
//   const [adminList, setAdminList] = useState<AdminData[]>([]);
//   const [newAdmin, setNewAdmin] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//   });
//   const [currentAdmin, setCurrentAdmin] = useState({
//     id: 0,
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     role: "",
//   });
//   const [isUpdate, setIsUpdate] = useState(false);

//   const getAdmin = async () => {
//     try {
//       const response = await userServices().getAdmin();
//       console.log("response", response);
//       setAdminList(response.data);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const addAdmin = async () => {
//     try {
//       const response = await userServices().addAdmin(newAdmin);
//       console.log("response", response);
//       setNewAdmin({ username: "", name: "", email: "", password: "", role: "" });
//       getAdmin();
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const deleteAdmin = async (id: number) => {
//     try {

//       const response = await userServices().deleteAdmin(id);
//       console.log("response", response);
//       getAdmin();
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const updateAdmin = async (id: number) => {
//     try {
//       const response = await userServices().updateAdmin(id, newAdmin);
//       console.log("response", response);
//       getAdmin();
//       setIsUpdate(false);
//       setNewAdmin({ username: "", name: "", email: "", password: "", role: "" });
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const handleUpdateClick = (user: any) => {
//     setIsUpdate(true);
//     setCurrentAdmin({
//       id: user.id,
//       username: user.username,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       role: user.role,
//     });
//     setNewAdmin({
//       username: user.username,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       role: user.role,
//     });
//   };


//   // const {
//   //   values,
//   //   errors,
//   //   touched,
//   //   isSubmitting,
//   //   setFieldValue,
//   //   handleBlur,
//   //   handleChange,
//   //   handleSubmit,
//   //   isValid,
//   // } = useFormik<FormData>({
//   //   initialValues: {
//   //     id: 0,
//   //     username: '',
//   //     name:'',
//   //     email: '',
//   //     password: '',
//   //     role: '',
//   //   },
//   //   validationSchema:validationSchema,
//   //   onSubmit,
//   // });



//   useEffect(() => {
//     getAdmin();
//   }, []);

//   return (
//     <Container className="mt-4">
//       <Row>
//         <Col>
//           <h1 className="mt-4">List Of employee</h1>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>UserName</th>
//                 <th>Name</th>
//                 <th>email</th>
//                 <th>Password</th>
//                 <th>Role</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {adminList.map((admin: any) => (
//                 <tr key={admin.id}>
//                   <td>{admin.id}</td>
//                   <td>{admin.name}</td>
//                   <td>{admin.username}</td>
//                   <td>{admin.email}</td>
//                   <td>{admin.password}</td>
//                   <td>{admin.role}</td>
//                   <td>
//                     <Button variant="danger" onClick={() => deleteAdmin(admin.id)}>
//                       Delete
//                     </Button>
//                     <Button variant="warning" className="ms-2" onClick={() => handleUpdateClick(admin)}>
//                       Update
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//                 <Row>
//         <Col>
//           <h3>{isUpdate ? "Update employee" : "Add employee"}</h3>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>UserName:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newAdmin.username}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newAdmin.name}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={newAdmin.email}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Password:</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={newAdmin.password}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Role:</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={newAdmin.role}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={isUpdate ? () => updateAdmin(currentAdmin.id) : addAdmin}>
//               {isUpdate ? "Save" : "Add"}
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminDash;






/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Form, Button, Container, Row, Col } from "react-bootstrap";
import UserServices from "../Axios/user.services";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationSchema } from '../Validation/ValSchma';

interface AdminData {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const AdminDash = () => {
  const userServices = UserServices();
  const [adminList, setAdminList] = useState<AdminData[]>([]);
  const [currentAdmin, setCurrentAdmin] = useState<AdminData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);

  
  const getAdmin = async () => {
    try {
      const response = await userServices().getAdmin();
      console.log("response", response);
      setAdminList(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const addAdmin = async () => {
    try {
      const response = await userServices().addAdmin(values);
      console.log("response", response);
      setValues({
        id: 0,
        username: "",
        name: "",
        email: "",
        password: "",
        role: "",
      });
      getAdmin();
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteAdmin = async (id: number) => {
    try {
      const response = await userServices().deleteAdmin(id);
      console.log("response", response);
      getAdmin();
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const updateAdmin = async (id: number) => {
    try {
      const response = await userServices().updateAdmin(id, values);
      console.log("response", response);
      getAdmin();
      setIsUpdate(false);
      setValues({
        id: 0,
        username: "",
        name: "",
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const handleUpdateClick = (user: AdminData) => {
    setIsUpdate(true);
    setCurrentAdmin({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    setValues({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  };
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      id: 0,
      username: "",
      name: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema,
    onSubmit: isUpdate ? () => updateAdmin(currentAdmin.id) : addAdmin,
  });
  useEffect(() => {
    getAdmin();
  }, []);
  
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="mt-4">List Of employee</h1>
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
              {adminList.map((admin: AdminData) => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.username}</td>
                  <td>{admin.email}</td>
                  <td>{admin.password}</td>
                  <td>{admin.role}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteAdmin(admin.id)}>
                      Delete
                    </Button>
                    <Button variant="warning" className="ms-2" onClick={() => handleUpdateClick(admin)}>
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{isUpdate ? "Update employee" : "Add employee"}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && <div className="error">{errors.username}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <div className="error">{errors.name}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <div className="error">{errors.password}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role:</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.role && errors.role && <div className="error">{errors.role}</div>}
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isValid || isSubmitting}>
              {isUpdate ? "Save" : "Add"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDash;

