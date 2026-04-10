import { Award, Download, Share2 } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const certificates = [
  { id: 1, title: 'React Development', date: 'Mar 2026', course: 'React Mastery' },
  { id: 2, title: 'JavaScript Fundamentals', date: 'Feb 2026', course: 'JS Complete Guide' },
];

export function Certificates() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Certificates</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map(cert => (
          <Card key={cert.id} className="overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Award className="w-20 h-20 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{cert.course} • {cert.date}</p>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 gap-2"><Download className="w-4 h-4" /> Download</Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2"><Share2 className="w-4 h-4" /> Share</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
