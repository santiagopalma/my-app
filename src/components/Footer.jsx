import React from 'react'
 
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <footer  className="row bg-light text-dark-50 mt-5">
            <div>
                <div className="row justify-content-center " >
                
                        <small  className="col-md-2 col-7 my-2 justify-content-center">Copyright &copy; Tiretec Developer</small>
                     
                  
                        <div className=" row justify-content-md-center">
                                <hr></hr>
                                <div className="row justify-content-md-center col-sm-2 col-6 mx-auto my-2 align-self-center" >
                                <div  className="row col  ">
                                <SocialIcon url="https://www.facebook.com/riosymontanas.ec" />
                                </div>
                                <div  className="row col ">
                                <SocialIcon url="https://www.instagram.com/riosymontanas.ec/"/>
                                </div>
                                <div  className="row col ">
                                <SocialIcon url="https://www.youtube.com/watch?v=sh_cEPAiKns"/>
                                </div>
                                </div>
                        
                        </div>
                </div>
                
            </div>
        </footer>
    )
}
export default Footer