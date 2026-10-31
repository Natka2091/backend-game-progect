import { bookingDataServise, Booking } from "../data.services/booking.data.service";
import { questDataService } from "../data.services/quest.data.service";

export const bookingService = {
    createBooking(bookingInput: {
        questSlug: string;
        name: string;
        phone: string;
        participants: number;
        agreement: boolean;
    }) {
        if (!bookingInput.agreement) {
            throw new Error('You must accept the user agreement to book a quest.');
        }

        const quest = questDataService.getQuestBySlug(bookingInput.questSlug);
        if (!quest) {
            throw new Error('Quest not found');
        }

        if (bookingInput.participants < quest.minPlayers || bookingInput.participants > quest.maxPlayers) {
            throw new Error(`Invalid players count. This quest is for ${quest.minPlayers}-${quest.maxPlayers} players.`);
        }

        const newBooking: Booking = {
            id: crypto.randomUUID(),
            questId: quest.id,
            date: new Date().toISOString().split('T')[0], 
            time: new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
            name: bookingInput.name,
            phone: bookingInput.phone,
            email: '', 
            participants: bookingInput.participants
            };

        bookingDataServise.createNewBooking(newBooking);

        return {
            success: true, 
            message: 'Application sent successfully', 
            bookingId: newBooking.id
            }
    }
}