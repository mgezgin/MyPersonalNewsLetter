import PrintButton from "@/components/PrintButton";

export default function ResumePage() {
    return (
        <>
            <style>{`
                @media print {
                    nav, footer, .no-print { display: none !important; }
                    body { background: white !important; }
                    main { background: white !important; }
                    .print-break { page-break-before: always; }
                    .print-avoid { page-break-inside: avoid; }
                    @page { margin: 0.6in; size: A4; }
                }
            `}</style>

            {/* Header */}
            <div className="bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-8 py-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Muslum Gezgin</h1>
                            <p className="text-blue-400 text-lg mt-1 font-medium">Software Engineer</p>
                        </div>
                        <div className="text-sm text-gray-300 space-y-1 sm:text-right">
                            <div><a href="tel:+31638830211" className="hover:text-white">+31 638 830 211</a></div>
                            <div><a href="mailto:muslum_gezgin@hotmail.com" className="hover:text-white">muslum_gezgin@hotmail.com</a></div>
                            <div><a href="https://linkedin.com/in/mgezgin" className="hover:text-white">linkedin.com/in/mgezgin</a></div>
                            <div><a href="https://github.com/muslumgezgin" className="hover:text-white">github.com/muslumgezgin</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="resume-content" className="bg-gray-50 dark:bg-gray-950 min-h-screen">
                <div className="max-w-4xl mx-auto px-8 py-10 space-y-10">

                    {/* Profile */}
                    <section className="print-avoid">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Profile</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Experienced software engineer with a solid background in designing and implementing scalable solutions.
                            Passionate about cloud environments and staying updated with the latest technological developments.
                            Committed to delivering high-quality work and continuously expanding expertise in the ever-evolving technology landscape.
                        </p>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Skills */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-5">Skills & Technologies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Languages",       color: "bg-blue-600",   skills: ["C#", "JavaScript", "TypeScript", "Java", "SQL", "Python"] },
                                { label: "Frameworks",      color: "bg-emerald-600", skills: [".NET", "Azure", "Docker", "Kubernetes", "Angular", "React", "Node.js"] },
                                { label: "Cloud & DevOps",  color: "bg-purple-600", skills: ["Azure Functions", "Cosmos DB", "CI/CD", "GitHub", "Bitbucket", "REST APIs"] },
                                { label: "Databases",       color: "bg-orange-600", skills: ["SQL Server", "PostgreSQL", "Cosmos DB", "MongoDB"] },
                            ].map(({ label, color, skills }) => (
                                <div key={label} className="print-avoid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((s) => (
                                            <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Employment */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6">Employment History</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    role: "Software Engineer",
                                    company: "Shipcloud B.V.",
                                    location: "Rotterdam",
                                    period: "Apr 2024 — Apr 2026",
                                    bullets: [
                                        "Worked on the core SCOUT TMS platform: shipment creation, delivery tracking, and cost/billing calculations for high-load logistics operations.",
                                        "Built and maintained carrier integrations for UPS, DHL, PostNL, and DPD via REST APIs in C# .NET.",
                                        "Developed billing and rating engine components using EF Core with PostgreSQL; background job processing with Hangfire.",
                                        "Participated in code reviews, Agile ceremonies, and CI/CD pipeline maintenance.",
                                        "Managed service deployments and monitored production health on Azure using Docker.",
                                    ],
                                    tags: ["C#", ".NET", "Azure", "REST APIs", "Blazor", "Docker", "PostgreSQL", "EF Core", "Hangfire"],
                                    color: "bg-blue-600",
                                },
                                {
                                    role: "Software Engineer",
                                    company: "Woonenzo",
                                    location: "",
                                    period: "Jun 2020 — Mar 2024",
                                    bullets: [
                                        "Led backend development for a greenfield ERP solution using Azure Functions (serverless, event-driven), Cosmos DB, and Azure Active Directory.",
                                        "Delivered scalable REST APIs for mobile and admin panel clients; built Angular-based admin control components.",
                                        "Gained AWS exposure during cloud infrastructure evaluation and migration tasks.",
                                        "Managed containerised deployments with Docker and Kubernetes on Azure.",
                                        "Contributed full-stack in a second product: Node.js backend, Angular frontend, .NET 5 services.",
                                    ],
                                    tags: [".NET", "C#", "Docker", "Kubernetes", "Angular", "Azure", "Azure Functions", "Cosmos DB", "AWS", "Node.js", "TypeScript"],
                                    color: "bg-emerald-600",
                                },
                                {
                                    role: "Software Engineer",
                                    company: "Phinion",
                                    location: "Rotterdam",
                                    period: "Mar 2019 — Jun 2020",
                                    bullets: [
                                        "Built real-time data visualisation dashboards and client-facing control interfaces in close collaboration with data scientists.",
                                        "Implemented complex domain-specific business rules from multiple client companies into backend services.",
                                    ],
                                    tags: ["Java", "TypeScript", "React", "Git", "GitLab"],
                                    color: "bg-orange-600",
                                },
                                {
                                    role: "Software Engineer Intern",
                                    company: "Picnic",
                                    location: "Amsterdam",
                                    period: "Jul 2018 — Feb 2019",
                                    bullets: [
                                        "Contributed to a live production product in a high-quality engineering culture, applying modern web development practices.",
                                    ],
                                    tags: [],
                                    color: "bg-purple-600",
                                },
                            ].map((job) => (
                                <div key={job.company} className="print-avoid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${job.color}`} />
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-[1.375rem] mb-1">
                                        {job.company}{job.location ? ` — ${job.location}` : ""}
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 ml-[1.375rem] mb-3">{job.period}</p>
                                    <ul className="space-y-1.5 ml-[1.375rem] mb-3">
                                        {job.bullets.map((b, i) => (
                                            <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                    {job.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 ml-[1.375rem]">
                                            {job.tags.map((t) => (
                                                <span key={t} className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Education */}
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-5">Education</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    degree: "Full Stack Web Development",
                                    institution: "Restart Network",
                                    period: "September 2018 – May 2019",
                                    detail: "Intensive tech training at GIC Rotterdam, six days a week.",
                                    color: "bg-blue-600",
                                },
                                {
                                    degree: "Bachelor's Degree",
                                    institution: "Sulayman Demirel University",
                                    period: "September 2009 – June 2014 · Isparta, Turkey",
                                    detail: "Developed foundational knowledge in technology and engineering.",
                                    color: "bg-emerald-600",
                                },
                            ].map((edu) => (
                                <div key={edu.institution} className="print-avoid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${edu.color}`} />
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-[1.125rem] mb-1">{edu.institution}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 ml-[1.125rem] mb-2">{edu.period}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-[1.125rem]">{edu.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Download Button */}
                    <div className="text-center no-print pb-4">
                        <PrintButton />
                    </div>
                </div>
            </div>
        </>
    );
}
