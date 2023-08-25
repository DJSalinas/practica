const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoMatriculaPage = () => {

    let { id } = useParams();

    const [empleados, setEmpleados] = useState([])
    const [proyectos, setProyectos] = useState([])
    
    const [idEmpleado, setIdEmpleado] = useState('')
    const [idProyecto, setIdProyecto] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/asignaciones',
            entity: {
                area: 'http://localhost:8080/api/areas/'+id,
                empleado: 'http://localhost:8080/api/empledos/'+idEmpleado,
                proyecto: 'http://localhost:8080/api/proyectos/'+idProyecto},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location.href = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/empleados'
        }).done(response=>{
            setEmpleados(response.entity._embedded.empleados)
        })
        client({
            method: 'GET',
            path: '/api/proyectos'
        }).done(response=>{
            setProyectos(response.entity._embedded.proyectos)
        })

    },[])

    return (
        <>
            <h1>Nuevo Empleado</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='empleado'>Empleado</label>
                <select name="empleado" id="empleado" onChange={(e)=>{setIdEmpleado(e.target.value)}}>
                    {empleados.map(empleado => {	
                        const value = empleado._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{empleado.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Proyecto </label>
                <select name="proyecto" id="proyecto" onChange={(e)=>{setIdProyecto(e.target.value)}}>
                    {proyectos.map(proyecto => {	
                        const value = proyecto._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({proyecto.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Asignacion" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoMatriculaPage;