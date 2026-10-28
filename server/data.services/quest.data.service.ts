import { db } from '../db/database';
import { Quest } from '../db/initial-quests';

export const questDataService = {

  getAllQuests(): Quest[] {
    return db.get('quests') || [];
  },

  getQuestById(id: string): Quest | undefined {
    const quests = this.getAllQuests();
    return quests.find((quest) => quest.id === id);
  },

  getQuestBySlug(slug: string): Quest | undefined {
    const quests = this.getAllQuests();
    return quests.find((quest) => quest.slug === slug);
  },

  saveAllQuests(quests: Quest[]): void {
    db.set('quests', quests);
  }
};