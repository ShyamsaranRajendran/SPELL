import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            About the Workshop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Addressing the critical challenge of fake news detection in low-resource languages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-workshop-accent bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-workshop-primary">
                  Workshop Theme
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  The main theme of the workshop is to establish a groundwork for a more in-depth 
                  investigation of the sharing behaviors of users and to strengthen the capability 
                  of identifying fake news in low-resource languages.
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                The proliferation of online social media has significantly streamlined communication, 
                but much of the recent information emerging on social media is questionable and, 
                in some instances, is intended to mislead users. This type of content is commonly 
                referred to as fake news.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                While there have been many attempts at fake news detection in highly-resourced 
                languages such as Arabic, English, and other European languages, low-resourced 
                languages such as Tamil, Malayalam, Kannada, etc. remain out of focus due to 
                the lack of labeled fake corpus, fact-checker websites, and available NLP tools.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-workshop-primary">
              Broader Objectives
            </h3>
            <div className="space-y-4">
  {[
    {
      icon: "🎯",
      title: "Investigate Challenges",
      description:
        "To investigate the challenges related to the detection of fake news in low-resource languages.",
    },
    {
      icon: "📊",
      title: "Create Corpus",
      description:
        "To create a corpus of fake news from social media and news articles in different domains.",
    },
    {
      icon: "🔍",
      title: "Characterize Fake News",
      description:
        "To uniquely characterize fake news on social media/news articles and analyze the velocity of fake news.",
    },
    {
      icon: "🤝",
      title: "Global Collaboration",
      description:
        "To provide opportunities for researchers from the low-resource language community worldwide to collaborate.",
    },
  ].map((objective, index) => (
    <Card
      key={index}
      className="hover:shadow-workshop transition-all duration-300 border border-border/50"
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-5">
          <span className="text-3xl">{objective.icon}</span>
          <div>
            <h4 className="text-lg font-semibold text-workshop-primary mb-2">
              {objective.title}
            </h4>
            <p className="text-base text-foreground/80 leading-relaxed">
              {objective.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-workshop-gradient text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Part of SPELLL Conference Series
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto">
                We have conducted the series of Workshop on Regional Fake as part of SPELLL 2022, 2023, and 2024 conferences, 
                continuing our commitment to advancing fake news detection research in low-resource languages.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;