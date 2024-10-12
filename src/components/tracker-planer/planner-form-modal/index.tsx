import { useUI } from '@/providers';
import { IPlanner } from '@/utils';
import { Form, Modal, DatePicker, InputNumber, FormInstance } from 'antd';

interface IProps {}

const PlannerFormModal: React.FC<IProps> = ({}) => {
  const [form] = Form.useForm<IPlanner>();

  const { openModal, closeModal } = useUI();

  const handleOnOk = () => {
    form.validateFields().then((values) => {});
  };

  const handleCancel = () => closeModal();

  return (
    <Modal title="Budget Planner" open={openModal === 'planner-form-modal'} onOk={handleOnOk} onCancel={handleCancel}>
      <PlannerForm form={form} />
    </Modal>
  );
};

export default PlannerFormModal;

interface FormProps {
  form: FormInstance;
}

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const PlannerForm: React.FC<FormProps> = ({ form }) => {
  return (
    <Form form={form}>
      <FormItem label="Date Range" name="dateRange">
        <RangePicker />
      </FormItem>

      <FormItem label="Total Budget Value" name="totalBudgetValue">
        <InputNumber addonBefore="R" />
      </FormItem>
    </Form>
  );
};
