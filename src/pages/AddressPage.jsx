import React ,{useState,useEffect}from 'react'
import {Header,Footer,AddressList} from '../components/index.component'
import apiCall from '../utils/API'
import Loader from '../components/Loader/Loader'
import { useNavigate } from "react-router-dom";

const AddressPage = ({addresses,selectedAddress,handleSelectAddress,handleBack}) => {

  const [addressDetails,setAddressDetails]=useState([])
  const [isLoading,setIsLoading] = useState(true)
  const navigate = useNavigate()

  const getAddressDetails = async ()=>{
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/address/allAddress',
      "GET",
      {Authorization:localStorage.getItem('token')})
      if(response==0){
        navigate('/login')
      }
    setAddressDetails(response)
    setIsLoading(false)
  }
  
  useEffect(()=>{
    getAddressDetails()
  },[])

  if(isLoading)return <Loader/>
  return (
    <>
        <Header/>
        <AddressList
          addresses={addressDetails}
          selectedAddress={selectedAddress}
          onSelectAddress={handleSelectAddress}
          onBack={handleBack}
          setAddressDetails={setAddressDetails}
        />
        <Footer/>
    </>
  )
}

export default AddressPage