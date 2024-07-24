import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const TopicList = async () => {
    const topics = await db.topic.findMany();
    const rederedTopics = topics.map((topic) => {
        return (
            <div key={topic.id}>
                <Link href={paths.topicShow(topic.slug)}>
                    <Chip color="warning" variant="shadow">{topic.slug}</Chip>
                </Link>
            </div>
        )
    })

    return <div className="flex flex-wrap flex-row gap-3">{rederedTopics}</div>
}

export default TopicList