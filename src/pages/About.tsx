
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            About Creatix Bazaar
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Learn more about our platform and our mission to help creators find the best prompts.
          </p>
          
          {/* Placeholder content - will be replaced with actual about content */}
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-12 text-center">
            <h2 className="text-xl font-medium text-neutral-600 dark:text-neutral-300">
              About page content coming soon
            </h2>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
