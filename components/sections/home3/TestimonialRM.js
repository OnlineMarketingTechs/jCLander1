import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"


export default function TestimonialRM() {
    return (
        <>
            <section className="testimonial-section-four pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-17.png)' }}>
                <div  />
                        <div className="auto-container">
                            <div className="sec-title style-three">
                                <h5>TestimonialsRM</h5>
                                <h2>Words from our customers</h2>
                            </div>
                            <div className="wrapper-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider3 />
                            </div>
                        </div>

            </section>
        </>
    )
}
