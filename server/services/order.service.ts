import { orderDataService, Order } from "../data.services/order.data.service";
import { questDataService } from "../data.services/quest.data.service";

export const orderService = {
    createOrder(orderInput: {
        questSlug: string;
        name: string;
        phone: string;
        participants: number;
        agreement: boolean;
    }) {
        if (!orderInput.agreement) {
            throw new Error('You must accept the user agreement to book a quest.');
        }

        const quest = questDataService.getQuestBySlug(orderInput.questSlug);
        if (!quest) {
            throw new Error('Quest not found');
        }

        if (orderInput.participants < quest.minPlayers || orderInput.participants > quest.maxPlayers) {
            throw new Error(`Invalid players count. This quest is for ${quest.minPlayers}-${quest.maxPlayers} players.`);
        }

        const newOrder: Order = {
            id: crypto.randomUUID(),
            questId: `${quest.id}`,
            date: new Date().toISOString().split('T')[0], 
            time: new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
            name: orderInput.name,
            phone: orderInput.phone,
            email: '', 
            participants: orderInput.participants
            };

        orderDataService.createNewOrder(newOrder);

        return {
            orderId: newOrder.id
            }
    }
}