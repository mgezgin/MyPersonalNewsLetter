import PrintButton from "@/components/PrintButton";

export default function ResumePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    Musuлm Gezgin
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">Software Engineer</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <a href="tel:+31638830211" className="hover:text-blue-600 dark:hover:text-blue-400">
                        📞 +31638830211
                    </a>
                    <a href="mailto:muslum_gezgin@hotmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        ✉️ muslum_gezgin@hotmail.com
                    </a>
                    <a href="https://linkedin.com/in/mgezgin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                        💼 LinkedIn
                    </a>
                    <a href="https://github.com/mgezgin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                        💻 GitHub
                    </a>
                </div>
            </div>

            {/* Profile */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Profile
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As an experienced software engineer, I have a solid background in designing and implementing scalable solutions.
                    My passion for learning and staying updated with the latest technological developments drives my interest in cloud environments.
                    I am eager to contribute to projects and embrace new challenges in the field. Committed to excellence, I strive to deliver
                    high-quality work and continuously expand my expertise in the ever-evolving technology landscape.
                </p>
            </section>

            {/* Employment History */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Employment History
                </h2>

                <div className="space-y-8">
                    {/* Shipcloud */}
                    <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer at Shipcloud, Rotterdam</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">June 2022 - Present</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            At Shipcloud, a logistics integration platform, I work on the core systems that handle shipment creation,
                            delivery tracking, and cost calculations. I collaborate closely with internal teams to develop scalable and
                            efficient solutions for high-load systems.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Technologies:</strong> C#, .NET, Azure, REST APIs, Docker
                        </p>
                    </div>

                    {/* Woonenzo */}
                    <div className="border-l-4 border-green-600 dark:border-green-400 pl-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer at Woonenzo</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">June 2022 - March 2024</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            At the company, I introduced a new ERP solution project. I have experience working with Azure Functions,
                            which is a technology that enables developers to focus on event-driven model, responding to events like
                            HTTP requests or database changes with automatic scaling. During this period, I gained valuable experience
                            with Azure Active Directory. This was an exciting and enriching experience.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Technologies:</strong> .NET, C#, Docker, Kubernetes, Angular, Azure Functions, and Cosmos DB
                        </p>
                    </div>

                    {/* Docker */}
                    <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer at Docker, Kubernetes, Angular, Azure Functions, and Cosmos DB</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Upon joining the company, I addressed their challenges in product delivery by implementing a CI/CD pipeline through GitHub.</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            This approach streamlined the process for creating new APIs dedicated to both the mobile and admin panels.
                            Additionally, I played a key role in developing control panels essential for the admin panel's functionality.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Technologies:</strong> Node.js, C#, TypeScript, Angular, .NET, Git, and Bitbucket
                        </p>
                    </div>

                    {/* Rhinion */}
                    <div className="border-l-4 border-orange-600 dark:border-orange-400 pl-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer at Rhinion, Rotterdam</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">March 2019 - June 2020</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            As a developer, I worked on visualizing the live platform data in dashboards and making control functions
                            for the client. I cooperated with data scientists and developers to create models. I undertook the responsibility
                            of implementing the intricate business rules of various companies into the back-end services.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Technologies:</strong> Java, TypeScript, React, C#, and GitHub
                        </p>
                    </div>

                    {/* Restart Network */}
                    <div className="border-l-4 border-red-600 dark:border-red-400 pl-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer Intern at Picult, Amsterdam</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Feb 2018 - June 2018</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            I applied all the skills I learned at Restart Network while contributing to a real project. The environment
                            is flexible, providing freedom to learn. The tech team is eager to experiment with the latest technologies,
                            and everyone is committed to writing high-quality code. Although this was initially challenging, I learned
                            a lot and found it very rewarding.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Technologies:</strong> Java, TypeScript, React, C#, and GitHub
                        </p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Education
                </h2>

                <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Full Stack Web Development, Restart Network</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">September 2018 - May 2019</p>
                        <p className="text-gray-700 dark:text-gray-300">
                            I learned about the technologies in the heart of Rotterdam, at GIC Rotterdam, which is a tech company, six days a week.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Bachelor, Sulayman Demirel University, Isparta/Turkey</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">September 2009 - June 2014</p>
                        <p className="text-gray-700 dark:text-gray-300">
                            I honed the opportunity to develop my critical thinking skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['C#', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Python'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3">Frameworks & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {['.NET', 'Azure', 'Docker', 'Kubernetes', 'Angular', 'React', 'Node.js'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-3">Cloud & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Azure Functions', 'Cosmos DB', 'CI/CD', 'GitHub', 'Bitbucket', 'REST APIs'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-3">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {['SQL Server', 'Cosmos DB', 'MongoDB', 'PostgreSQL'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                    Links
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <a
                        href="https://linkedin.com/in/mgezgin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <span className="text-2xl">💼</span>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-gray-100">LinkedIn</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/mgezgin</p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/mgezgin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <span className="text-2xl">💻</span>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-gray-100">GitHub</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">github.com/mgezgin</p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Download Button */}
            <div className="text-center mt-12">
                <PrintButton />
            </div>
        </div>
    );
}
