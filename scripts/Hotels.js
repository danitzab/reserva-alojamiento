const Component = React.Component;

class Hotels extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  handleFilter = (filter) => {
    this.setState(filter);
  };

  render() {
    return (
      <div>
        <Header handleFilter={this.handleFilter} />
        <br />
        <div className="container-fluid">
          <GridHotels filter={this.state} />
        </div>
      </div>
    );
  }
}
