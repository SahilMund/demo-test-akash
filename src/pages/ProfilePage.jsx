import React,{useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Profile ,Footer,Header } from '../components/index.component'
import apiCall from '../utils/API'
import Loader from '../components/Loader/Loader'

const ProfilePage = () => {
  const [profileDetails,setProfileDetails] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const navigate = useNavigate()
  console.log("localStorage.getItem('token')",localStorage.getItem('token'));
  
  const getProfileDetails = async ()=>{
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/all/profilePage',
      "GET",
      {Authorization:localStorage.getItem('token')})
    if(response==0){
      navigate('/login')
    }
    setProfileDetails(response)
    setIsLoading(false)
  }
  
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