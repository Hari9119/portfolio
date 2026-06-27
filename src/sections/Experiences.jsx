import { Timeline } from "../components/Timeline";
import { experiences, certifications } from "../constants";
const Experiences = () => {
  return (
    <section id="experience" className="c-space section-spacing">
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
      <div className="mt-12">
        <h2 className="text-heading">Certifications</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 rounded-2xl bg-primary hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-neutral-400 mb-2">{cert.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-neutral-500">{cert.issuer}</span>
                <span className="text-sm text-neutral-500">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
