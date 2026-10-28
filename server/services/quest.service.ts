import { questDataService } from "../data.services/quest.data.service";
import { Quest } from "../db/initial-quests";
 export const questService = {

    getAllQuests(): Quest[] {
        return questDataService.getAllQuests();
    },

    getQuestBySlug(slug: string): Quest | null {
        const quest = questDataService.getQuestBySlug(slug);

        if (!quest) {
            return null;
        }

        return quest;
    }
 };