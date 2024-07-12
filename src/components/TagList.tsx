import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps {
  tagList: string[];
  onTagClick: (tag: string) => void;
}

export default function TagList({
  tagList,
  onTagClick,
}: ITagListProps) {
  const [selectedTag, setSelectedTag] = useState<string>(tagList[0]);
  return (
    <div className="flex gap-x-4" onClick={(event) => {
      const eventTarget = event.target as HTMLButtonElement;
      const tag = eventTarget.textContent as string
      onTagClick(tag)
    } }>
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
