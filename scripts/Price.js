const Component = React.Component;
/**
 * Componente hijo de CardHotel que renderiza los precios de cada hoteles.
 */
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
    };
  }

  createPrice = (props) => {
    // se creo para el método push para colocar los nuevos elementos obtenidos en el array
    let price = [];
    //El for esta contando iniciando desde 1 a 4 (ciclo)
    for (let i = 1; i <= 4; i++) {
      // si mi (i) es menor o igual al estado del precio, es decir a la data de price entonces crea elementos html devueltos por
      // el array vacio de price
      if (i <= this.state.price) {
        price.push(<span key={i}>$</span>);
        // si el i es mayor a mi estado entonces hace lo mismo de crear elementos html pero con un color claro
      } else {
        price.push(
          <span key={i} style={{ color: '#57B4F2' }}>
            $
          </span>
        );
      }
    }
    return price;
  };

  render() {
    return <div className="icon-price">{this.createPrice()}</div>;
  }
}
