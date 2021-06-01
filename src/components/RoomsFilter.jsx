import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context.jsx';
import Title from '../components/Title';
//to get all unique value
const getUnique = (items,value) => {
return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
    handleChange , type ,capacity ,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    //get unique type
    let types = getUnique(rooms,'type');
    //get all
    types = ['all',...types];
    
    //map to jsx
    types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="Buscar Habitaciones" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="type">Tipo de Habitación</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Capacidad</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">precio {price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="custom-control custom-checkbox my-3">
                        <input type="checkbox" className="custom-control-input" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast" className="custom-control-label ">Desayuno</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets" className="custom-control-label">Mascotas</label>
                    </div>
                    <div className="input-group my-3">
                        <label htmlFor="size" className="mr-4">Tamaño </label>
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="form-control" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}