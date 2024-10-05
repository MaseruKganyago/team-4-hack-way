import { List, Space } from "antd";
import { StyledTrackerList } from "./styles";

interface IProps {
  transactions: [];
}

const TrackerList: React.FC<IProps> = ({ transactions }) => {
  return (
    <StyledTrackerList>
      <List
        dataSource={transactions}
        style={{
          height: 300,
          overflow: 'auto'
        }}
        renderItem={(item: any) => (
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
