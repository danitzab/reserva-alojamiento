const CardHotel = ({ obj }) => (
  <div className="card h-100">
    <img src={obj.photo} className="card-img-top" alt={obj.name} />
    <div className="card-body">
      <h5 className="card-title">{obj.name}</h5>
      <p className="card-text">{obj.description}</p>
      <div className="row">
        <div className="col-12">
          <Location city={obj.city} country={obj.country} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Rooms rooms={obj.rooms} />
        </div>
        <div className="col-auto">
          <Price price={obj.price} />
        </div>
      </div>
    </div>
    <button type="button" className="btn bg-info btn-lg btn-block font-weight-bold text-light">
      Reservar
    </button>
  </div>
);
