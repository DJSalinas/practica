const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom')

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {empleados: [], proyectos: [], areas: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/empleados'}).done(response => {
			this.setState({empleados: response.entity._embedded.empleados});
		});

		client({method: 'GET', path: '/api/proyectos'}).done(response => {
			this.setState({proyectos: response.entity._embedded.proyectos});
		});

		client({method: 'GET', path: '/api/areas'}).done(response => {
			this.setState({areas: response.entity._embedded.areas});
		});
	}
	render() {
		return (
			<>
				<h1>Registro de Asignaciones</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Empleados" emoji="💁🏻‍♂️" />
						<EmpleadoList empleados={this.state.empleados}/>
                		<Link to="/nuevo-empleado">Nuevo Empleado</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Proyectos" emoji="🏢" />
						<ProyectoList proyectos={this.state.proyectos}/>
						<Link to="/nuevo-proyecto">Nuevo Proyecto</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Areas" emoji="📚" />
						<AreaList areas={this.state.areas} />
						<Link to="/nueva-area">Nueva Area</Link>
					</div>
				</div>

				
				
			</>
		)
	}
}

//Funcion de flecha
const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}

class EmpleadoList extends React.Component{
	render() {
		const empleados = this.props.empleados.map(empleado =>
			<Empleado key={empleado._links.self.href} empleado={empleado}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombres</th>
						<th>Correo</th>
						<th>Acciones</th>
					</tr>
					{empleados}
				</tbody>
			</table>
		)
	}
}

class ProyectoList extends React.Component{
	render() {
		const proyectos = this.props.proyectos.map(proyecto =>
			<Proyecto key={proyecto._links.self.href} proyecto={proyecto}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Descripcion</th>
						<th>Acciones</th>
					</tr>
					{proyectos}
				</tbody>
			</table>
		)
	}
}

class AreaList extends React.Component{
	render() {
		const areas = this.props.areas.map(area =>
			<Area key={area._links.self.href} area={area}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{areas}
				</tbody>
			</table>
		)
	}
}

class Empleado extends React.Component{
	render() {
		const id = this.props.empleado._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.empleado.nombre}</td>
				<td>{this.props.empleado.correo}</td>
				<td>
					<Link to={"/ver-alumno/" + id}>Detalle</Link> | 
					<Link to={"/editar-alumno/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}


class Proyecto extends React.Component{
	render() {
		const id = this.props.proyecto._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.proyecto.nombre}</td>
				<td>{this.props.proyecto.descripcion}</td>
				<td>
					<Link to={"ver-curso/" + id}>Detalle</Link> | 
					<Link to={"editar-curso/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Area extends React.Component{
	render() {
		const id = this.props.area._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.area.nombre}</td>
				<td>
					<Link to={"ver-area/" + id}>Ingresar</Link>
				</td>
			</tr>
		)
	}
}


module.exports = HomePage;