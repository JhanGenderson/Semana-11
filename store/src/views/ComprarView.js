import React, { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";

export default function ComprarView() {
  const { carrito } = useContext(CarritoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recibirSubmit = (datos) =>{
      console.log(datos)
  }

  return (
    <div className="container mt-4">
      <h1>Realizar compra</h1>
      <p>Por favor verifique los productos e indique los datos solicitados.</p>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h4>Productos del carrito</h4>
          <ul className="list-group">
            {carrito.map((prod, i) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={i}
              >
                <div className="me-auto">
                  <span className="fw-bold">{prod.nombre}</span>
                  <br />
                  <small>Cantidad: {prod.cantidad}</small>
                </div>
                <span className="badge bg-dark rounded-pill p-3">
                  S/{prod.cantidad * prod.precio}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-lg-6">
          <h4>Datos del Comprador</h4>
          <form onSubmit={handleSubmit(recibirSubmit)}>
            <div className="mb-2">
              <label className="form-label">
                Nombres y Apellidos:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej. Juan Perez"
                  {...register("nombre",{required:true}) }
                />
              {errors.nombre && <span className="text-danger">Este campo es obligatorio</span>}
            </div>
            <div className="mb-2">
              <label className="form-label">Numero de celular</label>
              <input
                type="text"
                className="form-control"
                placeholder="987654321"
                {...register("numero",{minLength:9})}
              />
              {errors.numero && <span className="text-danger">Longitud minima de 9 digitos</span>}
            </div>
            <div className="mb-2">
              <label className="form-label">Ciudad</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Lima"
                {...register("ciudad", {pattern:/^[A-Za-z]/i})}
              />
              {errors.ciudad && <span></span>}
              <button type="submit" className="btn btn-dark">Confirmar Compra</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}