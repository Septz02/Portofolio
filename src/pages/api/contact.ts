import type { NextApiRequest, NextApiResponse } from 'next'
 
interface  ResponseData {
  location: Location | null,
  social: SocialMedia,
  phone: Phone
}

interface  Location {
  country: string;
  city: string;
  street: string;
}

interface  SocialMedia  {
  email: string;
  skype: string;
  telegram: string;
}

interface  Phone  {
  suport: string | null;
  office: string;
  personal: string;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response:ResponseData={
    location:{ 
      city:"Jakarta", 
      country:"Indonesia", 
      street:"Jl. Pess"
    },
    phone:{
      office:"021 889 8933",
      personal:"0813 4994 9997", 
      suport: null
    },
    social: {   
      email:"Septz@gmail.com",
      skype:"@septz",
      telegram:"@septz"
    }
  }
  res.status(200).json(response)
}