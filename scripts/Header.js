const Component = React.Component;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: '',
    };
  }

  handleFilter = (filter) => {
    this.setState({
      startDate: filter.startDate,
      endDate: filter.endDate,
    });

    this.props.handleFilter(filter);
  };

  render() {
    return (
      <div>
        <div className="bg-info text-white">
          <br />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4 className="header-title">Hoteles</h4>
              </div>
            </div>            
            <div className="row">
              <div className="col-12">
                <span>Desde el <strong>{moment(this.state.startDate).format('dddd, D [de] MMMM [de] YYYY')}</strong>, hasta el <strong>{moment(this.state.endDate).format('dddd, D [de] MMMM [de] YYYY')}</strong></span>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="bg-primary">
          <Filter handleFilter={this.handleFilter} />
        </div>
      </div>
    );
  }
}
