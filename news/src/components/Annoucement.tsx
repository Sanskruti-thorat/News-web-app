/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { useEffect, useState } from 'react';
import UserServices from '../Axios/user.services';
import '../CSS/annouc.css'
import Marquee from 'react-fast-marquee';
 

interface AData{
    id:number;
    annoucement:string ; 
}



const Announcement = () => {
    const [announcementList , setAnnoucementList] = useState<AData[]>([]);
    const userServices = UserServices();

    

    useEffect(()=>{
      const retriveAnnouc = async ()=>{
        try {
            const response =  await userServices().getAnnoucement();
            setAnnoucementList(response.data)
        }
        catch(error){
            console.log("error of fetching annoucement", error)
        }
    };
     retriveAnnouc();
    },[]);
  return(
    <>

        
<Marquee>
    <div className="annoucement">
      
      {announcementList.map((ann:any)=>(<>
      
        <div key={ann.id} className="annoucement-text text2">
        <span>{ann.annoucement} !!!</span>
        <span>{ann.annoucement}!</span>
      </div>
      </>

      ))}
    </div>
    </Marquee>
        
    </>
  );
};

export default Announcement;
