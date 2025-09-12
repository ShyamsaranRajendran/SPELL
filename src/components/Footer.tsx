const Footer = () => {
  return (
    <footer className="bg-workshop-gradient text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Workshop Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Regional-FAKE 2025</h3>
            <p className="text-white/90 mb-4">
              Fourth Workshop on Fake News Detection in Low-Resource Languages
            </p>
            <p className="text-white/80">
              Part of SPELLL Conference<br />
              December 18-20, 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#call-for-papers" className="hover:text-white transition-colors">Call for Papers</a></li>
              <li><a href="#dates" className="hover:text-white transition-colors">Important Dates</a></li>
              <li><a href="#submission" className="hover:text-white transition-colors">Submission Guidelines</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-white/90">
              <p>angeldeborahs@ssn.edu.in</p>
              <p>mallisenthil.cse@kongu.edu</p>
              <p>rajalakshmis@ssn.edu.in</p>
              <p>kogilavani@nitttrc.edu.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Regional-FAKE Workshop. All rights reserved.
          </p>
          <p className="text-white/60 mt-2">
            Organized as part of SPELLL Conference Series
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;