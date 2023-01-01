import React, { FC } from "react";

interface TagProps {
    tag:string;
}

const Tag:FC<TagProps> = ({tag}) => {
    return <p className="tag">
        {tag}
    </p>
}

export default Tag;