import useWindowSize from "../hooks/useWindowSize";
import Logo from "../assets/logo@2x.png";
import LogoInst from "../assets/institucionLogo@2x.png";
import BackArrow from "../assets/backArrow.jpg";
import { useLoginMutation } from "../generated/graphql";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [LoginMutation, { data, loading, error }] = useLoginMutation();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const windowSize = useWindowSize();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  const onSubmit = async () => {
    const response = await LoginMutation({
      variables: {
        username: user,
        password,
      },
    });
    if (response.data?.tokenAuth?.token) {
      navigate("/bienvenido");
    }
    console.log(response);
  };

  return (
    <div className="w-100 vh-100 overflow-hidden bg-gray1 pb-4">
      <a
        className="navbar-brand d-flex align-items-center mx-3 my-3 col-xlg-5 w-10"
        href="/instituciones"
      >
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="d-inline-block w-20 h-20 align-middle mx-0 my-0"
        />
        <img
          src={Logo}
          alt="Logo EdSoft"
          className="d-inline-block w-16 h-16 align-text-middle mx-3 my-3"
        />
        <h3 className="align-middle mx-2 display-4 fw-bold">EdSoft</h3>
      </a>

      <div className="col-lg-4 col-md-12 mx-auto bg-white align-text-middle rounded border-gray4 py-4 row rounded-5 shadow-sm h-75 p-3">
        <img
          src={LogoInst}
          alt="Logo institucion"
          className="d-inline-block h-25 w-30 align-text-middle mx-auto mt-5"
        />
        <p className="text-black fs-3 mx-auto text-center ">
          <span className="text-black bold mx-auto align-text-middle pb-4 font-size:large">
            <strong>Institution Name</strong>
          </span>
          <br />
          <span className="text-gray4  font-size:small mx-auto align-middle pt-5 fs-4">
            <small>Inicia sesión</small>
          </span>
        </p>

        <input
          className="bg-gray2 rounded-4 border-0 py-2 ps-6 fs-4 mb-4 col-lg-9 mx-auto "
          type="text"
          placeholder="Usuario"
          aria-label="User"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <input
          className="bg-gray2 rounded-4 border-0 pe-20 py-2 ps-6 fs-4  mb-4 col-lg-9 mx-auto"
          type="password"
          placeholder="Contraseña"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-blue2 col-lg-10 bl-4 mx-sm-5 ml-lg-5 my-3">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Olvidaste tu contraseña?</p>
        </span>
        <button
          type="button"
          className="btn bg-blue2  btn-primary rounded-5 pl-4 ml-4 mx-auto col-lg-9 h-15 mb-5 "
          onClick={onSubmit}
        >
          <a>
            <h4 className="text-white pt-2">Iniciar Sesion</h4>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Login;
