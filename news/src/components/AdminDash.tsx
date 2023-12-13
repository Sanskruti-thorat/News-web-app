/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Form, Button, Container, Row, Col } from "react-bootstrap";
import UserServices from "../Axios/user.services";
import { useState, useEffect } from "react";

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
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [currentAdmin, setCurrentAdmin] = useState({
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
      const response = await userServices().addAdmin(newAdmin);
      console.log("response", response);
      setNewAdmin({ username: "", name: "", email: "", password: "", role: "" });
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
      const response = await userServices().updateAdmin(id, newAdmin);
      console.log("response", response);
      getAdmin();
      setIsUpdate(false);
      setNewAdmin({ username: "", name: "", email: "", password: "", role: "" });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleUpdateClick = (user: any) => {
    setIsUpdate(true);
    setCurrentAdmin({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    setNewAdmin({
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  };

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
              {adminList.map((admin: any) => (
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
                <Row>
        <Col>
          <h3>{isUpdate ? "Update employee" : "Add employee"}</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>UserName:</Form.Label>
              <Form.Control
                type="text"
                value={newAdmin.username}
                onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={newAdmin.name}
                onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={newAdmin.password}
                onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role:</Form.Label>
              <Form.Control
                type="text"
                value={newAdmin.role}
                onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={isUpdate ? () => updateAdmin(currentAdmin.id) : addAdmin}>
              {isUpdate ? "Save" : "Add"}
            </Button>
          </Form>
        </Col>
      </Row>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDash;
