const Component = React.Component;
/**
 * Componente hijo de CardHotel que renderiza el input de locatión, mostrando la ciudad y pais
 */
const Location = (props) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text icon-hotel" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#fff' }}>
          <path d="M12,11.5C10.62,11.5 9.5,10.38 9.5,9C9.5,7.62 10.62,6.5 12,6.5C13.38,6.5 14.5,7.62 14.5,9C14.5,10.38 13.38,11.5 12,11.5M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.13 15.87,2 12,2Z" />
        </svg>
      </span>
    </div>
    <input type="text" className="form-control" value={`${props.city}, ${props.country}`} disabled />
  </div>
);
