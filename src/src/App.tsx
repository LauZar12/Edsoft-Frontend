import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './screens/Inicio';
import Contacto from './screens/Contacto';
import Instituciones from './screens/Instituciones';
import Login from './screens/Login';
import Bienvenido from './screens/Bienvenido';
import AdminPrincipal from './screens/CPassword';
import Docentes from './screens/Docente';
import Secretarios from './screens/Secretarios';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
