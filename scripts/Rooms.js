const Component = React.Component;
/**
 * Componente hijo de CardHotel que renderiza el numero de habitaciones de cada hotel la cúal es leido por las props.
 */
const Rooms = (props) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text icon-bed" id="bed">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#fff' }}>
          <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
        </svg>
      </span>
    </div>
    <input type="text" className="form-control" value={`${props.rooms} habitaciones`} disabled />
  </div>
);

// disabled: elemento para deshabilitar un input en html.