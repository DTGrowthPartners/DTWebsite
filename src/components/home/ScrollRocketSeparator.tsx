import rocketImage from "@/assets/2cohete.png";

const ScrollRocketSeparator = () => {
  return (
    <div className="absolute overflow-hidden -z-10 scroll-rocket-separator" style={{ pointerEvents: "none" }}>
      <img src={rocketImage} alt="Rocket background" className="rocket-img opacity-40" />
    </div>
  );
};

export default ScrollRocketSeparator;
