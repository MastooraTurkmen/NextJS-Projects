import type { Comment } from "@prisma/client";
import { db } from "@/db";
import { cache } from "react";

export type CommentWithAuth = Comment & {
    user: {
        name: string | null;
        image: string | null;
    }
}

export const fetchCommentsByPostId = cache(
    (postId: string): Promise<CommentWithAuth[]> => {
    
    return db.comment.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
})