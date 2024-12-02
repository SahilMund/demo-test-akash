import React,{useState , useEffect} from 'react'
import { Profile ,Footer,Header } from '../components/index.component'
import apiCall from '../utils/API'
import Loader from '../components/Loader/Loader'

const ProfilePage = () => {
  const [profileDetails,setProfileDetails] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const getProfileDetails = async ()=>{
    const resopnse = await apiCall(
      'http://localhost:8080/api/all/profilePage',
      "GET",
      {Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYXNoMUBnbWFpbC5jb20iLCJ1c2VySWQiOjE3MzI5NTA4OTE1MDUsImlhdCI6MTczMjk1MDk1OX0.6dmZoF9MURjjUk2RgPvlp67wIzaGJ1MpIAMhiBNlzTk"},
    )
    setProfileDetails(resopnse)
    setIsLoading(false)
  }
  console.log("profileDetails==",profileDetails);
  
  useEffect(()=>{
    getProfileDetails()
  },[])
  if(isLoading)return <Loader/>
  return (
    <>
        <Header/>
        <Profile profileData={profileDetails?.result}/>
        <Footer/>
    </>
  )
}

export default ProfilePage