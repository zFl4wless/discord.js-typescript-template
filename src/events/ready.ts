import { Event } from '../structure/Event';

export default new Event('ready', () => {
    console.log('Ready!');
});
