export default function Error() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Erreur d'authentification</h1>
        <p className="mt-4">Désolé, une erreur est survenue. Veuillez réessayer.</p>
        <a href="/auth/signin" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour à la page de connexion
        </a>
      </div>
    );
  }
  