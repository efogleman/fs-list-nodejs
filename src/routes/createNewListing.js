import { boom, unauthorized} from '@hapi/boom';
import * as admin from 'firebase-admin';
import { db } from "../database";
import { v4 as uuid } from 'uuid';

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;

        if (!user) {
            throw boom.unauthorized('You must be logged in to create a listing!');
        }

        const id = uuid();
        const { name = '', description = '', price = 0 } = req.payload;

        await db.query(`
            INSERT INTO listings (id, name, description, price, user_id) 
                VALUES (?,?,?,?,?)
            `,
            [id, name, description, price, userId]
        );
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id]
        );

        return results[0];
    }

};