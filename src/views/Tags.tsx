import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  a {
    > li {
      border-bottom: 1px solid #d5d5d9;
      line-height: 20px;
      padding: 12px 16px 12px 0;
      margin-left: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 10px 13px;
  background: #767676;
  border-radius: 4px;
  color: white;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Height = styled.div`
  height: 16px;
`;

function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <Link to={'/tags/' + tag.id}>
            <li key={tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </li>
          </Link>
        )}
      </TagList>
      <Center>
        <Height/>
        <Height/>
        <Height/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;