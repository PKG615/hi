import { Map, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const allRoadmaps = [
  { id: 1, name: 'Full Stack Web Development', students: '12.5k', duration: '6 months', color: 'from-blue-500 to-cyan-500', skills: ['React', 'Node.js'] },
  { id: 2, name: 'Data Science & ML', students: '8.3k', duration: '8 months', color: 'from-purple-500 to-pink-500', skills: ['Python', 'TensorFlow'] },
  { id: 3, name: 'Cloud & DevOps', students: '6.7k', duration: '5 months', color: 'from-green-500 to-teal-500', skills: ['AWS', 'Docker'] },
  { id: 4, name: 'Mobile Development', students: '5.2k', duration: '4 months', color: 'from-orange-500 to-red-500', skills: ['React Native', 'Flutter'] },
];

export function RoadmapExplorer() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Explore Roadmaps</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allRoadmaps.map(roadmap => (
          <Card key={roadmap.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-32 bg-gradient-to-br ${roadmap.color}`}></div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">{roadmap.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {roadmap.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" />{roadmap.students}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{roadmap.duration}</span>
              </div>
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
