import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="glass-card p-10 max-w-md text-center animate-fade-in">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you were looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
