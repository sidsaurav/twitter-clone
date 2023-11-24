import axios from 'axios'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { generateTokenForUser } from '../services/jwt.js';

const prismaClient = new PrismaClient()

interface GoogleTokenResult {
  iss?: string;
  nbf?: string;
  aud?: string;
  sub?: string;
  email: string;
  email_verified: string;
  azp?: string;
  name?: string;
  picture?: string;
  given_name: string;
  family_name?: string;
  iat?: string;
  exp?: string;
  jti?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}

const queries = {
  async verifyGoogleToken(par, { token }: { token: string }) {
    const googleToken = token;
    const googleOauthURL = "https://oauth2.googleapis.com/tokeninfo";

    const { data } = await axios.get<GoogleTokenResult>(
      googleOauthURL+"?id_token="+googleToken,
      );
      // return data;
    const user = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      await prismaClient.user.create({
        data: {
          email: data.email,
          firstName: data.given_name,
          lastName: data.family_name,
          profileImageUrl: data.picture,
        },
      });
    }

    const userInDb = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    if (!userInDb) throw new Error("User with email not found");

    const userToken = generateTokenForUser(userInDb);

    return userToken;
  }
}

export const resolvers = { queries }