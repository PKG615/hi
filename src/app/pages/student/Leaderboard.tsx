import { Trophy, Medal, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';

const leaders = [
  { rank: 1, name: 'Alice Johnson', xp: 5420, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { rank: 2, name: 'Bob Smith', xp: 4890, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { rank: 3, name: 'Charlie Brown', xp: 4320, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { rank: 4, name: 'John Doe (You)', xp: 2450, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', isCurrentUser: true },
];

export function Leaderboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-gray-600 mt-1">See how you rank against other learners</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Top Learners This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaders.map(leader => (
              <div key={leader.rank} className={`flex items-center gap-4 p-4 rounded-lg ${leader.isCurrentUser ? 'bg-blue-50 border-2 border-blue-500' : 'border border-gray-200'}`}>
                <div className="text-2xl font-bold text-gray-400 w-8">#{leader.rank}</div>
                <Avatar className="w-12 h-12">
                  <AvatarImage src={leader.avatar} />
                  <AvatarFallback>{leader.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{leader.name}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    {leader.xp.toLocaleString()} XP
                  </div>
                </div>
                {leader.rank === 1 && <Trophy className="w-6 h-6 text-yellow-500" />}
                {leader.rank === 2 && <Medal className="w-6 h-6 text-gray-400" />}
                {leader.rank === 3 && <Medal className="w-6 h-6 text-orange-600" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
