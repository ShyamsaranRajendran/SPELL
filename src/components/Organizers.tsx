import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Organizers = () => {
  const organizers = [
    {
      name: "S. Angel Deborah",
      affiliation: "Sri Sivasubramaniya Nadar College of Engineering, India",
      role: "Assistant Professor, Department of CSE",
      bio: "Member of the Machine Learning Research Group of SSN. Research interests include Machine Learning, Natural Language Processing and Data Mining. Working in sentiment analysis, depression detection, offensive language detection."
    },
    {
      name: "S. Malliga",
      affiliation: "Kongu Engineering College, Erode, Tamil Nadu, India",
      role: "Professor, Department of Computer Science and Engineering",
      bio: "Research interests include Internet of Things, Network Security, Deep Learning, and Natural Language Processing. Ph.D in Network Security, currently guiding 5 research scholars under Anna University."
    },
    {
      name: "S. Rajalakshmi",
      affiliation: "Sri Sivasubramaniya Nadar College of Engineering, India",
      role: "Assistant Professor, Department of CSE",
      bio: "Member of the Machine Learning Research Group of SSN. Working in sentiment analysis, depression detection, offensive language detection, humour detection, sarcasm detection, misogyny detection."
    },
    {
      name: "Kogilavani Shanmugavadivel",
      affiliation: "National Institute of Technical Teachers Training and Research, Tamil Nadu, India",
      role: "Professor",
      bio: "Research interests include Machine Learning, Deep Learning, Natural Language Processing and Information Retrieval. Ph.D in Multi-Document Summarization, currently guiding 5 research scholars."
    },
    {
      name: "T.T. Mirnalinee",
      affiliation: "Sri Sivasubramaniya Nadar College of Engineering, India",
      role: "Professor and Head, Department of CSE",
      bio: "Member of the Machine Learning Research Group of SSN. Research interests include Computer vision, Machine learning, Green Networks and Software Defined Networks. Seven research scholars have completed PhD under her supervision."
    },
    {
      name: "György Kovács",
      affiliation: "Luleå University of Technology, Luleå, Sweden",
      role: "Senior Lecturer",
      bio: "Currently working as Senior Lecturer in Luleå University of Technology. Research subjects are Machine Learning, Fake News detection. Working in Embedded Intelligent Systems LAB."
    },
    {
      name: "Dhivya Chinnapa",
      affiliation: "JPMorgan Chase & Co., USA",
      role: "Applied AI/ML Lead",
      bio: "More than nine years of experience in machine learning/natural language processing research and applications. Strong background in data science, with proficiency in Natural Language Processing and Machine Learning."
    }
  ];

  const committeeMembers = [
    { name: "Kalika Bali", affiliation: "Principal Researcher, Microsoft Research India" },
    { name: "Shantipriya Parida", affiliation: "Senior AI Scientist, Silo AI, Charles University in Prague" },
    { name: "Anbukarasi. S", affiliation: "Associate Professor, Kongu Engineering College, India" },
    { name: "Iraklis Varlamis", affiliation: "Harokopio University of Athens, Greece" },
    { name: "Paolo Rosso", affiliation: "Full Professor, Universitat Politècnica de València" },
    { name: "Ebuka Ibeke", affiliation: "Robert Gordon University, United Kingdom" },
    { name: "Ali Ahmadian", affiliation: "Wenzhou-Kean University, Wenzhou, China" },
    { name: "Yuhang Wang", affiliation: "Taiyuan University of Technology, China" },
    { name: "Yanjie Yang", affiliation: "Taiyuan University of Technology, China" },
    { name: "C.S.Kanimohiselvi", affiliation: "Professor and head, Kongu Engineering College, India" },
    { name: "K.Premalatha", affiliation: "Bannari Amman Institute of Technology, India" },
    { name: "Elizabeth Sherly", affiliation: "IIITM-K" },
    { name: "Michael Madden", affiliation: "National University of Ireland Galway, Ireland" },
    { name: "Jiawei Zhang", affiliation: "UC Davis, USA" },
    { name: "Kalina Bontcheva", affiliation: "University of Sheffield" }
  ];

  return (
    <section id="organizers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Organizers & Committee
          </h2>
          <p className="text-xl text-muted-foreground">
            Meet the distinguished team behind Regional-FAKE 2025
          </p>
        </div>

        {/* Organizers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-workshop-primary">
            Workshop Organizers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <Card key={index} className="hover:shadow-workshop transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-workshop-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {organizer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-workshop-primary mb-2">
                      Dr. {organizer.name}
                    </h4>
                    <Badge variant="secondary" className="mb-2">
                      {organizer.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {organizer.affiliation}
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {organizer.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Committee */}
<div>
  <h3 className="text-3xl font-bold mb-12 text-center text-workshop-primary">
    Program Committee
  </h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {committeeMembers.map((member, index) => (
      <div
        key={index}
        className="group relative rounded-2xl border border-border/40 bg-card/60 
                   backdrop-blur-sm p-6 shadow-sm hover:shadow-lg 
                   hover:-translate-y-1 transition-all duration-300"
      >
        {/* Accent bar on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-workshop-gradient rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="flex flex-col items-start space-y-3">
          {/* Avatar Circle */}
          <div className="w-12 h-12 rounded-full bg-workshop-gradient flex items-center justify-center text-white font-bold shadow-md">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>

          {/* Info */}
          <div>
            <h5 className="text-lg font-semibold text-foreground mb-1">
              {member.name}
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {member.affiliation}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Organizers;