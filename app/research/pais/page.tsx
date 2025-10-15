'use client';
import { useState } from 'react';

export default function PAISPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Language Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsSpanish((v) => !v)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-12">
        <img
          src="/images/PAIS(1).png"
          alt="PAIS Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'PAIS: Polivictimización entre Adolescentes Mexicanos'
          : 'PAIS: Polyvictimization among Mexican Adolescents'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed">
        {isSpanish ? (
          <>
            <p>
              Los jóvenes menores de 18 años que experimentan una forma de
              violencia suelen estar en riesgo de experimentar otras formas de
              victimización, un fenómeno conocido como polivictimización. Este
              fenómeno tiene efectos profundos en la salud mental de los
              adolescentes.
            </p>
            <p>
              El estudio{' '}
              <strong>
                PAIS (Mexican Bienestar: Polyvictimization among Mexican
                Adolescents Interview Study)
              </strong>
              busca comprender en profundidad las experiencias de violencia
              vividas por adolescentes mexicanos, incluyendo violencia
              doméstica, abuso psicológico, bullying, violencia comunitaria y
              acoso sexual.
            </p>
            <p>
              Además, se exploran los mecanismos de afrontamiento de los
              adolescentes y las fuentes de apoyo, como la comunicación con los
              padres, el apoyo de pares, el apoyo docente y la religiosidad o
              espiritualidad.
            </p>
            <p>
              Se entrevistó individualmente a 70 adolescentes que viven en un
              entorno urbano de Michoacán, México. El análisis de datos sigue en
              curso.
            </p>
            <p>
              Este estudio está financiado por la beca SRCD Small Grant for
              Early Career Scholars, otorgada a la Dra. Andrea Medrano.
            </p>
          </>
        ) : (
          <>
            <p>
              Youth under the age of 18 who experience one form of violence are
              typically at risk for experiencing other forms of victimization,
              or being poly-victimized. Poly-victimization has profound mental
              health implications for adolescents.
            </p>
            <p>
              The{' '}
              <strong>
                PAIS Study (Mexican Bienestar: Polyvictimization among Mexican
                Adolescents Interview Study)
              </strong>
              aims to develop a rich, in-depth understanding of Mexican
              adolescents’ experiences with various forms of violence, including
              domestic violence, psychological abuse, bullying, community
              violence, and sexual harassment.
            </p>
            <p>
              The study also explores coping mechanisms and support systems,
              such as parent-adolescent communication, peer support, teacher
              support, and religiosity or spirituality.
            </p>
            <p>
              Seventy adolescents living in an urban setting in Michoacán,
              Mexico participated in semi-structured individual interviews. Data
              analysis is currently underway.
            </p>
            <p>
              This study is funded by the Society for Research in Child
              Development (SRCD) Small Grant for Early Career Scholars awarded
              to Dr. Andrea Medrano.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
