const Component = React.Component;
/**
 * Componente hijo de header que se encarga de realizar los filtros atraves de la actualización del estado 
 */
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.getOptions('country'),
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      country: '',
      price: 0,
      room: '',
    };
    this.handleGlobalChange = this.handleGlobalChange.bind(this);
  }

  /**
   * Método para obtener la data que vamos a mostrar dentro de los select
   */
  getOptions = (attributeName) => {
    const array = [];
    hotelsData.map((element) => {
      const found = array.find((element2) => element2 === element[attributeName]);
      if (!found) {
        array.push(element[attributeName]);
      }
    });
    array.sort((a, b) => a - b);
    return array;
  };

  handleGlobalChange = (e) => {
    // e.target.name = name colocado en el HTML.
    // e.target.value = valor actual del componente en el HTML.

    // se pasa como segundo argumento el metodo handleFilter()
    // para que se ejecute despues de haber actualizado el estado
    this.setState({ [e.target.name]: e.target.value }, this.handleFilter);
  };

  /**
   * Método para manejar el filtro:
   * 1.convertir el startDate y el endDate de string a fecha.
   * 2.Filtar las ciudades al momento de ser seleccionadas.
   * 3.Filtarr los precios al seleccionarlos y convertirlo por elmétodo parseInt de string a número.
   * 4.Filtar las habitaciones al ser
   */

  /**
   * Método que pasa el padre (Header) para comunicar el estado de sus propiedades
   */
  handleFilter = () => {
    // Invocamos la funcion que el padre donde el padre quiere recibir la data
    this.props.handleFilter({
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      country: this.state.country,
      price: parseInt(this.state.price, 10),
      room: this.state.room,
    });
  };

  //parseInt(parsea) un argumento de tipo cadena y devuelve un entero

  render() {
    const { search } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
            <form className="form-inline">
              <div className="input-group mr-sm-5 my-2">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    value={moment(this.state.startDate).format('YYYY-MM-DD')}
                    onChange={this.handleGlobalChange}
                  />
                </div>
              </div>
              <div className="input-group mr-sm-5 my-2">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    name="endDate"
                    value={moment(this.state.endDate).format('YYYY-MM-DD')}
                    onChange={this.handleGlobalChange}
                  />
                </div>
              </div>
              <div className="input-group mr-sm-5 my-2 border rounded">
                <div className="input-group-prepend bg-transparent">
                  <label className="input-group-text bg-white  border-0 rounded-left" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: '#DBDBDB' }}
                    >
                      <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </label>
                </div>
                <select
                  className="custom-select form-control border-0 rounded-right"
                  id="country"
                  name="country"
                  onChange={this.handleGlobalChange}
                  value={this.state.country}
                >
                  <option value="">Todos los paises</option>
                  {this.state.countries.map((element) => (
                    <option key={element}>{element}</option>
                  ))}
                </select>
              </div>
              <div className="input-group mr-sm-5 my-2 border rounded">
                <div className="input-group-prepend bg-transparent">
                  <label className="input-group-text bg-white  border-0 rounded-left" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: '#DBDBDB' }}
                    >
                      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
                    </svg>
                  </label>
                </div>
                <select
                  className="custom-select mr-sm my-0 form-control border-0 rounded-right"
                  id="price"
                  name="price"
                  onChange={this.handleGlobalChange}
                >
                  <option value="0">Cualquier precio</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
              </div>

              <div className="input-group mr-sm-5 my-2 border rounded">
                <div className="input-group-prepend bg-transparent">
                  <label className="input-group-text bg-white  border-0 rounded-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ fill: '#DBDBDB' }}
                    >
                      <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
                    </svg>
                  </label>
                </div>
                <select
                  className="custom-select mr-sm my-0 form-control border-0 rounded-right"
                  id="room"
                  name="room"
                  onChange={this.handleGlobalChange}
                >
                  <option value="">Cualquier tamaño</option>
                  <option value="1,10">Hotel pequeño</option>
                  <option value="11,20">Hotel mediano</option>
                  <option value="21,999">Hotel grande</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
