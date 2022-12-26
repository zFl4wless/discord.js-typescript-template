import { ApplicationCommandDataResolvable } from 'discord.js';

/**
 * Options for registering commands.
 *
 * @property {string} [guildId] The guild id to register the commands in.
 * @property {ApplicationCommandDataResolvable[]} commands The commands to register.
 */
export interface RegisterCommandsOptions {
    guildId?: string;
    commands: ApplicationCommandDataResolvable[];
}
