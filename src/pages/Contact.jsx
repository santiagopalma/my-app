import React from 'react';
import {db} from '../firebase';
import SimpleMap from './SimpleMap'
import rym from '../images/rym-bg.jpg'
const Contact = () => {
    const [nombre,setNombre]=React.useState('')
    const [apellido,setApellido]=React.useState('')
    const [email,setEmail]=React.useState('')
    const [mensaje,setMensaje]=React.useState('')
    const [telefono,setTelefono]=React.useState('')
    const submitForm=async(e)=>{
        e.preventDefault();
        if(!nombre.trim()||!apellido.trim()||!email.trim()||!mensaje.trim()||!telefono.trim()){
            console.log('elemento vacio')
            return
        }
        try {
            await db.collection('mensajes').add({
                nombre :nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                mensaje:mensaje,
                fecha :Date.now()
            })
            setNombre('')
            setApellido('')
            setEmail('')
            setTelefono('')
            setMensaje('')
        } catch (error) {
            console.log("error")
        }
    }
    return (
        <div className="row mt-6">
               
                       <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-6  mt-10"> 
                       <h1 className="p-2">Ubicación de la Hostería</h1>
                       <SimpleMap/>
                            <div className="card shadow-lg border-0 p-2 mt-4">
                                <h1 id="contactH1" className="text-center text-white display-4 d-inline-block ">Contáctanos</h1>
                                <div className="row">
                                    <div className="col-sm-6 col-md-5 col-lg-6">
                                        
                                    <img src={rym} alt="logo-rios-y-montañas"  className="img-fluid mt-4 mb-4"/>  
                                        <h2>Hostería Ríos y Montañas</h2>
                                        <h6><b>Dirección: </b>Finca Hosteria Familiar situada en Cumandá - Bucay
                                        a 1 hora 30 min de guayaquil - 80 km</h6> 
                                        <h6><b>Teléfono:</b> 0980446267 - 0985086040</h6>
                                        <h6><b>Correo:</b> jobcarmin@hotmail.com - 
                                        riosymontanas.ec@gmail.com</h6>
                                        <h6>Horario de atención De 08h00 a 00:00, de lunes a domingo. </h6>
                                        
                           
                                    </div>
                                <div className="col-sm-6 col-md-5 offset-md-3 col-lg-6 offset-lg-0">
                                <form onSubmit={submitForm} className="form-group my-4 text-center p-2">
                                    <div className="row">
                                        
                                            
                                            <input type="text" className="form-control-lg col-12 "  
                                            onChange={e=>setNombre(e.target.value)}
                                            value={nombre}
                                            placeholder="Su nombre..." required />
                                        
                                      
                                    </div>
                                    <div><p></p></div>
                                    <div className="row">
                                    
                                        
                                            <input type="text" className="form-control-lg   col-12  " 
                                            onChange={e=>setApellido(e.target.value)}
                                            value={apellido}
                                            placeholder="Su apellido..." required />
                                    
                                    </div>
                                    <div><p></p></div>
                                    <div className="form-group mb-5">
                                        <div className="row">
                                            
                                                
                                                <input type="email" className="form-control-lg col-12" 
                                                onChange={e=>setEmail(e.target.value)}
                                                value={email}
                                                placeholder="Su correo electrónico..." required />
                                            
                                            
                                        </div>
                                        <div><p></p></div>
                                        <div className="row">
                                        
                                            
                                                <input type="tel" className="form-control-lg col-12" 
                                                onChange={e=>setTelefono(e.target.value)}
                                                value={telefono}
                                                placeholder="Su teléfono... " required />
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                            <textarea className="form-control"  
                                            onChange={e=>setMensaje(e.target.value)}
                                            value={mensaje}
                                            placeholder="Dejanos tu opinión o requerimiento ..." required  rows="4"></textarea>
                                    
                                    </div>
                                    <div className="mt-5 col-md-6 col-12 mx-auto  ">
                                        <button 
                                        type="submit"
                                        id="botonEnviarContactanos"
                                        className="btn btn-outline-dark btn-lg btn-block">Enviar</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                 
                    </div>
                </div>
        </div>

    )
}
export default Contact