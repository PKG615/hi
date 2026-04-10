import { Play, CheckCircle, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const lessons = [
  { id: 1, title: 'Introduction to React', duration: '15:30', completed: true },
  { id: 2, title: 'JSX and Components', duration: '22:45', completed: true },
  { id: 3, title: 'State and Props', duration: '28:15', completed: false, current: true },
  { id: 4, title: 'Hooks Deep Dive', duration: '35:20', completed: false },
];

export function CoursePlayer() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <Button size="lg" className="rounded-full w-20 h-20">
              <Play className="w-10 h-10" />
            </Button>
          </div>
          <CardHeader>
            <CardTitle>State and Props in React</CardTitle>
            <p className="text-sm text-gray-600">Learn how to manage component state and pass data through props</p>
          </CardHeader>
          <CardContent>
            <Progress value={35} className="mb-2" />
            <p className="text-sm text-gray-600">Course Progress: 35%</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {lessons.map((lesson) => (
                <button key={lesson.id} className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${lesson.current ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{lesson.title}</p>
                      <p className="text-xs text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
