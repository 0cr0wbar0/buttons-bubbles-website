// 404 page for unmatched routes.

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-gold-light">Page not found</h2>
        <p className="mt-2 text-sm text-cream">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
}