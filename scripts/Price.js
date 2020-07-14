const Component = React.Component;

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
    };
  }

  createPrice = (props) => {
    let price = [];
    for (let i = 1; i <= 4; i++) {
      if (i <= this.state.price) {
        price.push(<span key={i}>$</span>);
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
