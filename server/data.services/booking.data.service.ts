import { db } from '../db/database';

export type Booking = {
    id: string;
    questId: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    email: string;
    participants: number;
};

export const bookingDataServise = {
    getAllBookings(): Booking[] {
        return db.get('bookings') || [];
    },

    saveAllBookings(bookings: Booking[]): void {
        db.set('bookings', bookings);
    },

    createNewBooking(newBooking: Booking): void {
        const currentBookings = this.getAllBookings();
        currentBookings.push(newBooking);
        this.saveAllBookings(currentBookings);
    }
};