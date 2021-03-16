import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagSection from 'views/Money/TagSection';
import CategorySection from 'views/Money/CategorySection';
import NoteSection from 'views/Money/NoteSection';
import NumberPadSection from 'views/Money/NumberPadSection';
import {useRecords} from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'

const defaultDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultDate);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submitDate = () => {
    addRecord(selected);
    window.alert('记账成功');
    setSelected(defaultDate);
  };
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagSection
        value={selected.tagIds}
        onChange={tagIds => onChange({tagIds})}/>
      <NoteSection
        value={selected.note}
        onChange={note => onChange({note})}/>
      <CategorySection
        value={selected.category}
        onChange={category => onChange({category})}/>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount})}
        onOk={submitDate}/>
    </MyLayout>
  );
}

export default Money;