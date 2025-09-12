import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const InvitedSpeakers = () => {
  const speakers = [
    {
      name: "Dr. Radhika Mamidi",
      title: "Associate Professor",
      institution: "International Institute of Information Technology (IIIT), Hyderabad",
      bio: "Dr. Radhika Mamidi is a renowned researcher in Natural Language Processing and Computational Linguistics. Her research focuses on multilingual NLP, low-resource languages, and computational social science. She has made significant contributions to Indian language processing and has been instrumental in developing NLP tools and resources for Indian languages.",
      expertise: ["Natural Language Processing", "Computational Linguistics", "Multilingual NLP", "Low-Resource Languages"],
      achievements: [
        "Principal Investigator of multiple government-funded projects",
        "Published extensively in top-tier conferences and journals",
        "Active contributor to Indian language NLP research",
        "Mentor to numerous PhD students in computational linguistics"
      ]
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Invited Speakers
          </h2>
          <p className="text-xl text-muted-foreground">
            Distinguished experts sharing their insights on fake news detection
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="border-l-4 border-l-workshop-accent hover:shadow-workshop transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Speaker photo placeholder and basic info */}
                  <div className="text-center lg:text-left">
                    <div className="w-48 h-48 bg-workshop-gradient rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center shadow-workshop">
                      <span className="text-4xl font-bold text-white">
                        {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-workshop-primary mb-2">
                      {speaker.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3 bg-workshop-accent/10 text-workshop-accent">
                      {speaker.title}
                    </Badge>
                    <p className="text-lg font-medium text-muted-foreground">
                      {speaker.institution}
                    </p>
                  </div>

                  {/* Speaker details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-workshop-primary mb-3">
                        About the Speaker
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-workshop-primary mb-3">
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {speaker.expertise.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="border-workshop-primary/20 text-workshop-primary">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-workshop-primary mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {speaker.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-workshop-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call for more speakers */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/50 border-dashed border-2 border-workshop-accent/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-workshop-accent mb-4">
                More Speakers to be Announced
              </h3>
              <p className="text-muted-foreground">
                We are in the process of confirming additional distinguished speakers. 
                Stay tuned for updates on our exciting lineup of experts in fake news detection 
                and low-resource language processing.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Estimated attendance */}
        <div className="mt-12 text-center">
          <Card className="bg-workshop-gradient text-white border-0 max-w-lg mx-auto">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2">Expected Attendance</h4>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-white/90">International Researchers</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvitedSpeakers;