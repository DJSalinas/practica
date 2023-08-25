const React = require('react');
const {useState} = require('react')
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoEmpleadoPage = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: 'POST',
            path:'/api/empleados',
            entity:{nombre:nombre, correo:correo},
            headers: {'Content-Type': 'application/json'}
        }).done(() => {
            window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Empleado</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label><br/>
                <input type='text' id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)}/><br/>
                <label>Correo</label><br/>
                <input type='text' id='correo' name='correo' onChange={e=>setCorreo(e.target.value)}/><br/>
                
                <input type='submit' value="Guardar Empleado" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoEmpleadoPage;