// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
// import UserServices from '../Axios/user.services';
import '../CSS/annouc.css'
import Marquee from 'react-fast-marquee';
 

// interface AData{
//     id:number;
//     annoucement:string ; 
// }



const Announcement = () => {
    // const [announcementList , setAnnoucementList] = useState<AData[]>([]);
    // const userServices = UserServices();

    // const retriveAnnouc = async ()=>{
    //     try {
    //         const response = await userServices().getAnnoucement();
    //         setAnnoucementList(response.data)
    //     }
    //     catch(error){
    //         console.log("error of fetching annoucement", error)
    //     }
    // }

    // useEffect(()=>{
    //     retriveAnnouc();
    // })
  return(
    <>

        
<Marquee>
    <div className="annoucement">
      
      <div className="annoucement-text text2">
        <span>Free Medical checkup at GMC !!!</span>
        <span>Vaccinate your dogs today!</span>
      </div>
      <div className="annoucement-text text2">
        <span>Free Medical checkup at GMC</span>
        <span>Vaccinate your dogs today!</span>
      </div>
      <div className="annoucement-text text2">
        <span>Free Medical checkup at GMC</span>
        <span>Vaccinate your dogs today!</span>
      </div>
      <div className="annoucement-text text2">
        <span>Free Medical checkup at GMC</span>
        <span>Vaccinate your dogs today!</span>
      </div>
    </div>
    </Marquee>
        
    </>
  );
};

export default Announcement;
