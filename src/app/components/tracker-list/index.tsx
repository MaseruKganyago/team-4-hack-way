import { List, Space } from "antd";
import { StyledTrackerList } from "./styles";

interface IProps {}

const DIRTY_LIST = [
  { id: 1, name: "Tracker 1" },
  { id: 2, name: "Tracker 2" },
];

const TrackerList: React.FC<IProps> = () => {
  return (
    <StyledTrackerList>
      <List
        dataSource={DIRTY_LIST}
        renderItem={(item) => (
          <List.Item>
            <Space>
              <span>{item.name}</span>
            </Space>
          </List.Item>
        )}
      />
    </StyledTrackerList>
  );
};

export default TrackerList;
