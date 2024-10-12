import { List, Space } from 'antd';
import { StyledTrackerList } from './styles';
import { ITransaction } from '@/models';
import { useTransactions } from '@/providers';
import { useEffect } from 'react';

interface IProps {}

const TrackerList: React.FC<IProps> = ({}) => {
  const { transactions, getTransactions } = useTransactions();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <StyledTrackerList>
      <List
        dataSource={transactions || []}
        style={{
          height: 300,
          overflow: 'auto',
        }}
        renderItem={(item: ITransaction) => (
          <List.Item>
            <Space size={60}>
              <span>{item.cardNumber}</span>

              <span>{item.transactionType}</span>

              <span>{item.postingDate}</span>

              <span>R{item.amount}</span>

              <span>{item.description}</span>
            </Space>
          </List.Item>
        )}
      />
    </StyledTrackerList>
  );
};

export default TrackerList;
