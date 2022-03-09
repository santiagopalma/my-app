import React, { useEffect, useState } from "react";
import {getActividades} from '../Data/ActividadData';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Title from '../components/Title';
const Actividades = () => {
   
    const [actividades, setActividades] = useState([]);
     

    const getlist = async () => { 
        try {
            const list = await getActividades();
            setActividades(list);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getlist();
    }, []);
    
    const Card = (props) => (
        <div className="col mb-4"> 
            <div className="card shadow-lg h-100">
                <img src={props.data.Imagen} className="card-img-top" alt="..."></img>
                <h2  id = "cardHeaderActividad"className="card-header">{props.data.Titulo}</h2>
                <div className="card-body">
                    <p className="card-text">Descripción: {props.data.Descripcion}</p>
                    <p className="card-text">Duración: {props.data.Duracion}</p>
                    <p className="card-text">Hora: {props.data.Hora}</p>
                    <p className="card-text">Capacidad permitida: solo {props.data.Capacidad}</p>
                    <p className="card-text">Forma de registro: Reservación al 0959858891</p>
                </div>
                
                
            </div>
        </div>
    )

 return(
    <div>
        <Hero hero="actividadesHero">
        </Hero>
        <Banner title="Actividades disponibles" subtitle="Disfruta de nuevas experiencias">
                <Link to="/" className="btn btn-primary">
                    Volver al Inicio
                </Link>
        </Banner>
        <div className=" mb-5 p-5">
                <Title title="Actividades" />
                <div className="row row-cols-1 row-cols-md-3 mt-5">
                         
                            <> 
                            {actividades.map((info, i) => (
                                 <Card data={info} key={i}></Card>
                             ) )}
                            
                            </>
                              
                                
                </div>
        </div>
           
    </div>
    )
    
}


export default Actividades
