import { BookOpen, Plus, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const courses = [
  { id: 1, title: 'React Mastery', category: 'Web Development', students: 1250, status: 'published', lessons: 45, rating: 4.8 },
  { id: 2, title: 'Python Data Science', category: 'Data Science', students: 980, status: 'published', lessons: 52, rating: 4.9 },
  { id: 3, title: 'Node.js Backend', category: 'Web Development', students: 750, status: 'draft', lessons: 38, rating: 0 },
];

export function CourseManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Course Management</h1>
        <Button className="gap-2"><Plus className="w-4 h-4" /> Create Course</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Courses ({courses.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.category} • {course.lessons} lessons</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                    <span>{course.students} students</span>
                    {course.rating > 0 && <span>⭐ {course.rating}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>{course.status}</Badge>
                  <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
