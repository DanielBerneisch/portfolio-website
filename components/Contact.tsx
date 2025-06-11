import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({
  sectionRefs,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent!");
      reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRefs.contact}
      className="min-h-screen py-24 bg-gray-900/50 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or interested in my work? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:da.berneisch@gmx.de"
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center space-x-4 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">da.berneisch@gmx.de</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/berneisch/"
              target="_blank"
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center space-x-4 hover:border-blue-500 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Linkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/berneisch</p>
              </div>
            </motion.a>
          </div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: true })}
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                rows={4}
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/20 cursor-pointer"
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
