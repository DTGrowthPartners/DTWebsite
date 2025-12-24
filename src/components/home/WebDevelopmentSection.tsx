import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Import images
import web1 from "@/assets/desarrolloweb/web1.png";
import web2 from "@/assets/desarrolloweb/web2.png";
import web3 from "@/assets/desarrolloweb/web3.png";
import web4 from "@/assets/desarrolloweb/web4.webp";
import telefonoResponsive from "@/assets/desarrolloweb/telefono responsive.png";
import telefono2 from "@/assets/desarrolloweb/telefono 2.png";
import tiendaOnline from "@/assets/desarrolloweb/tiendaonline.gif";

const WebDevelopmentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const slides = [
    { image: web1, alt: "Web Design 1" },
    { image: web2, alt: "Web Design 2" },
    { image: web3, alt: "Web Design 3" },
    { image: web4, alt: "Web Design 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-card">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Diseño y Desarrollo de
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Sitios Web
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos especializamos en crear sitios web a medida que reflejan la identidad única de tu marca y brindan una experiencia excepcional al usuario.
          </p>
        </div>

        {/* Responsive Design Section */}
        <div className="mb-12 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-2 rounded-full transition-all"
              >
                <ArrowRight className="w-5 h-5 transform rotate-180" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white p-2 rounded-full transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-primary/30'}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-5xl font-semibold">Respuesta Rápida y Adaptabilidad</h3>
              <p className="text-lg text-muted-foreground">
                Hoy en día, los usuarios navegan desde una variedad de dispositivos. Asegúrate de que tu landing page se vea perfecta en cualquier pantalla. Nuestras páginas son completamente responsivas, adaptándose automáticamente a teléfonos, tabletas y computadoras, ofreciendo una experiencia fluida y sin problemas.
              </p>
              <div className="text-2xl font-medium text-primary uppercase tracking-wider">
                DISEÑO 100% responsive
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 md:pt-0">
          <h3 className="text-2xl font-semibold mb-4">
            ¿Quieres una página web profesional para tu negocio?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Completa el siguiente formulario y te enviaremos una propuesta personalizada.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-primary group">
              Cotizar vía formulario
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="btn-outline group">
              <a href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%3A&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Cotizar vía WhatsApp
              </a>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;