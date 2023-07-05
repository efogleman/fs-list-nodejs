import { boom, unauthorized} from '@hapi/boom';
import * as admin from 'firebase-admin';
import { db } from "../database";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = admin.auth().verifyIdToken(token);
        const userId = user.user_id;

        if (!user) {
            throw boom.unauthorized('You must be logged in to delete a listing!');
        }

        const { id } = req.params;
        await db.query(
            'DELETE FROM listings WHERE id=? AND user_id=?',
            [id, userId]
        );
        return { message: `Successfully deleted listing id: ${id}` };
    }
};