import { questDataService } from "../data.services/quest.data.service";
import { Quest } from "../db/initial-quests";
 export const questService = {

    getAllQuests(): Quest[] {
        return questDataService.getAllQuests();
    },

    getQuestBySlug(slug: string): Quest | null {
       return questDataService.getQuestBySlug(slug) ?? null;
    },

    getQuestById(id: string): Quest | null {
        return questDataService.getQuestById(id) ?? null;
    }
 };