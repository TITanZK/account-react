import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background:#f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState('');
  console.log(note);
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          placeholder="请在这里添加备注"
          type="text"
          onChange={(e)=>{setNote(e.target.value)}}
          value={note}/>
      </label>
    </Wrapper>
  );
};

export default NoteSection;