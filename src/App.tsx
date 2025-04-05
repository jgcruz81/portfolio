import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User2, Briefcase, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">Portfolio</a>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">John Doe</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A passionate full-stack developer crafting beautiful and functional web experiences
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Get in touch
                </a>
                <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                  View my work
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
                alt="Profile" 
                className="rounded-full w-72 h-72 object-cover mx-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <User2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="text-gray-600">5+ years of experience in web development, specializing in React and Node.js</p>
            </div>
            <div className="text-center p-6">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <p className="text-gray-600">React, TypeScript, Node.js, Python, AWS, and more</p>
            </div>
            <div className="text-center p-6">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Worked with startups and enterprise companies to deliver high-quality solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`} 
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 ml-4">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-1">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                  john.doe@example.com
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                  github.com/johndoe
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;