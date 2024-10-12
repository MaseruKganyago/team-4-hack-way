import { StyledDashboardHeader } from '@/app/styles';
import { AppDivider, PlannerFormModal, SearchInput, TrackerList } from '@/components';
import { useUI } from '@/providers';
import { FormOutlined } from '@ant-design/icons';
import { Alert, Button } from 'antd';

interface IProps {}

const TrackerPlaner: React.FC<IProps> = ({}) => {
  const { actionModalOpen } = useUI();

  const handleButtonClick = () => {
    actionModalOpen('planner-form-modal');
  };
  return (
    <>
      <StyledDashboardHeader className="dashboard-header">
        <SearchInput />

        <Button type="link" onClick={handleButtonClick}>
          Planner
          <FormOutlined />
        </Button>
      </StyledDashboardHeader>

      <TrackerList />

      <AppDivider />
      <Alert message="Planner Notes" description={'Under Construction'} type="info" showIcon />

      <PlannerFormModal />
    </>
  );
};

export default TrackerPlaner;
