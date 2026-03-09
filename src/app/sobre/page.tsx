import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o autor",
  description: "Especialista em .NET e C#, com mais de 20 anos de experiencia acelerando entregas com praticas ageis e engenharia de software moderna.",
};

const featuredSkills = [
  "C#",
  "ASP.NET Core",
  ".NET Core",
  "React",
  "React Native",
  "Angular",
  "Node.js",
  "Azure DevOps",
  "OpenTelemetry",
  "RabbitMQ",
  "Azure Service Bus",
  "Microservices",
  "Test Automation",
  "Databases",
  "Docker",
  "MongoDB",
  "Linux",
  "Embedded Linux",
  "Embedded C",
  "Firmware",
  "FreeRTOS",
  "ARM Cortex-M",
  "Yocto Project",
  "Python",
  "Java",
  "Git",
  "GitHub",
  "Entity Framework",
  "Agile Methodologies",
  "Problem Solving",
  "MVVM",
  "Xamarin",
];

export default function SobrePage() {
  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Sobre o autor</h1>
        <p className="text-[color:var(--ctp-subtext0)]">Conheca a trajetoria de um especialista em .NET que transforma agilidade em resultado real.</p>
      </header>

      <section className="post-card grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-[color:var(--ctp-surface0)]">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E03AQHIHE6gdqAvEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517562517940?e=2147483647&v=beta&t=XgwJ8PH6rtN4AxJA6H-4EGPUSsPUwx0t1-FK5uvfy58"
            alt="Foto de Fernando, autor do Feokuma Blog"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Fernando (Feokuma)</h2>
            <p className="text-[color:var(--ctp-subtext0)]">Engenheiro de Software | Autor do Feokuma Blog</p>
          </div>

          <p>
            Engenheiro de Software com mais de 20 anos de experiencia, com forte atuacao em C#, ASP.NET Core e .NET
            Core para construcao de plataformas robustas, escalaveis e orientadas a valor de negocio.
          </p>

          <p>
            Em times ageis, combina excelencia tecnica com colaboracao continua para acelerar entregas sem perder
            qualidade. Sua experiencia inclui arquitetura de microsservicos, observabilidade, automacao de testes e
            DevOps, sempre com foco em ciclos curtos e melhoria constante.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Skills em destaque</h3>
            <ul className="flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[color:var(--ctp-surface0)] bg-[color:var(--ctp-mantle)] px-3 py-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://www.linkedin.com/in/feokuma/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[color:var(--ctp-surface0)] px-4 py-2 font-medium hover:border-[color:var(--ctp-lavender)]"
          >
            Ver perfil no LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}