import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const CallForPapers = () => {
  const topics = [
    {
      icon: "📚",
      title: "Corpus Creation",
      description: "Corpus creation for fake news in different domains in low resource languages"
    },
    {
      icon: "🔍",
      title: "Classification",
      description: "Classification of fake news"
    },
    {
      icon: "🤖",
      title: "SOTA Models",
      description: "Development of SOTA models for detecting fake news"
    },
    {
      icon: "🌐",
      title: "Cross-lingual Models",
      description: "Development of cross-lingual and cross-domain models"
    },
    {
      icon: "🧠",
      title: "Social Factors",
      description: "Influence of Social and psychological factors in fake news generation"
    },
    {
      icon: "📈",
      title: "Impact Analysis",
      description: "Analyze the impact of fake news"
    }
  ];

  return (
    <section id="call-for-papers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Call for Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We invite researchers and practitioners to submit papers on fake news detection in multimodal data for low-resource languages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-workshop-primary">
              Topics of Interest
            </h3>
            <div className="grid gap-4">
              {topics.map((topic, index) => (
                <Card key={index} className="hover:shadow-workshop transition-all duration-300 hover:scale-105 border border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{topic.icon}</span>
                      <div>
                        <h4 className="font-semibold text-workshop-primary mb-2">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-workshop-accent">
              <CardHeader>
                <CardTitle className="text-workshop-primary">Submission Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-workshop-primary/10 text-workshop-primary">
                    Full Papers
                  </Badge>
                  <span className="text-foreground/80">8 pages - Original research</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-workshop-accent/10 text-workshop-accent">
                    Short Papers
                  </Badge>
                  <span className="text-foreground/80">4 pages - Work in progress, innovative ideas</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-workshop-gradient text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Publication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Published in Springer CCIS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Indexed in Scopus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Oral presentation or poster</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 border-workshop-accent/50 bg-workshop-accent/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-workshop-accent mb-4">Ready to Submit?</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Papers must describe original, completed or in-progress, unpublished work
                </p>
                <Button className="bg-workshop-gradient-accent hover:shadow-workshop-glow transition-all duration-300">
                  Submit via EasyChair
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-workshop-primary">
                Workshop Focus
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Our main theme in this workshop is to identify fake news from multimodal data in low-resource languages (LRL). 
                We welcome theoretical and practical paper submissions on any LR languages that contribute to research in 
                identifying trust, fakeness, and reliability. We particularly encourage studies that address either practical 
                application or improving resources.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;