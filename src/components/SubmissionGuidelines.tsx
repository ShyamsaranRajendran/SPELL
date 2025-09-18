import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const SubmissionGuidelines = () => {
  const steps = [
    {
      step: "1",
      title: "Prepare Your Paper",
      description: "Follow Springer LNCS formatting instructions. Use LaTeX or Word style provided on the authors' page.",
      icon: "📝"
    },
    {
      step: "2",
      title: "Format Requirements",
      description: "Full papers: 8 pages maximum. Short papers: 4 pages maximum. Submit in PDF format only.",
      icon: "📄"
    },
    {
      step: "3",
      title: "Review Process",
      description: "Each submission will be reviewed by three program committee members for originality and quality.",
      icon: "👥"
    },
    {
      step: "4",
      title: "Publication",
      description: "Accepted papers will be published in Springer CCIS and indexed in Scopus.",
      icon: "📚"
    }
  ];

  const requirements = [
    "Papers must describe original, completed or in-progress, unpublished work",
    "Submissions must be in PDF format",
    "Follow Springer LNCS formatting strictly",
    "At least one author must register and present the paper",
    "Papers will be peer-reviewed by three committee members"
  ];

  return (
    <section id="submission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Submission Guidelines
          </h2>
          <p className="text-xl text-muted-foreground">
            Step-by-step guide to submit your research paper
          </p>
        </div>

        {/* Step-by-step process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-workshop-primary">
              Submission Process
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-workshop transition-all duration-300 border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-workshop-gradient rounded-full text-white font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl">{step.icon}</span>
                          <h4 className="text-lg font-semibold text-workshop-primary">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-foreground/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Paper Categories */}
            <Card className="border-l-4 border-l-workshop-accent">
              <CardHeader>
                <CardTitle className="text-workshop-primary">Paper Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-workshop-primary/5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-workshop-primary text-white">Full Papers</Badge>
                    <span className="font-semibold">8 pages maximum</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Original research, completed work, comprehensive studies
                  </p>
                </div>
                <div className="p-4 bg-workshop-accent/5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-workshop-accent text-white">Short Papers</Badge>
                    <span className="font-semibold">4 pages maximum</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Work in progress, innovative ideas, research proposals
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-workshop-primary">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-workshop-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Formatting Resources */}
            <Card className="bg-workshop-gradient text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Formatting Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white/20 text-white hover:bg-white/30 border-white/30"
                    onClick={() => window.open('https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines', '_blank')}
                  >
                    Springer LNCS Guidelines
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white/20 text-white hover:bg-white/30 border-white/30"
                    onClick={() => window.open('https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj', '_blank')}
                  >
                    Overleaf LaTeX Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submission CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-2 border-workshop-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-workshop-primary">
                Ready to Submit Your Paper?
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Join researchers from around the world in advancing fake news detection for low-resource languages. 
                Submit your original research and be part of this important conference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-workshop-gradient-accent hover:shadow-workshop-glow transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://openreview.net/group?id=SPELLL.org/2025/Workshop/Regional-FAKE', '_blank')}
                >
                  Submit via EasyChair
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-workshop-primary text-workshop-primary hover:bg-workshop-primary/10"
                  onClick={() => window.open('https://openreview.net/group?id=SPELLL.org/2025/Workshop/Regional-FAKE', '_blank')}
                >
                  View Submission Portal
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Estimated submissions: 20 papers
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;