import { Command } from '../structure/Command';

/**
 * This ping command is used as an example for creating commands.
 */
export default new Command({
    name: 'ping',
    description: 'Pong!',
    run: async ({ interaction }) => {
        interaction.followUp({ content: 'Pong!' });
    },
});
