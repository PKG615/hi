import { CheckCircle, Lock, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const modules = [
  { id: 1, title: 'HTML & CSS Basics', status: 'completed', lessons: 12 },
  { id: 2, title: 'JavaScript Fundamentals', status: 'completed', lessons: 18 },
  { id: 3, title: 'React Basics', status: 'in-progress', lessons: 15 },
  { id: 4, title: 'React Advanced', status: 'locked', lessons: 20 },
];

export function RoadmapDetail() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Full Stack Web Development</h1>
        <p className="text-gray-600 mt-1">Your journey to becoming a full stack developer</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={65} className="mb-2" />
          <p className="text-sm text-gray-600">8 of 12 modules completed (65%)</p>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {modules.map(module => (
          <Card key={module.id} className={module.status === 'locked' ? 'opacity-60' : ''}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {module.status === 'completed' ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : module.status === 'locked' ? (
                  <Lock className="w-8 h-8 text-gray-400" />
                ) : (
                  <Play className="w-8 h-8 text-blue-600" />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.lessons} lessons</p>
                </div>
              </div>
              <Button disabled={module.status === 'locked'}>
                {module.status === 'completed' ? 'Review' : module.status === 'locked' ? 'Locked' : 'Continue'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
