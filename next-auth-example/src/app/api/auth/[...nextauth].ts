import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Lógica para verificar credenciais
        if (credentials?.email === 'admin@example.com' && credentials.password === 'admin') {
          // Retorne o objeto user com o campo 'id'
          return { id: '1', name: 'Admin', email: 'admin@example.com' };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    /**
     * Callback JWT
     */
    async jwt({ token, user }) {
      if (user) {
        // Adiciona o 'id' ao token JWT
        token.id = user.id;
      }
      return token;
    },
    /**
     * Callback da Sessão
     */
    async session({ session, token }) {
      if (token?.id) {
        // Adiciona o 'id' à sessão do usuário
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
