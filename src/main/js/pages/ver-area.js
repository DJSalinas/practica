const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerAreaPage = () => {

    let { id } = useParams();
    const [area, setArea] = useState({});
    const [asignaciones, setAsignaciones] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/areas/' + id
        }).done(response => setArea(response.entity))
        client({
            method: 'GET',
            path: '/api/asignaciones/' + id + '/formacion'
        }).done(response => setAsignaciones(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Area</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{area.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Miembros del Area</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Proyecto</th>
                    </tr>
                </thead>
                <tbody>

                    {asignaciones.map(asignacion=>{
                        return(
                            <tr key={asignacion.ID}>
                                <td>{asignacion.EMPLEADO}</td>
                                <td>{asignacion.PROYECTO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-area/${id}/nuevo-asignacion`}>Nueva Asignacion</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerAreaPage;