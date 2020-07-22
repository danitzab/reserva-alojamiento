const Component = React.Component;
/**
 * Componente donde se pintan cada una de las CardHotel
 */
class GridHotels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: hotelsData,
    };
  }

  /**
   * Método que se actualiza cada vez que cambie los props
   * */
  componentDidUpdate(prevProps) {
    // Validamos las props anteriores con las props actuales para evitar un bucle infinito
    if (prevProps.filter !== this.props.filter) {
      let hotelsFilter = hotelsData;
      if (this.props.filter.startDate && this.props.filter.endDate) {
        const rangeFilter = moment.range(this.props.filter.startDate, this.props.filter.endDate);
        hotelsFilter = hotelsFilter.filter((element) => {
          const rangeHotel = moment.range(element.availabilityFrom, element.availabilityTo);
          return rangeHotel.contains(rangeFilter);
        });
      }
      if (this.props.filter.country) {
        hotelsFilter = hotelsFilter.filter((element) => element.country === this.props.filter.country);
      }
      if (this.props.filter.price) {
        hotelsFilter = hotelsFilter.filter((element) => element.price === this.props.filter.price);
      }
      if (this.props.filter.room) {
        const range = this.props.filter.room.split(',');
        hotelsFilter = hotelsFilter.filter((element) => element.rooms >= range[0] && element.rooms <= range[1]);
      }
      this.setState({
        hotels: hotelsFilter,
      });
    }
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3">
        {this.state.hotels && this.state.hotels.length ? (
          this.state.hotels.map((element) => (
            <div className="col mb-4" key={element.slug}>
              <CardHotel obj={element} />
            </div>
          ))
        ) : (
          <img className="img-fluid rounded mx-auto d-block" src="./images/no-result.jpg" />
        )}
      </div>
    );
  }
}
