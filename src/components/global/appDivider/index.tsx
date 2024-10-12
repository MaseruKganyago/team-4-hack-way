import { Divider } from 'antd';

interface IProps {}

const AppDivider: React.FC<IProps> = ({}) => {
  return (
    <>
      <div style={{ marginTop: '15px' }} />
      <Divider />
      <div style={{ marginBottom: '15px' }} />
    </>
  );
};

export default AppDivider;
