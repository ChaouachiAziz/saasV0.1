import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const { user, signOut, subscribed, subscriptionTier, checkSubscription } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground">TrackTeam Dashboard</h1>
              {subscribed && subscriptionTier && (
                <Badge variant="secondary" className="bg-accent/20">
                  {subscriptionTier} Plan
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Button onClick={signOut} variant="outline">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-6">
          {/* Subscription Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Subscription Status
                <Button onClick={checkSubscription} variant="outline" size="sm">
                  Refresh
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {subscribed ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    You're currently on the <span className="font-medium text-foreground">{subscriptionTier}</span> plan
                  </p>
                  <Badge className="bg-accent/20 text-accent-foreground">Active Subscription</Badge>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    You don't have an active subscription. Upgrade to unlock premium features.
                  </p>
                  <Button onClick={handleUpgrade} variant="cta">
                    Upgrade Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Time Tracked Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">0h 0m</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Productivity Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">--</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">0</div>
              </CardContent>
            </Card>
          </div>

          {/* Time Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Time Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Start tracking your time to see productivity insights
                </p>
                <Button variant="cta" size="lg">
                  Start Timer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team Members (Premium Feature) */}
          {!subscribed && (
            <Card className="border-dashed border-muted">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Team Management
                  <Badge variant="outline">Premium</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Upgrade to manage team members and view comprehensive analytics
                  </p>
                  <Button onClick={handleUpgrade} variant="cta">
                    Upgrade to Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;