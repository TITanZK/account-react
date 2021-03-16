import {useEffect, useState} from 'react';
import {useUpdate} from 'hooks/useUpdate';

type NewRecordItem = {
  tagIds: number[],
  note: string,
  category: '-' | '+',
  amount: number,
}
type RecordItem = NewRecordItem & {
  createdAt: string
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: NewRecordItem) => {
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };

  return {records, addRecord};
};