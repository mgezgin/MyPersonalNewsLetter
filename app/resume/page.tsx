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
                            <div><a href="https://github.com/mgezgin" className="hover:text-white">github.com/mgezgin</a></div>
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
                                    company: "Shipcloud, Rotterdam",
                                    period: "June 2022 – Present",
                                    current: true,
                                    description: "Work on core systems handling shipment creation, delivery tracking, and cost calculations. Collaborate with internal teams to develop scalable and efficient solutions for high-load systems.",
                                    tags: ["C#", ".NET", "Azure", "REST APIs", "Docker"],
                                    color: "bg-blue-600",
                                },
                                {
                                    role: "Software Engineer",
                                    company: "Woonenzo",
                                    period: "June 2022 – March 2024",
                                    description: "Introduced a new ERP solution with Azure Functions enabling event-driven architecture. Gained experience with Azure Active Directory and automatic scaling solutions.",
                                    tags: [".NET", "C#", "Docker", "Kubernetes", "Angular", "Azure Functions", "Cosmos DB"],
                                    color: "bg-emerald-600",
                                },
                                {
                                    role: "Software Engineer",
                                    company: "Rhinion, Rotterdam",
                                    period: "March 2019 – June 2020",
                                    description: "Visualized live platform data in dashboards and created control functions for clients. Cooperated with data scientists to implement complex business rules in back-end services.",
                                    tags: ["Java", "TypeScript", "React", "C#", "GitHub"],
                                    color: "bg-orange-600",
                                },
                                {
                                    role: "Software Engineer Intern",
                                    company: "Picult, Amsterdam",
                                    period: "Feb 2018 – June 2018",
                                    description: "Applied skills learned at Restart Network in a real project environment. Experimented with modern technologies and committed to writing high-quality code.",
                                    tags: ["Java", "TypeScript", "React", "C#", "GitHub"],
                                    color: "bg-purple-600",
                                },
                            ].map((job) => (
                                <div key={job.company} className="print-avoid bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${job.color}`} />
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
                                        </div>
                                        {job.current && (
                                            <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-[1.375rem] mb-1">{job.company}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 ml-[1.375rem] mb-3">{job.period}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed ml-[1.375rem] mb-3">{job.description}</p>
                                    <div className="flex flex-wrap gap-1.5 ml-[1.375rem]">
                                        {job.tags.map((t) => (
                                            <span key={t} className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
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
