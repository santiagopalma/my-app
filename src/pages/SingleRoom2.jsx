import React from 'react'
import {Link} from 'react-router-dom';
import {RoomContext} from '../context/RoomProvider'
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import {auth} from '../firebase'
import 'react-slideshow-image/dist/styles.css'
import { MySlide } from './MySlide';
import { Slide } from 'react-slideshow-image';
 
export const habitacionContext=React.createContext()

const SingleRoom2=(habitacion )=>{
    const{room}=React.useContext(RoomContext)
    const [flag,setFlag] = React.useState(false)
    const [flag2,setFlag2] = React.useState(true)
    const id = auth.currentUser
    const array  =room.descripcion.split(",")
    const elemntLi = array.map((e,i) =><li key={i}>{e}</li>);
  
  
    // <img   src={room.imagen} alt={room.categoria} className="img-fluid mb-3 flex" />
    React.useEffect(() => {
        if (id !== null ){
            console.log("usuario actual",id )
            setFlag(true)
            setFlag2(false)
        }
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
    , [  ])
    console.log(room)
    return(
        <>
           <StyledHero img={room.imagen }>
       <Banner title={`${room.categoria}`}>
       <Link to="/rooms" className="btn btn-primary">Volver a habitaciones</Link>
       </Banner>
       </StyledHero>

       <div className="container roomerror">
       <section className="single-room container">
          <div className="row">
                <div className="col-md-6 col-sm-6 mx-auto" >
                    <div className="card border-0 shadow-lg mb-4 ">
                    <Slide easing="ease ">
                        {room.imagenes.map((e,index) => {
                            return <MySlide key={index}
                              imagen={e} />             
                        })}
                    </Slide>
                       

                    </div>
                </div>
          </div>
          <div className="single-room-info mt-6">
              <article className="desc">
                 <h3>Detalles :</h3>
                  <ul>{ elemntLi}</ul> 
              </article>
              <article className="info">
                 <h3>Información: </h3>
                 <h6>Precio : ${room.precio}</h6>
                 <h6>
                     Capacidad : {" 2 "}
                 </h6>
                 <h6>Mascotas permitidas : No se admite</h6>
                 <h6> Desayuno gratis incluido</h6>
              </article>
          </div>
       </section>
       {flag &&   
            <section className="room-extras">
    
                <div className="p-4 clearfix">
                    <div className="row">
                        <div className="col-md-3 col-6 ml-auto">
                            <Link to={`/booknow/${room.categoria}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Registrar</Link>
                        </div>
                    </div>
                </div>
            </section>
        }
       {flag2 &&   
            <section className="room-extras">
                <div className="p-4 ">
                    <h1 className="font-weight-bolder"> Hostería Ríos y Montañas</h1>
                        <h3><mark> Le recuerda que para poder registrarse debe iniciar sesión.</mark></h3>
                        <Link to={`/Login`} className="btn btn-outline-primary btn-block btn-lg float-right mt-4 ">Iniciar Sesión</Link>
                    </div>
            </section>
        }
        </div>
        </>
    )  
}
export default   SingleRoom2    