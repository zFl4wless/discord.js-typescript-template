import {
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    GuildMember,
    PermissionResolvable,
} from 'discord.js';
import { ExtendedClient } from '../structure/Client';

/**
 * Extends the CommandInteraction to include the member property.
 *
 * @param client The client.
 */
export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

/**
 * The options for the command run function.
 *
 * @param client The client.
 * @param interaction The command interaction.
 * @param args The command interaction options.
 */
interface RunOptions {
    client: ExtendedClient;
    interaction: ExtendedInteraction;
    args: CommandInteractionOptionResolver;
}

/**
 * The command run function.
 *
 * @param options The run options.
 */
type RunFunction = (options: RunOptions) => any;

/**
 * The custom command type.
 *
 * @param userPermissions The user permissions required to run the command.
 * @param run The command run function.
 */
export type CommandType = {
    userPermissions?: PermissionResolvable[];
    run: RunFunction;
} & ChatInputApplicationCommandData;
