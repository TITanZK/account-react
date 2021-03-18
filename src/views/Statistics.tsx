import Layout from 'components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

const CategoryWrapper = styled.section`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .tags {
    font-size: 16px;
  }
  > .note {
    margin-right: auto;
    margin-left: 16px;
    font-size: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  //selectedRecords函数的区别
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [key: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  const beautify = (value: string) => {
    const day = dayjs(value);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  };

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {array.map(([date, records]) =>
        <div>
          <Header>{beautify(date)}</Header>
          {records.map(r => {
            return <Item>
              <div className="tags">{r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}</div>
              {r.note && <div className="note oneLine">{r.note}</div>}
              <div className="amount">￥{r.amount}</div>
            </Item>;
          })}
        </div>
      )}
    </Layout>
  );
}

export default Statistics;