import { Elysia, t } from 'elysia';
import { questService } from '../services/quest.service';

export const questController = new Elysia({prefix: '/quests'})

.get('/', () => {
    return questService.getAllQuests();
})

.get('/:slug', ({params: { slug }, set }) => {
    const quest = questService.getQuestBySlug(slug);

    if (!quest) {
        set.status = 404;
        return { error: `Quest with slug '${slug}' not found` };
        }
    return quest;
    }, {
        params: t.Object({
        slug: t.String()
        })
})

.get('/id/:id', ({params: { id }, set }) => {
    const quest = questService.getQuestById(id);

    if (!quest) {
      set.status = 404;
      return { error: `Quest with ID '${id}' not found` }; 
    }
    return quest;
    }, {
        params: t.Object({
        id: t.String()
        })
  });