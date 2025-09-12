import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const ImportantDates = () => {
  const dates = [
    {
      event: "First Call for Workshop Papers",
      date: "August 19, 2025",
      type: "call",
      status: "upcoming"
    },
    {
      event: "Second Call for Workshop Papers",
      date: "September 10, 2025",
      type: "call",
      status: "upcoming"
    },
    {
      event: "Workshop Paper Due Date",
      date: "September 20, 2025",
      type: "deadline",
      status: "critical"
    },
    {
      event: "Notification of Acceptance",
      date: "October 15, 2025",
      type: "notification",
      status: "important"
    },
    {
      event: "Camera-ready Papers Due",
      date: "October 30, 2025",
      type: "deadline",
      status: "critical"
    },
    {
      event: "Workshop Dates",
      date: "December 18-20, 2025",
      type: "event",
      status: "highlight"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "important":
        return "bg-workshop-accent/10 text-workshop-accent border-workshop-accent/20";
      case "highlight":
        return "bg-workshop-primary/10 text-workshop-primary border-workshop-primary/20";
      default:
        return "bg-muted/50 text-muted-foreground border-border";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "call":
        return "📢";
      case "deadline":
        return "⏰";
      case "notification":
        return "📧";
      case "event":
        return "🎉";
      default:
        return "📅";
    }
  };

  return (
    <section id="dates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-workshop-gradient bg-clip-text text-transparent">
            Important Dates
          </h2>
          <p className="text-xl text-muted-foreground">
            Mark your calendar with these critical dates
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-workshop-gradient"></div>

            <div className="space-y-8">
              {dates.map((item, index) => (
                <div key={index} className="relative flex items-center gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-workshop-gradient rounded-full shadow-workshop-glow">
                    <span className="text-2xl">{getIcon(item.type)}</span>
                  </div>

                  {/* Content card */}
                  <Card className={`flex-1 hover:shadow-workshop transition-all duration-300 ${
                    item.status === "critical" ? "border-destructive/20" : 
                    item.status === "highlight" ? "border-workshop-primary/20" : "border-border/50"
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {item.event}
                          </h3>
                          <p className="text-2xl font-bold text-workshop-primary">
                            {item.date}
                          </p>
                        </div>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status === "critical" && "Critical Deadline"}
                          {item.status === "important" && "Important"}
                          {item.status === "highlight" && "Workshop Event"}
                          {item.status === "upcoming" && "Upcoming"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countdown or highlight section */}
        <div className="mt-16">
          <Card className="bg-workshop-gradient text-white border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Next Deadline</h3>
              <p className="text-3xl font-bold mb-2">September 20, 2025</p>
              <p className="text-white/90">Workshop Paper Due Date</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;