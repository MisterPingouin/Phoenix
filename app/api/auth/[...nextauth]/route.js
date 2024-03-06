import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Initialisation de Prisma Client
const prisma = new PrismaClient();

// Configuration des options de NextAuth
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        // Recherche de l'utilisateur dans la base de données
        const user = await prisma.user.findFirst({
          where: { username: credentials.username },
        });

        // Vérification du mot de passe
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, name: user.username };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id; 
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirection après une connexion réussie
      return url.startsWith(baseUrl + '/api/auth/callback') ? baseUrl + '/admin' : baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

// Exportation du handler pour NextAuth en utilisant les options configurées
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
