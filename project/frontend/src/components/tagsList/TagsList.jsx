import Tag from "../Tag/Tag";

function TagsList({tagsArray}) {
    const tags = tagsArray.map(
        item => <Tag  tagPath={item.path} tagText={item.name}/>
    )
    return (
        <>
            {tags}
        </>
    )
}

export default TagsList