import dotenv from 'dotenv';
import { ExtendedClient } from './structure/Client';

dotenv.config();

export const client = new ExtendedClient();

client.start();
