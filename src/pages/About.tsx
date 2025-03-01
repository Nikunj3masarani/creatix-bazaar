
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            About Creatix Bazaar
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
            Empowering creators with the best AI prompts to unlock their creative potential.
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Our Mission
              </h2>
              <Card className="border-neutral-200 dark:border-neutral-800">
                <CardContent className="pt-6">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    At Creatix Bazaar, we believe that the right prompt can be the key to unlocking extraordinary results 
                    with AI tools. Our mission is to create a thriving marketplace where creators can share, discover, and 
                    use high-quality prompts that save time and inspire creativity.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
                    We're building a community where prompt engineers and everyday users can connect, helping to democratize 
                    access to effective AI workflows and ensuring everyone can harness the power of AI, regardless of their 
                    technical expertise.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-neutral-200 dark:border-neutral-800">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">1.</div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Discover
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Browse through our extensive collection of prompts across various categories to find exactly what you need.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-neutral-200 dark:border-neutral-800">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">2.</div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Use
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Copy prompts with a single click and paste them directly into your favorite AI tools to get instant results.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-neutral-200 dark:border-neutral-800">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">3.</div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      Contribute
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Share your own successful prompts with the community and help others achieve their creative goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                Our Values
              </h2>
              <Card className="border-neutral-200 dark:border-neutral-800">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="text-primary text-xl">✦</div>
                      <div>
                        <h3 className="font-medium text-neutral-900 dark:text-white">Quality Over Quantity</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">We prioritize well-crafted prompts that deliver reliable results.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary text-xl">✦</div>
                      <div>
                        <h3 className="font-medium text-neutral-900 dark:text-white">Community First</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">We build features based on what our users need and value their input.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary text-xl">✦</div>
                      <div>
                        <h3 className="font-medium text-neutral-900 dark:text-white">Accessibility</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">We make AI more approachable by providing clear, effective prompts for everyone.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="text-primary text-xl">✦</div>
                      <div>
                        <h3 className="font-medium text-neutral-900 dark:text-white">Ethical Use</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">We promote responsible AI usage and moderate content to prevent misuse.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
