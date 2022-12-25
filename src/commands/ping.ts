import { Command } from '../structure/Command';

export default new Command({
    name: 'ping',
    description: 'Pong!',
    run: async ({ interaction }) => {
        interaction.followUp({ content: 'Pong!' });
    },
});
