import Image from "next/image";

export default function HobbiesCarousel({ items }) {
  return (
    <div
      className="hobbies d-flex flex-md-row flex-column justify-content-center mt-5 px-md-3"
      id="hobbies"
    >
      <div className="col-md-7 pe-md-5">
        <h1>Hobbies</h1>
        <p className="m-0 fs-5">
          In my free time, I love staying active and entertained. Playing
          football and volleyball keeps me physically fit and mentally
          refreshed, while stand-up comedy on YouTube brings plenty of laughs
          and relaxation. I firmly believe that a happy, healthy individual is
          far more productive than someone feeling down or unmotivated. My
          passion for sports not only keeps me in shape but also fuels my
          energy and focus for everything I do.
        </p>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide col-md-5 mx-auto">
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={`indicator-${index}`}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={item.alt}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <Image
                src={item.src}
                className="d-block w-100 rounded-4 carousel-image"
                alt={item.alt}
                width={800}
                height={600}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.captionTitle}</h5>
                <p>{item.captionText}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
