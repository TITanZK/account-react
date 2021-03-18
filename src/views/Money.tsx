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
const CategoryWrapper = styled.section`
  background: #c4c4c4;
`

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
    if (addRecord(selected)) {
      window.alert('记账成功');
      setSelected(defaultDate);
    }
  };
  return (
    <MyLayout>
      <TagSection
        value={selected.tagIds}
        onChange={tagIds => onChange({tagIds})}/>
      <NoteSection
        value={selected.note}
        onChange={note => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={category => onChange({category})}/>
      </CategoryWrapper>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({amount})}
        onOk={submitDate}/>
    </MyLayout>
  );
}

export default Money;