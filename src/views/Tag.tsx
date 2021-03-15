import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
  tagId: string
}

const Tag: React.FC = () => {
  const {findTagId} = useTags();
  const {tagId} = useParams<Params>();
  const tag = findTagId(parseInt(tagId));
  return (
    <div>{tag.name}</div>
  );
};

export {Tag};