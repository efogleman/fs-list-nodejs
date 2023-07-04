import { db } from "../database";

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const userId = '12345';
        await db.query(
            'DELETE FROM listings WHERE id=? AND user_id=?',
            [id, userId]
        );
        return { message: `Successfully deleted listing id: ${id}` };
    }
};