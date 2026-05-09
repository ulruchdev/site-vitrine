import { useLocation } from 'react-router';

/**
 * useActiveLink — retourne une fonction qui indique si un chemin est actif.
 * Centralise la logique plutôt que de la dupliquer dans chaque composant nav.
 *
 * @param exact  Si true, correspond exactement. Si false, correspond aussi aux sous-routes.
 */
export function useActiveLink(exact = true) {
  const { pathname } = useLocation();

  return (path: string): boolean => {
    if (exact) return pathname === path;
    return pathname.startsWith(path);
  };
}
