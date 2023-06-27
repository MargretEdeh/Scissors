import * as React from 'react';
import { NavBar } from '../Component/NavBar';
import { Description } from '../Component/Description';
import { ChooseScissor } from '../Component/ChooseScissor';
import { Pricing } from '../Component/Pricing';
import { UrlForm } from '../Component/UrlForm';
import { Faq } from '../Component/Faq';
import { Started } from '../Component/Started';
import { FooterSection } from '../Component/FooterSection';
import HeroSection from '../Component/HeroSection';
import { AuthContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';


export interface IHomeProps {
  
    
}

export function Home (props: IHomeProps) {
  const {accessToken} = React.useContext(AuthContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if(!accessToken){
      navigate('/signin');
    }
  }, []);
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <Description/>
        <ChooseScissor/>
        <Pricing/>
        <UrlForm/>
        <Faq/>
        <Started/>
        <FooterSection/>

      
    </div>
  );
}
