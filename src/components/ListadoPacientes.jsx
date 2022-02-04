import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

          {pacientes && pacientes.length ? (
            <div>
              <h2 className="font-black text-3xl text-center">
                Listado Pacientes
              </h2>
              <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">
                  pacientes y citas
                </span>
              </p>

              {pacientes.map( (paciente) => (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />
                )
              )}


            </div>
          ) : (
            <div>
              <h2 className="font-black text-3xl text-center">
                  No hay pacientes
                </h2>
                <p className="text-lg mt-5 text-center mb-10">
                  Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">
                    y aparecerán en este lugar
                  </span>
                </p>
              </div>
          
          )}

          
      </div>
    )
  };
  
  export default ListadoPacientes;
  