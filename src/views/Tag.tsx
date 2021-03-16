import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';

type Params = {
  tagId: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`

const Tag: React.FC = () => {
  const {findTagId} = useTags();
  const {tagId} = useParams<Params>();
  const tag = findTagId(parseInt(tagId));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <div>
        <label>
          <span>标签名</span>
          <input
            placeholder="请输入修改信息"
            />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export {Tag};