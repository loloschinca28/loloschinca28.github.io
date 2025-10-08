"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contacto() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const serviceID = "service_fuidpsi";
    const templateID = "template_tqwotge";
    const publicKey = "tHLFr_ZahlEa7c7Oc";

    if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setSending(false);
          setMensajeEnviado(true);
          form.current!.reset();
        })
        .catch((err) => {
          setSending(false);
          alert("Error: " + JSON.stringify(err));
        });
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4 flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Columna izquierda: títulos y párrafo */}
        <div className="flex-1 flex flex-col justify-start">
          <motion.h3
            className="text-purple-500 text-xl font-medium mb-2 cursor-pointer hover:text-purple-400 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Hablemos
          </motion.h3>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground/90"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>

          <motion.p
  className="text-sm md:text-base text-muted-foreground mb-8"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  translate="no"
>
  ¿Tienes alguna pregunta o un proyecto en mente? No dudes en contactarme.
</motion.p>
        </div>

        {/* Columna derecha: formulario */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 mt-8 md:mt-24 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Nombre */}
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            required
            className="p-3 rounded-lg bg-background text-foreground placeholder-gray-400 border border-gray-400 focus:border-purple-500 focus:outline-none transition-all w-full"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="p-3 rounded-lg bg-background text-foreground placeholder-gray-400 border border-gray-400 focus:border-purple-500 focus:outline-none transition-all w-full"
          />

          {/* Mensaje */}
          <textarea
            name="message"
            placeholder="Mensaje"
            required
            rows={5}
            className="p-3 rounded-lg bg-background text-foreground placeholder-gray-400 border border-gray-400 focus:border-purple-500 focus:outline-none resize-none transition-all w-full"
          ></textarea>

          {/* Botón */}
          <motion.button
            type="submit"
            className="bg-purple-500 text-white font-semibold py-3 rounded-2xl shadow-lg cursor-pointer w-full"
            whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
            whileTap={{ scale: 0.95 }}
          >
            {sending ? "Enviando..." : "Enviar"}
          </motion.button>

          {/* Mensaje de éxito */}
          {mensajeEnviado && (
            <motion.p
              className="text-green-400 text-center mt-2 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Mensaje enviado con éxito!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
