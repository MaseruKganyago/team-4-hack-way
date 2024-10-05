import { Form, Modal, DatePicker, InputNumber, FormInstance } from "antd";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => {};
  storePlannerInfo: (info: any) => void;
}

const PlannerFormModal: React.FC<IProps> = ({
  open,
  setOpen,
  storePlannerInfo,
}) => {
  const [form] = Form.useForm();

  const handleOnOk = () => {
    form.validateFields().then((values) => {
      const startDate = values?.dateRange[0]?.toISOString(true);
      const endDate = values?.dateRange[1]?.toISOString(true);

      const { totalBudgetValue } = values;

      storePlannerInfo({
        startDate,
        endDate,
        totalBudgetValue,
      });
      setOpen(!open)
    });
  };

  const handleCancel = () => setOpen(!open);

  return (
    <Modal
      title="Budget Planner"
      open={open}
      onOk={handleOnOk}
      onCancel={handleCancel}
    >
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
