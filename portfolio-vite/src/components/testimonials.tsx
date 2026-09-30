import { useEffect, useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Embedded analytics",
      image: "/images/img1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Sarah Smith",
      role: "Product Manager",
      image: "/images/img2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Janice C. Campbe",
      role: "Embedded analytics",
      image: "/images/img3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Michael Brown",
      role: "Software Engineer",
      image: "/images/img4.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "David Wilson",
      role: "Business Analyst",
      image: "/images/img5.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  // Automatically change testimonial every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        if (previousIndex === testimonials.length - 1) {
          return 0;
        }

        return previousIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  return (
    <section className="testimonials" id="news">

      {/* Heading */}
      <div className="testimonials-info">

        <h2>
          Testimonials
        </h2>

        <p>
          What my clients say about <span>me</span>.
        </p>

      </div>


      {/* Carousel */}
      <div className="carousel">

        {testimonials.map((testimonial, index) => {

          let cardClass = "";

          if (index === currentIndex) {
            cardClass = "active";
          } 
          else if (
            index ===
            (currentIndex - 1 + testimonials.length) %
              testimonials.length
          ) {
            cardClass = "left";
          } 
          else if (
            index ===
            (currentIndex + 1) % testimonials.length
          ) {
            cardClass = "right";
          }

          return (
            <div
              className={`testimonial-card ${cardClass}`}
              key={testimonial.name}
            >

              <img
                src={testimonial.image}
                alt={testimonial.name}
              />

              <p>
                {testimonial.text}
              </p>

              <hr />

              <h3>
                {testimonial.name}
              </h3>

              <span>
                {testimonial.role}
              </span>

            </div>
          );
        })}

      </div>


      {/* Dots */}
      <div className="dots">

        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          ></button>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;