import { Elysia, t } from 'elysia';
import { bookingService } from '../services/booking.service';

export const bookingController = new Elysia({prefix: '/booking'})

.post('/', ({body, set}) => {
    try {
        const result = bookingService.createBooking(body);

        set.status = 201;
        return result;
    } catch (error: any) {
        set.status = 400;
        return {
            success: false,
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