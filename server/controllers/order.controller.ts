import { Elysia, t } from 'elysia';
import { orderService } from '../services/order.service';

export const orderController = new Elysia({prefix: '/order'})

.post('/', ({body, set}) => {
    try {
        const result = orderService.createOrder(body);

        set.status = 201;
        return result;
    } catch (error: any) {
        set.status = 400;
        return {
            error: error.message || 'Something went wrong'
        }; 
    }
}, {
    body: t.Object({
        questSlug: t.String(),
        name: t.String({minLength: 2}),
        phone: t.String(),
        participants: t.Numeric(),
        agreement: t.Boolean()
    })
})