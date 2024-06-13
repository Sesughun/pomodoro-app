const Quotes = () => {
  return (
    <>
      <div
        id="demoxx"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carousel-vertical">
          <div class="carousel-item active">
            <div className="mb3">
              <div className="card floating-card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5 className="card-footer">Whomever</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className="mb3">
              <div className="card floating-card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5 className="card-footer">Whomeve22r</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demoxx"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demoxx"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};
export default Quotes;
