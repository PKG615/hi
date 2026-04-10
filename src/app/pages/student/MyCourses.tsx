import { Play, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

const courses = [
  { id: 1, title: 'React Mastery', progress: 75, thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop', instructor: 'John Smith', duration: '12h', lessons: 45 },
  { id: 2, title: 'Node.js Backend', progress: 45, thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop', instructor: 'Jane Doe', duration: '10h', lessons: 38 },
  { id: 3, title: 'Python Data Science', progress: 30, thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop', instructor: 'Mike Chen', duration: '15h', lessons: 52 },
  { id: 4, title: 'MongoDB Basics', progress: 60, thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=225&fit=crop', instructor: 'Sarah Johnson', duration: '8h', lessons: 30 },
];

export function MyCourses() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <p className="text-gray-600 mt-1">Continue where you left off</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="relative">
              <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-7 h-7 text-gray-900 ml-1" />
                </div>
              </div>
              <Badge className="absolute top-2 right-2">{course.progress}%</Badge>
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-gray-900">{course.title}</h3>
              <p className="text-sm text-gray-600">by {course.instructor}</p>
              <Progress value={course.progress} className="h-2" />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {course.lessons} lessons
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
