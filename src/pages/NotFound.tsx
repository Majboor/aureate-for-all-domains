import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center space-y-6">
        <p className="text-7xl sm:text-8xl font-display text-foreground">404</p>
        <h1 className="text-xl font-display text-muted-foreground lowercase tracking-wide">
          this page went out of style.
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          the page you're looking for doesn't exist — or it was never elevated
          enough to keep around.
        </p>
        <Link
          to="/"
          className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-medium lowercase tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5"
        >
          back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
