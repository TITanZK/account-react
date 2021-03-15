import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

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

type Props = { value: number[]; onChange: (selected: number[]) => void }

const TagSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;

  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名！');
    if (tagName !== null && tagName.length > 0) {
      setTags([...tags, {id:createId(),name:tagName}]);
    } else {return window.alert('标签名不可能为空！');}
  };

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //tag被选中了，就复制所有被选中的tag作为新的 selectedTags
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          > {tag.name} </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export default TagSection;