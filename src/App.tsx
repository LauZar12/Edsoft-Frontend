import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './screens/Inicio';
import Contacto from './screens/Contacto';
import Instituciones from './screens/Instituciones';
import Login from './screens/Login';
import Bienvenido from './screens/Bienvenido';
import AdminPrincipal from './screens/CPassword';
import Docentes from './screens/Docente';
import Secretarios from './screens/Secretarios';
import TipoCalificaion from './screens/TipoCalificacion';
import EstablecerAño from './screens/EstablecerAño';
import CrearCursos from './screens/CrearCursos';
import Areas from './screens/Areas';
import Asignaturas from './screens/Asignaturas';
import Logros from './screens/Logros';
import CopyYear from './screens/CopyYear';
import CrearDocente from './screens/CrearDocente';
import CrearSecretario from './screens/CrearSecretario';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Inicio />} />
				<Route path='/inicio' element={<Inicio />} />
				<Route path='/instituciones' element={<Instituciones />} />
				<Route path='/contacto' element={<Contacto />} />
				<Route path='/login' element={<Login/>} />
				<Route path='/bienvenido' element={<Bienvenido/>} />
				<Route path='/configuracion' element={<AdminPrincipal/>} />
				<Route path='/docentes' element={<Docentes/>} />
				<Route path='/secretarios' element={<Secretarios/>} />
				<Route path='/tipocalificacion' element={<TipoCalificaion/>} />
				<Route path='/establecerano' element={<EstablecerAño/>} />
				<Route path='/cursos' element={<CrearCursos/>} />
				<Route path='/areas' element={<Areas/>} />
				<Route path='/asignaturas' element={<Asignaturas/>} />
				<Route path='/logros' element={<Logros/>} />
				<Route path='/copyyear' element={<CopyYear/>} />
				<Route path='/creardocente' element={<CrearDocente/>} />
				<Route path='/crearsecre' element={<CrearSecretario/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
