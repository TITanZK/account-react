import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Height} from 'components/Height';
import {Center} from 'components/Center';

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
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 16px;
  line-height: 44px;

`;

const Tag: React.FC = () => {
  const {findTagId,updateTag} = useTags();
  const {tagId} = useParams<Params>();
  const tag = findTagId(parseInt(tagId));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
        <Input label="标签名："
               placeholder="请输入修改信息"
               onChange={e => updateTag(tag.id, {name: e.target.value})}
               value={tag.name}/>
      </InputWrapper>
      <Center>
        <Height/>
        <Height/>
        <Height/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {Tag};