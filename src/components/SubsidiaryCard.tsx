import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SubsidiaryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

const SubsidiaryCard = ({ title, description, icon: Icon, details }: SubsidiaryCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
      <CardHeader className="pb-3 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ border: '1.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
          <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
        </div>
        <CardTitle className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-1">
        <ul className="space-y-2 text-sm text-gray-600">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
              <span className="text-primary mr-2 transition-transform duration-300 group-hover:scale-110 font-medium">•</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SubsidiaryCard;
