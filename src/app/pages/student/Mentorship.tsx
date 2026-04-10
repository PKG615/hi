import { Calendar, Video, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';

const mentors = [
  { id: 1, name: 'Dr. Sarah Wilson', expertise: 'Full Stack Development', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', rating: 4.9, sessions: 150 },
  { id: 2, name: 'Prof. Mike Chen', expertise: 'Data Science & ML', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', rating: 4.8, sessions: 200 },
];

export function Mentorship() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mentorship</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map(mentor => (
          <Card key={mentor.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span>⭐ {mentor.rating}</span>
                    <span className="text-gray-500">{mentor.sessions} sessions</span>
                  </div>
                </div>
              </div>
              <Button className="w-full gap-2">
                <Calendar className="w-4 h-4" />
                Book Session
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
