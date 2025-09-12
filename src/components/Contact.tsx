import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {

  const contactEmails = [
    { name: "S. Angel Deborah", email: "angeldeborahs@ssn.edu.in" },
    { name: "S. Malliga", email: "mallisenthil.cse@kongu.edu" },
    { name: "S. Rajalakshmi", email: "rajalakshmis@ssn.edu.in" },
    { name: "Kogilavani Shanmugavadivel", email: "kogilavani@nitttrc.edu.in" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Get in touch with the workshop organizers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email Contacts */}
            <Card className="border-l-4 border-l-workshop-accent">
              <CardHeader>
                <CardTitle className="text-workshop-primary">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactEmails.map((contact, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-semibold text-workshop-primary mb-1">
                        {contact.name}
                      </h4>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-workshop-accent hover:text-workshop-accent-hover transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workshop Info */}
            <Card className="bg-workshop-gradient text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Workshop Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Workshop Dates</p>
                    <p className="text-white/90">December 18-20, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Part of SPELLL Conference</p>
                    <p className="text-white/90">Fourth Workshop in the Series</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Expected Submissions</p>
                    <p className="text-white/90">20 papers across categories</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-workshop-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-workshop-primary/20 text-workshop-primary hover:bg-workshop-primary/10"
                  onClick={() => window.open('mailto:angeldeborahs@ssn.edu.in', '_blank')}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Workshop Chair
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-workshop-accent/20 text-workshop-accent hover:bg-workshop-accent/10"
                  onClick={() => window.open('https://spelll.in', '_blank')}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  SPELLL Conference
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;