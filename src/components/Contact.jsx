import React from 'react'

const Contact = () => (
    <section className="container mx-auto my-16 px-4 text-center">
      <h2 className="text-4xl font-semibold mb-8">Contact</h2>
      <p className="text-lg mb-4">Have a project in mind or want to collaborate? Reach out to me!</p>
      <p className="text-lg">Email: <a href="mailto:ganeshppawar12@gmail.com" className="text-blue-600">ganeshppawar12@gmail.com</a></p>
      <p className="text-lg">Phone: +91 9113535534</p>
      <div className="mt-8 flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/connecttoganeshpawar/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
        <a href="https://github.com/ganeshppawar12" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
      </div>
    </section>
  );

export default Contact