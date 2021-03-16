import styled from 'styled-components';
import React from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background:#f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = { value: string; onChange: (value: string) => void }

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;

  return (
    <Wrapper>
      <Input
        label="备注"
        placeholder="请在这里添加备注"
        onChange={(e) => {props.onChange(e.target.value);}}
        value={note}
        type="text"/>
    </Wrapper>
  );
};

export default NoteSection;