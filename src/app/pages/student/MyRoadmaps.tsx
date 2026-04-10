import { Link } from 'react-router';
import { Map, Clock, CheckCircle, Lock, ArrowRight, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

const activeRoadmaps = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    description: 'Master frontend and backend development with modern tools',
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    estimatedTime: '2 weeks left',
    status: 'active',
  },
  {
    id: 2,
    name: 'Data Science & ML',
    description: 'Learn data analysis, visualization, and machine learning',
    progress: 35,
    totalModules: 15,
    completedModules: 5,
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    estimatedTime: '6 weeks left',
    status: 'active',
  },
];

const availableRoadmaps = [
  {
    id: 3,
    name: 'Cloud & DevOps Engineer',
    description: 'Learn cloud platforms, CI/CD, and infrastructure automation',
    totalModules: 10,
    color: 'from-green-500 to-teal-500',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    duration: '5 months',
    locked: false,
  },
  {
    id: 4,
    name: 'Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native',
    totalModules: 8,
    color: 'from-orange-500 to-red-500',
    skills: ['React Native', 'Redux', 'Firebase'],
    duration: '4 months',
    locked: true,
    unlockRequirement: 'Complete Full Stack Web Development',
  },
];

export function MyRoadmaps() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Learning Roadmaps</h1>
          <p className="text-gray-600 mt-1">Track your progress across different career paths</p>
        </div>
        <Link to="/student/roadmaps/explore">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Explore Roadmaps
          </Button>
        </Link>
      </div>

      {/* Active Roadmaps */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Roadmaps</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {activeRoadmaps.map((roadmap) => (
            <Card key={roadmap.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${roadmap.color}`}></div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{roadmap.name}</CardTitle>
                    <p className="text-sm text-gray-600">{roadmap.description}</p>
                  </div>
                  <Badge className="ml-4">{roadmap.progress}%</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {roadmap.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{roadmap.completedModules}/{roadmap.totalModules} modules completed</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {roadmap.estimatedTime}
                    </span>
                  </div>
                  <Progress value={roadmap.progress} className="h-2" />
                </div>
                <Link to={`/student/roadmaps/${roadmap.id}`}>
                  <Button className="w-full gap-2">
                    Continue Learning
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Roadmaps */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Roadmaps</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {availableRoadmaps.map((roadmap) => (
            <Card key={roadmap.id} className={`overflow-hidden ${roadmap.locked ? 'opacity-75' : 'hover:shadow-lg'} transition-all`}>
              <div className={`h-2 bg-gradient-to-r ${roadmap.color}`}></div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle>{roadmap.name}</CardTitle>
                      {roadmap.locked && <Lock className="w-4 h-4 text-gray-400" />}
                    </div>
                    <p className="text-sm text-gray-600">{roadmap.description}</p>
                  </div>
                </div>
                {roadmap.locked && (
                  <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-xs text-amber-800">
                      🔒 {roadmap.unlockRequirement}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {roadmap.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Map className="w-4 h-4" />
                    {roadmap.totalModules} modules
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {roadmap.duration}
                  </span>
                </div>
                <Button 
                  className="w-full gap-2" 
                  variant={roadmap.locked ? 'outline' : 'default'}
                  disabled={roadmap.locked}
                >
                  {roadmap.locked ? (
                    <>
                      <Lock className="w-4 h-4" />
                      Locked
                    </>
                  ) : (
                    <>
                      Start Roadmap
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
