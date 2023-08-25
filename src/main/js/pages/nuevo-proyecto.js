const React = require('react');
const {useState} = require('react')
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoProyectoPage = () => {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path:'/api/proyectos',
            entity:{nombre:nombre, descripcion:descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(() => {
            window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Proyecto</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input type='text' id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)}/><br/>
                <label>Descripcion</label><br/>
                <input type='text' id='descripcion' name='descripcion' onChange={e=>setDescripcion(e.target.value)}/><br/>
                
                <input type='submit' value="Guardar Proyecto" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoProyectoPage;