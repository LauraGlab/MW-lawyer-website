import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import "./../../css/sections/homepage/Contact.css";

const userSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    emailjs
      .sendForm("service_wdcomuz", "template_wwlr8mk", data, "7qkJteyD1v-6jOfq4")
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
    reset();
  };

  return (
    <section
      id="contact"
      className="contactSection"
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="contactForm">
        <div className="contactHeader">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true }}
          >
            <h1 id="contact-heading" className="contactTitle subheading">
              Kontakt
            </h1>
          </motion.div>

          <motion.div
            className="contactSubTitle__section"
            initial={{ x: 100, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
            viewport={{ once: true }}
          >
            <h4 className="contactSubTitle">
              Zaufaj doświadczeniu i skontaktuj się, aby uzyskać profesjonalną
              pomoc prawną dostosowaną do Twoich potrzeb.
            </h4>
          </motion.div>

          <hr className="hrContact" />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7 }}
          viewport={{ once: true }}
          className="input__section"
        >
          <form
            className="inputFields"
            onSubmit={handleSubmit(onSubmit)}
            aria-describedby="form-description"
          >
            <input
              id="name"
              className="inputField"
              {...register("name")}
              placeholder="Twoje Imię *"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <div className="errorWrapper">
              {errors.name && (
                <p id="name-error" className="errorText">
                  Imię musi zawierać co najmniej 3 znaki.
                </p>
              )}
            </div>
            <input
              id="email"
              className="inputField"
              {...register("email")}
              placeholder="Twój E-mail *"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <div className="errorWrapper">
              {errors.email && (
                <p id="email-error" className="errorText">
                  Niepoprawny e-mail.
                </p>
              )}
            </div>
            <textarea
              id="message"
              className="inputField"
              {...register("message")}
              placeholder="Wiadomość *"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            <div className="errorWrapper">
              {errors.message && (
                <p id="message-error" className="errorText">
                  Wiadomość powinna zawierać co najmniej 10 znaków.
                </p>
              )}
            </div>

            <div className="submitBtn__section">
              <input
                className="submitBtn"
                type="submit"
                value="Wyślij wiadomość"
                aria-label="Wyślij formularz kontaktowy"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}