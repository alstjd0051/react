import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img src="assets/me.JPG" className="left" alt="" />
            <img src="assets/coffee.jpg" className="left" alt="" />
          </div>
          <div className="center"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}
