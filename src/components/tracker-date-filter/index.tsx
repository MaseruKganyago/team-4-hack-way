import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

interface IProps {
  handleDateSelect: (dateRange: any) => void;
}

const DateFilter: React.FC<IProps> = ({ handleDateSelect }) => {
  return <RangePicker onChange={handleDateSelect} />;
};

export default DateFilter;
