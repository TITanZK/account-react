import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #737373;
        color: white;
      }
    }
  }
  > button {
    background: none;
    border: none;
    margin-top: 8px;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
  }
`;

const TagSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名！');
    if (tagName !== null && tagName.length > 0) {
      setTags([...tags, tagName]);
    } else {return window.alert('标签名不可能为空！');}
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      //tag被选中了，就复制所有被选中的tag作为新的 selectedTags
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag}
              onClick={() => onToggleTag(tag)}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          > {tag} </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;