function Footer() {
  return (
    <footer className="bg-dark text-white py-10 w-[100vw] relative left-1/2 -translate-x-1/2 m-0">
      {/* Inner container */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest border-b-4 border-granite-green inline-block pb-1">
            JVNCMPLLS
          </h1>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#expertise" className="hover:underline">Expertise</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contacts" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold mb-3">Contact Information</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              📧 <span>jvncmplls@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              📞 <span>+63 9272 786 783</span>
            </li>
            <li className="flex space-x-4 mt-2">
              <a href="#"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#"><i className="fab fa-facebook text-2xl"></i></a>
              <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
