import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { AboutUsSection, AppPromo, Deals, Header, Hero, PartnerSection, PopularCategories, PopularRestaurants, StatsSection ,Footer} from '../components/index.component'
import apiCall from '../utils/API'
import Loader from '../components/Loader/Loader'

const HomePage = () => {
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()

    const getHomeDetails = async ()=>{
        const response = await apiCall(
          import.meta.env.VITE_BACKEND_BASE_URL+'/api/user/userProfile',
          "GET",
          {Authorization:localStorage.getItem('token')})
        if(response==0){
          navigate('/login')
        }
        {localStorage.setItem('userName',response.name)}
        setIsLoading(false)
      }
      
      useEffect(()=>{
        getHomeDetails()
      },[])
    
    if(isLoading)return <Loader/>
    return (
        <>
            <Header/>
            <Hero />
            <Deals />
            <PopularCategories />
            <PopularRestaurants />
            <AppPromo />
            <PartnerSection />
            <AboutUsSection />
            <StatsSection />
            <Footer/>
        </>
    )
}

export default HomePage