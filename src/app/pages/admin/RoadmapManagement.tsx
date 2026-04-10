import { Map, Plus, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const roadmaps = [
  { id: 1, name: 'Full Stack Web Development', modules: 12, students: 12500, status: 'active', color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Data Science & ML', modules: 15, students: 8300, status: 'active', color: 'from-purple-500 to-pink-500' },
  { id: 3, name: 'Cloud & DevOps', modules: 10, students: 6700, status: 'draft', color: 'from-green-500 to-teal-500' },
];

export function RoadmapManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Roadmap Management</h1>
        <Button className="gap-2"><Plus className="w-4 h-4" /> Create Roadmap</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map(roadmap => (
          <Card key={roadmap.id} className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${roadmap.color}`}></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg">{roadmap.name}</h3>
                <Badge variant={roadmap.status === 'active' ? 'default' : 'secondary'}>{roadmap.status}</Badge>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>{roadmap.modules} modules</p>
                <p>{roadmap.students.toLocaleString()} students enrolled</p>
              </div>
              <Button size="sm" variant="outline" className="w-full gap-2">
                <Edit className="w-4 h-4" /> Edit Roadmap
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
