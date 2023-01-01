import React, { FC } from "react";
import Tag from "./Tag";

interface TagDisplayProps {
    tags: string[];
}

const TagDisplay: FC<TagDisplayProps> = ({ tags }) => {
    return <div className="tag-display">
        {tags.map(tag => <Tag tag={tag} />)}
    </div>
}

export default TagDisplay;