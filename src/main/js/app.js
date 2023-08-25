const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoEmpleadoPage = require('./pages/nuevo-empleado');
const NuevoProyectoPage = require('./pages/nuevo-proyecto');
const VerAreaPage = require('./pages/ver-area');
const NuevAsignacionPage = require('./pages/nuevo-asignacion');

const router = createBrowserRouter([
	{ path: '/', element:<HomePage /> },
	{ path: '/nuevo-empleado', element:<NuevoEmpleadoPage /> },
	{ path: '/nuevo-proyecto', element:<NuevoProyectoPage /> },
	{ path: '/ver-area/:id', element:<VerAreaPage />},
	{ path: '/ver-area/:id/nuevo-asignacion', element:<NuevAsignacionPage />}
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>, 
	document.getElementById('react'))
