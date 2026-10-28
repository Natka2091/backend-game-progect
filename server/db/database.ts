import JSONdb from 'simple-json-db';
import { initialQuests } from './initial-quests';

export const db = new JSONdb('./quests.json');

if (!db.has('quests')) {
    db.set('quests', initialQuests);
}

if (!db.has('bookings')) {
    db.set('bookings', []);
}