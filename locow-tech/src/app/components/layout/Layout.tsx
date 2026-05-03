import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Layout — orchestrateur de la mise en page globale.
 * La logique nav est dans Header.tsx, le footer dans Footer.tsx.
 */
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
