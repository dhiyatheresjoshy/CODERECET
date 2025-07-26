import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, MessageCircle, Trophy, Settings, Search, Bell, Zap, Target, Brain, Rocket } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  // Mock user data - would come from authentication/state management
  const user = {
    name: "Alex Johnson",
    college: "MIT",
    year: "3rd Year",
    department: "Computer Science",
    skillsToTeach: ["React", "Python", "Guitar"],
    skillsToLearn: ["UI/UX Design", "Photography", "Spanish"],
    skillPoints: 150,
    completedExchanges: 8,
    activeMatches: 3
  };

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Navigation */}
      <nav className="bg-cyber-darker border-b border-cyber-border px-6 py-4 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-cyber-blue flex items-center gap-2">
            <Zap className="w-8 h-8 text-cyber-neon" />
            SkilLink
            <div className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse"></div>
          </Link>
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="text-cyber-text hover:bg-cyber-navy hover:text-cyber-blue">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="text-cyber-text hover:bg-cyber-navy hover:text-cyber-blue">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="text-cyber-text font-medium flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-neon rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              Hi, {user.name.split(' ')[0]}!
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-neon mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-cyber-muted">
            Ready to continue your skill exchange journey?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-cyber-card border border-cyber-border shadow-xl hover:border-cyber-blue/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyber-text flex items-center gap-2">
                <Trophy className="w-5 h-5 text-cyber-purple" />
                Skill Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink">{user.skillPoints}</div>
              <p className="text-sm text-cyber-muted">Keep learning & teaching!</p>
              <div className="mt-2 w-full bg-cyber-border rounded-full h-2">
                <div className="bg-gradient-to-r from-cyber-purple to-cyber-pink h-2 rounded-full w-3/4"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cyber-card border border-cyber-border shadow-xl hover:border-cyber-neon/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyber-text flex items-center gap-2">
                <Users className="w-5 h-5 text-cyber-neon" />
                Exchanges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-blue">{user.completedExchanges}</div>
              <p className="text-sm text-cyber-muted">Successful skill exchanges</p>
              <div className="mt-2 w-full bg-cyber-border rounded-full h-2">
                <div className="bg-gradient-to-r from-cyber-neon to-cyber-blue h-2 rounded-full w-4/5"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cyber-card border border-cyber-border shadow-xl hover:border-cyber-purple/50 transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyber-text flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-cyber-purple" />
                Active Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink">{user.activeMatches}</div>
              <p className="text-sm text-cyber-muted">People ready to connect</p>
              <div className="mt-2 w-full bg-cyber-border rounded-full h-2">
                <div className="bg-gradient-to-r from-cyber-purple to-cyber-pink h-2 rounded-full w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Find New Matches */}
          <Card className="bg-gradient-to-br from-cyber-navy to-cyber-card border border-cyber-blue/30 shadow-xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-neon/20 opacity-50"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="w-6 h-6 text-cyber-neon" />
                Find New Skill Matches
              </CardTitle>
              <CardDescription className="text-cyber-text/80">
                Discover students who want to learn what you can teach, and vice versa!
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button 
                onClick={() => navigate('/swipe-match')}
                className="bg-gradient-to-r from-cyber-neon to-cyber-blue text-cyber-dark hover:shadow-xl hover:shadow-cyber-glow-neon transition-all font-semibold px-8 py-3 hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Start Swiping
              </Button>
            </CardContent>
          </Card>

          {/* Your Profile Summary */}
          <Card className="bg-cyber-card border border-cyber-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-cyber-text flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyber-blue" />
                Your Profile
              </CardTitle>
              <CardDescription className="text-cyber-muted">
                {user.college} • {user.year} • {user.department}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-cyber-text mb-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-cyber-neon" />
                  I can teach:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {user.skillsToTeach.map((skill, index) => (
                    <Badge key={index} className="bg-gradient-to-r from-cyber-neon/20 to-cyber-blue/20 text-cyber-neon border border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-glow-neon transition-all">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-cyber-text mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyber-purple" />
                  I want to learn:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {user.skillsToLearn.map((skill, index) => (
                    <Badge key={index} className="bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 text-cyber-purple border border-cyber-purple/30 hover:shadow-lg hover:shadow-cyber-glow-purple transition-all">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white hover:shadow-lg hover:shadow-cyber-glow-blue transition-all"
                onClick={() => navigate('/edit-profile')}
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex-col border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white hover:shadow-lg hover:shadow-cyber-glow-blue transition-all"
            onClick={() => navigate('/messages')}
          >
            <MessageCircle className="w-6 h-6 mb-1" />
            Messages
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white hover:shadow-lg hover:shadow-cyber-glow-purple transition-all"
            onClick={() => navigate('/my-exchanges')}
          >
            <Users className="w-6 h-6 mb-1" />
            My Exchanges
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex-col border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-cyber-dark hover:shadow-lg hover:shadow-cyber-glow-neon transition-all"
            onClick={() => navigate('/leaderboard')}
          >
            <Trophy className="w-6 h-6 mb-1" />
            Leaderboard
          </Button>
          
          <Button
            variant="outline"
            className="h-20 flex-col border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white hover:shadow-lg hover:shadow-cyber-glow-purple transition-all"
            onClick={() => navigate('/settings')}
          >
            <Settings className="w-6 h-6 mb-1" />
            Settings
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyber-darker to-cyber-dark border-t border-cyber-border px-6 py-12 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyber-muted mb-6">
            © 2025 SkilLink. Built at CodeReCET.
          </p>
          <div className="flex justify-center gap-8">
            <Link to="/about" className="text-cyber-muted hover:text-cyber-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-cyber-muted hover:text-cyber-neon transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
