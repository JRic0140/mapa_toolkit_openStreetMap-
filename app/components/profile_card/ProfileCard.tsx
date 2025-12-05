'use client';
import styles from "./css/profile_card.module.css"

const ProfileCard = ()=>{
    const butons = [{
        "name":"Login",
        "action":()=>{}
    }]

   return <div className={`${styles.profile_card} absolute top-18 left-0 right-0 w-1/1 z-1100 rounded-lg`}>
        {butons.map((r,i)=><>
        <h1 className="py-3 ">{r.name}</h1>
        {butons.length > 1 && butons.length != i+1? <hr className="w-8/10 mx-auto" />:""}
        </>)}
    </div>

};

export default ProfileCard;