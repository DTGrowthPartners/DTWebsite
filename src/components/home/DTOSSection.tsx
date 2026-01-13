import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileText, Calendar, Workflow, MessageCircle } from "lucide-react";
import fondoDesktop from "@/assets/fondo-seccion-DT-OS2.mp4?url";
import fondoMobile from "@/assets/fondo-seccion-DT-OS-mobile.mp4?url";
import coheteImg from "@/assets/cohete.png";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const DTOSSection = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Force video to play on mobile devices
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    });
  }, [isMobile]);

  // Add key to force video re-render on mobile state change
  const videoKey = isMobile ? 'mobile' : 'desktop';
  const features = [
    {
      icon: BarChart3,
      titleKey: "dtos.campaigns",
      descKey: "dtos.campaignsDesc",
    },
    {
      icon: MessageCircle,
      titleKey: "dtos.aiAdvisor",
      descKey: "dtos.aiAdvisorDesc",
    },
    {
      icon: FileText,
      titleKey: "dtos.jobRequest",
      descKey: "dtos.jobRequestDesc",
    },
    {
      icon: Calendar,
      titleKey: "dtos.calendar",
      descKey: "dtos.calendarDesc",
    },
    {
      icon: Workflow,
      titleKey: "dtos.resources",
      descKey: "dtos.resourcesDesc",
    },
  ];

  return (
    <section id="dt-os" className="py-12 md:py-24 bg-gradient-card relative overflow-hidden">
      {/* Video background */}
      <div key={videoKey} className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={isMobile ? fondoMobile : fondoDesktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="relative text-2xl font-bold gradient-text uppercase tracking-wider animate-pulse">
                DT-OS
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-100 transition-transform duration-300 ease-in-out" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold animate-pulse">
                <span className="gradient-text">{t("dtos.title")}</span> {t("dtos.titleHighlight")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t("dtos.subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={t(feature.titleKey)}
                    className="bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t(feature.titleKey)}</h4>
                        <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Floating rocket image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <img
                src={coheteImg}
                alt="Cohete DT-OS"
                className="w-[550px] h-auto animate-float drop-shadow-2xl"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default DTOSSection;
