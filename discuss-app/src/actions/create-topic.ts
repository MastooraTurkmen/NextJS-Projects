'use server'; 

import type { Topic } from "@prisma/client";
import { auth } from "@/auth";
import { z } from "zod";
import { redirect } from "next/navigation";
import paths from "@/paths";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/[a-z-]/, {
        message: 'Must be lowercase letters or dashes without spaces'
    }),
    description: z.string().min(10)
})

interface CreateTopicFromState{
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createTopic(formState: CreateTopicFromState, formData: FormData)
    : Promise<CreateTopicFromState>{
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const session = await auth();
    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be signed in to do this.']
            }
        } 
    };

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    _form: [error.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['Something went wrong']
                }
            }
        }
    }

    revalidatePath('/')
    redirect(paths.topicShow(topic.slug))
}