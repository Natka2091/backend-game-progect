import { db } from '../db/database';

export type Order = {
    id: string;
    questId: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    email: string;
    participants: number;
};

export const orderDataService = {
    getAllOrders(): Order[] {
        return db.get('orders') || [];
    },

    saveAllOrders(orders: Order[]): void {
        db.set('orders', orders);
    },

    createNewOrder(newOrder: Order): void {
        const currentOrders = this.getAllOrders();
        currentOrders.push(newOrder);
        this.saveAllOrders(currentOrders);
    }
};