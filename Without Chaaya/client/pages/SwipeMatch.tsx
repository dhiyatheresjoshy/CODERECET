import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { X, Heart, ArrowLeft, MapPin, GraduationCap, Clock, Zap, Target, Brain, Sparkles } from 'lucide-react';

interface SkillProfile {
  id: number;
  name: string;
  college: string;
  year: string;
  department: string;
  avatar: string;
  skillsToTeach: string[];
  skillsToLearn: string[];
  location: string;
  availability: string;
  bio: string;
  skillPoints: number;
}

const mockProfiles: SkillProfile[] = [
  {
    id: 1,
    name: "Sarah Chen",
    college: "Stanford University",
    year: "2nd Year",
    department: "Computer Science",
    avatar: "🧑‍💻",
    skillsToTeach: ["React", "JavaScript", "UI Design"],
    skillsToLearn: ["Photography", "Guitar", "Spanish"],
    location: "Palo Alto, CA",
    availability: "Evenings",
    bio: "Love coding and creating beautiful interfaces! Looking to expand my creative skills.",
    skillPoints: 230
  },
  {
    id: 2,
    name: "Marcus Johnson",
    college: "Harvard University", 
    year: "3rd Year",
    department: "Business",
    avatar: "👨‍🎓",
    skillsToTeach: ["Public Speaking", "Marketing", "Excel"],
    skillsToLearn: ["Python", "Data Analysis", "Web Development"],
    location: "Cambridge, MA",
    availability: "Weekends",
    bio: "Business student passionate about tech. Great at presentations and want to learn coding!",
    skillPoints: 180
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    college: "UC Berkeley",
    year: "4th Year", 
    department: "Art & Design",
    avatar: "🎨",
    skillsToTeach: ["Graphic Design", "Photoshop", "Drawing"],
    skillsToLearn: ["Video Editing", "3D Modeling", "Animation"],
    location: "Berkeley, CA",
    availability: "Flexible",
    bio: "Creative soul with 4 years of design experience. Always excited to learn new digital arts!",
    skillPoints: 310
  }
];

export default function SwipeMatch() {
  const navigate = useNavigate();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState(mockProfiles);
  const [isMatched, setIsMatched] = useState(false);

  const currentProfile = profiles[currentProfileIndex];

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      // Simulate match
      setIsMatched(true);
      setTimeout(() => {
        setIsMatched(false);
        nextProfile();
      }, 3000);
    } else {
      nextProfile();
    }
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      // No more profiles - could show "check back later" message
      setCurrentProfileIndex(0); // Reset for demo
    }
  };

  if (!currentProfile) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">No more profiles!</h2>
          <p className="text-cyber-muted mb-6">Check back later for new skill matches.</p>
          <Button onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-cyber-blue to-cyber-neon text-cyber-dark hover:shadow-lg">
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Navigation */}
      <nav className="bg-cyber-darker border-b border-cyber-border px-6 py-4 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="text-cyber-text hover:bg-cyber-navy hover:text-cyber-blue"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Link to="/" className="text-2xl font-bold text-cyber-blue flex items-center gap-2">
              <Zap className="w-8 h-8 text-cyber-neon" />
              SkilLink
              <div className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse"></div>
            </Link>
          </div>
          <div className="text-cyber-text font-medium flex items-center gap-2">
            <Target className="w-5 h-5 text-cyber-neon" />
            Skill Matching
          </div>
        </div>
      </nav>

      {/* Match Success Modal */}
      {isMatched && (
        <div className="fixed inset-0 bg-cyber-dark/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-cyber-card border border-cyber-neon/50 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl shadow-cyber-glow-neon">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-blue mb-2">It's a Match!</h2>
            <p className="text-cyber-muted mb-4">
              You and {currentProfile.name} want to exchange skills!
            </p>
            <div className="flex gap-2 justify-center">
              <Badge className="bg-gradient-to-r from-cyber-neon/20 to-cyber-blue/20 text-cyber-neon border border-cyber-neon/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Common Interest Found
              </Badge>
            </div>
            <div className="mt-4 w-full bg-cyber-border rounded-full h-2">
              <div className="bg-gradient-to-r from-cyber-neon to-cyber-blue h-2 rounded-full animate-pulse w-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Swipe Interface */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-neon mb-2">
            Discover Skills
          </h1>
          <p className="text-cyber-muted">
            Swipe right if you want to exchange skills, left to pass
          </p>
        </div>

        {/* Profile Card */}
        <Card className="bg-cyber-card shadow-2xl border border-cyber-border overflow-hidden relative">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-neon/10 opacity-50"></div>
          
          {/* Profile Header */}
          <div className="relative bg-gradient-to-br from-cyber-navy to-cyber-card p-6 text-center border-b border-cyber-border">
            <div className="text-6xl mb-3">{currentProfile.avatar}</div>
            <h2 className="text-2xl font-bold text-cyber-text mb-1">{currentProfile.name}</h2>
            <p className="text-cyber-muted">{currentProfile.year} • {currentProfile.department}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-cyber-muted">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">{currentProfile.college}</span>
            </div>
          </div>

          <CardContent className="p-6 relative z-10">
            {/* Info */}
            <div className="flex items-center gap-4 mb-4 text-sm text-cyber-muted">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {currentProfile.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentProfile.availability}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <p className="text-cyber-text">{currentProfile.bio}</p>
            </div>

            {/* Skills they can teach */}
            <div className="mb-4">
              <h3 className="font-semibold text-cyber-text mb-2 flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyber-neon" />
                Can teach:
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProfile.skillsToTeach.map((skill, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-cyber-neon/20 to-cyber-blue/20 text-cyber-neon border border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-glow-neon transition-all">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Skills they want to learn */}
            <div className="mb-4">
              <h3 className="font-semibold text-cyber-text mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyber-purple" />
                Wants to learn:
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProfile.skillsToLearn.map((skill, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 text-cyber-purple border border-cyber-purple/30 hover:shadow-lg hover:shadow-cyber-glow-purple transition-all">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Skill Points */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-cyber-muted flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Skill Points
                </span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink">{currentProfile.skillPoints}</span>
              </div>
              <div className="w-full bg-cyber-border rounded-full h-2 mt-1">
                <div
                  className="bg-gradient-to-r from-cyber-purple to-cyber-pink h-2 rounded-full transition-all shadow-lg" 
                  style={{ width: `${Math.min((currentProfile.skillPoints / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={() => handleSwipe(false)}
                variant="outline"
                className="flex-1 h-14 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
              >
                <X className="w-6 h-6 mr-2" />
                Pass
              </Button>
              <Button 
                onClick={() => handleSwipe(true)}
                className="flex-1 h-14 bg-gradient-to-r from-cyber-neon to-cyber-blue text-cyber-dark hover:shadow-xl hover:shadow-cyber-glow-neon transition-all hover:scale-105"
              >
                <Heart className="w-6 h-6 mr-2" />
                Match
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress indicator */}
        <div className="mt-6 text-center">
          <p className="text-cyber-muted text-sm">
            {currentProfileIndex + 1} of {profiles.length} profiles
          </p>
          <div className="flex gap-1 justify-center mt-2">
            {profiles.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index <= currentProfileIndex 
                    ? 'bg-gradient-to-r from-cyber-neon to-cyber-blue shadow-lg' 
                    : 'bg-cyber-border'
                }`}
              />
            ))}
          </div>
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
