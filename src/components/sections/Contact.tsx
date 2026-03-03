import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email || !emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const response = await fetch("https://formspree.io/f/meelbdjk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setForm(INITIAL_STATE);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-12">

      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full lg:w-1/2 bg-black-100 rounded-2xl p-6 sm:p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 font-medium text-white">{span}</span>

                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`bg-tertiary placeholder:text-secondary rounded-lg px-4 py-3 text-white outline-none ${
                    input === "email" && error
                      ? "border border-red-500"
                      : "border-none"
                  }`}
                  {...(input === "message" && { rows: 6 })}
                />

                {input === "email" && error && (
                  <span className="mt-1 text-sm text-red-500">{error}</span>
                )}
              </label>
            );
          })}

          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-6 py-3 font-semibold text-white shadow-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </motion.div>

      {/* 3D Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");