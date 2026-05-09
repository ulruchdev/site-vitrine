import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl mb-4" style={{ color: 'rgb(240, 162, 106)' }}>404</h1>
        <h2 className="text-4xl mb-6">Page Not Found</h2>
        <p className="text-xl text-neutral-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg"
          style={{ backgroundColor: 'rgb(240, 162, 106)' }}
        >
          <Home className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
