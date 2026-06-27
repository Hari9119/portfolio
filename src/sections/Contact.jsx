import { Particles } from "../components/Particles";
const Contact = () => {
  const email = "harithabandanatham@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <div className="w-full text-center">
          <p className="mb-4 text-neutral-400">Send me an email directly:</p>
          <a
            href={`mailto:${email}`}
            className="block w-full px-1 py-4 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation text-white no-underline"
          >
            {email}
          </a>
          <p className="mt-4 text-sm text-neutral-500">
            Or click the button below to open your email client
          </p>
          <button
            onClick={handleEmailClick}
            className="mt-4 w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
