import Head from 'next/head';
import Layout from '../components/Layout';

export default function Research() {
    return (
        <Layout>
                       <Head>
                <title>Research - Trident Group of Institutions</title>
                <meta name="description" content="Explore the research focus areas, ongoing projects, and achievements at Trident Group of Institutions." />
            </Head>

            <div className="bg-gray-50 text-gray-800">
                {/* Hero Section */}
                <section className="bg-teal-800 text-white py-16">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold">Research</h1>
                        <p className="mt-4 text-lg">Innovating for a Sustainable Future</p>
                    </div>
                </section>

                {/* Research Focus Areas */}
                <section className="container mx-auto py-12 px-6 md:px-12">
                    <h2 className="text-3xl font-semibold text-teal-800 text-center">Research Focus Areas</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Sustainable Energy</h3>
                            <p className="mt-4 text-lg">Innovative solutions in renewable energy, solar power, green hydrogen, and energy storage systems.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Environmental Conservation</h3>
                            <p className="mt-4 text-lg">Research on water conservation, waste management, and ecological restoration to promote sustainability.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Biotechnology & Health</h3>
                            <p className="mt-4 text-lg">Advancing biotechnology, genomics, and microbiology for healthcare applications and disease prevention.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Smart Technologies</h3>
                            <p className="mt-4 text-lg">Research in AI, Machine Learning, IoT, and automation to drive future technologies in various industries.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Community Development</h3>
                            <p className="mt-4 text-lg">Focus on social work, health systems, and sustainable development programs for community upliftment.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Educational Innovations</h3>
                            <p className="mt-4 text-lg">Research in educational methodologies and systems to enhance learning and development for future generations.</p>
                        </div>
                    </div>
                </section>

                {/* Ongoing Projects */}
                <section className="bg-white py-12 px-6 md:px-12">
                    <h2 className="text-3xl font-semibold text-teal-800 text-center">Ongoing Research Projects</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Green Hydrogen Production</h3>
                            <p className="mt-4 text-lg">Developing efficient systems for producing green hydrogen to promote clean energy solutions.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Plastic Waste Management</h3>
                            <p className="mt-4 text-lg">Exploring sustainable ways to reduce and manage plastic waste for a cleaner environment.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Smart Agriculture</h3>
                            <p className="mt-4 text-lg">Using IoT and AI to revolutionize agricultural practices and promote sustainable farming.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Water Purification Technology</h3>
                            <p className="mt-4 text-lg">Developing advanced filtration and purification systems to address global water scarcity issues.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Epidemiology and Public Health</h3>
                            <p className="mt-4 text-lg">Studying disease patterns and health trends to improve public health policies and outcomes.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">AI for Healthcare</h3>
                            <p className="mt-4 text-lg">Using Artificial Intelligence to improve diagnostic processes and healthcare service delivery.</p>
                        </div>
                    </div>
                </section>

                {/* Research Achievements */}
                <section className="bg-teal-800 text-white py-12 px-6 md:px-12">
                    <h2 className="text-3xl font-semibold text-center">Research Achievements</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Published Papers</h3>
                            <p className="mt-4 text-lg">Our researchers have published several papers in reputed journals and conferences globally.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Research Grants</h3>
                            <p className="mt-4 text-lg">Received numerous research grants from national and international funding agencies.</p>
                        </div>

                        <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-800">Patents</h3>
                            <p className="mt-4 text-lg">Several innovative solutions have been patented, contributing to advancements in technology and sustainability.</p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
