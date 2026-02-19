import { Wave } from "./wave/Wave";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center pt-[10dvh]">
      <div className="flex flex-col justify-center items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-medium max-w-lg"
        >
          Hello! <Wave /> I'm{" "}
          <span className="dark:text-neutral-100 light:text-neutral-800 font-medium">
            Jules
          </span>
          , a{" "}
          <span className="italic dark:text-neutral-300 text-neutral-800">
            Frontend Developer
          </span>{" "} <br />
          based in Auckland.
        </motion.h1>
      </div>
      <div className="flex flex-col justify-center pt-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-medium text-gray-700 dark:text-gray-300 text-left max-w-2xl"
        >
          I am a passionate and collaborative Frontend Developer with 6+ years
          of experience delivering innovative, highly optimised web and mobile
          applications for global clients. Leveraging technologies like
          JavaScript, TypeScript, React, HTML, CSS, SCSS, and Tailwind, I
          combine technical excellence with a focus on creating responsive,
          user-friendly solutions delivering for client and customer needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6 pt-6"
        >
          <div className="flex flex-col sm:flex-row justify-start items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:jules.odea@gmail.com"
              className="hover:underline font-bold"
            >
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
        </motion.div>
      </div>
    </div>
  );
}
