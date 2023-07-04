import { db } from "../database";
import { v4 as uuid } from 'uuid';

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', price = 0 } = req.payload;
        const userId = '12345';

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