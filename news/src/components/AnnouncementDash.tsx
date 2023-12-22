/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react';
import UserServices from '../Axios/user.services';
import '../CSS/annoDash.css';
import { toast } from 'react-toastify';

interface AData {
  id: number;
  annoucement: string;
}

const AnnouncementDash = () => {
  const userServices = UserServices();
  const [annouces, setAnnouces] = useState<AData[]>([]);
  const [newAnno, setNewAnno] = useState({
    id: 0,
    annoucement: '',
  });

  const getAnnoucement = async () => {
    try {
      const response = await userServices().getAnnoucement();
      setAnnouces(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addAnnoucement = async () => {
    try {
      const response = await userServices().addAnnouce(newAnno);
      setAnnouces([...annouces, response.data]);
      setNewAnno({
        id: 0,
        annoucement: '',
      });
      toast.success("Successfully added the Annoucement!")
    } catch (error) {
      console.log('error', error);
    }
  };
  const deleteAnnoucement = async (id: number) => {
    try {
      const response = await userServices().deleteAnnouce(id);
      toast.success("Successfully deleted the data!")
      console.log("response", response);
     getAnnoucement();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAnnoucement();
  }, []);

  return (
    <>
      <h1>Announcement Dashboard</h1>
      <div className="announcementInput">
        <input
          type="text"
          placeholder="Enter announcement"
          value={newAnno.annoucement}
          onChange={(e) =>
            setNewAnno({ ...newAnno, annoucement: e.target.value })
          }
          className="announcement-input"
        />
        <div className="announcement-buttons">
          <button className="button" onClick={addAnnoucement}>
            Add
          </button>
        </div>
      </div>

      <br />

      {annouces.map((ann: AData) => (
        <>
        <div key={ann.id} className="announcement">
          <span>{ann.annoucement}</span>
          <div className="announcement-buttons">
            <button className="button" onClick={()=> deleteAnnoucement(ann.id)}>Delete</button>
          </div>
        </div>
        <br />
       </> 
      ))}
    </>
  );
};

export default AnnouncementDash;
