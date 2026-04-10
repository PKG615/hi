import { Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const assignments = [
  { id: 1, title: 'Build a Todo App', course: 'React Mastery', due: 'Apr 15, 2026', status: 'pending', priority: 'high' },
  { id: 2, title: 'API Integration Project', course: 'Node.js Backend', due: 'Apr 18, 2026', status: 'submitted', priority: 'medium' },
];

export function Assignments() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <div className="grid gap-4">
        {assignments.map(a => (
          <Card key={a.id}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.course}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Due: {a.due}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={a.status === 'pending' ? 'secondary' : 'default'}>{a.status}</Badge>
                <Button>{a.status === 'pending' ? 'Start' : 'View'}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
