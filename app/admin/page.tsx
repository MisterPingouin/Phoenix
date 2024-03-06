'use client'
import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

const Admin = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== 'loading') {
      setLoading(false);
      if (!session) {
        // Rediriger vers la page de connexion si non authentifié
        signIn();
      }
    }
  }, [session, status]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!session) {
    return <div>Accès refusé</div>;
  }

  return <div>Bienvenue sur la page Admin</div>;
};

export default Admin;
