
const Footer = () => {
    return (
       
              <footer className="bg-richGreen text-white py-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                  {/* About Section */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lora">About Us</h3>
                    <p className="text-sm text-gray-200 font-roboto">
                      We are committed to providing the best services and products to our customers. 
                      Your satisfaction is our priority!
                    </p>
                  </div>
          
                  {/* Navigation Links */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lora">Quick Links</h3>
                    <ul className="space-y-2 font-roboto">
                      <li>
                        <a href="#home" className="hover:underline">Home</a>
                      </li>
                      <li>
                        <a href="#services" className="hover:underline">Services</a>
                      </li>
                      <li>
                        <a href="#portfolio" className="hover:underline">Portfolio</a>
                      </li>
                      <li>
                        <a href="#contact" className="hover:underline">Contact Us</a>
                      </li>
                    </ul>
                  </div>
          
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lora">Contact Info</h3>
                    <ul className="space-y-2 font-roboto">
                      <li>Email: support@example.com</li>
                      <li>Phone: +123 456 7890</li>
                      <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                  </div>
          
                  {/* Social Media */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 font-lora">Follow Us</h3>
                    <div className="flex space-x-4 text-lg">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
          
                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                  <p className="text-sm text-gray-300">© 2024 Book Haven. All rights reserved.</p>
                </div>
              </footer>
            );
          };
      
          
    
export default Footer;