import NextAuth from "next-auth";

// Estenda as interfaces do NextAuth
declare module "next-auth" {
  /**
   * Tipagem personalizada para a sessão do usuário
   */
  interface Session {
    user: {
      id: string;  // Adicionando a propriedade 'id'
    } & DefaultSession['user'];
  }

  /**
   * Tipagem personalizada para o token JWT
   */
  interface JWT {
    id?: string;  // Adicionando a propriedade 'id' ao JWT
  }

  /**
   * Tipagem personalizada para o usuário no momento do callback
   */
  interface User {
    id: string;  // Adicionando a propriedade 'id' ao User
  }
}
