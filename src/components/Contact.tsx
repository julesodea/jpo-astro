export default function Contact() {
  return (
    <section className="flex flex-col justify-start items-start py-6">
      <div className="w-full">
        <div className="h-[50vh] flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-start items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="mailto:jules.odea@gmail.com" className="hover:underline font-bold">
                jules.odea@gmail.com
              </a>
              <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
                <a
                  href="https://github.com/julesodea"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/julesodea"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="/cv"
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  CV
                </a>
              </div>
            </div>
          </div>

          <p className="text-medium text-gray-700 dark:text-gray-300 text-left pt-6 max-w-2xl">
            I am a passionate and collaborative Frontend Developer with 5+ years of experience
            delivering innovative, highly optimised web and mobile applications for global clients.
            Leveraging technologies like JavaScript, TypeScript, React, HTML, CSS, SCSS, and
            Tailwind, I combine technical excellence with a focus on creating responsive,
            user-friendly solutions delivering for client and customer needs.
          </p>

          <a className="pt-6 w-max" href="/">
            <svg
              width="16"
              height="auto"
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-900 dark:text-white"
            >
              <path
                d="M24 9H1M1 9L9 1M1 9L9 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
