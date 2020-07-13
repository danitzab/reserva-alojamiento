const Component = React.Component;

class GridHotels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: hotelsData,
    };
  }

  /** Ciclo de vida empleado al momento de la actualización de los filtros */

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      console.log(this.props.filter)
      let hotelsFilter = hotelsData;
      if (this.props.filter.startDate) {        
      }
      if (this.props.filter.country) {
        hotelsFilter = hotelsFilter.filter((element) => element.country === this.props.filter.country);
      }
      if (this.props.filter.price) {
        hotelsFilter = hotelsFilter.filter((element) => element.price === this.props.filter.price);      
      }
      if (this.props.filter.room) {
        const range = this.props.filter.room.split(',');
        console.log(range)
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
        {this.state.hotels.map((element) => (
          <div className="col mb-4" key={element.slug}>
            <CardHotel obj={element} />
          </div>
        ))}
      </div>
    );
  }
}
