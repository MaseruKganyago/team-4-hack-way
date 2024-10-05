import { Input } from 'antd';
import { FC, useState } from 'react';

interface ISearchProps {
    handleSearch: (searchText: string) => void;
}

const { Search } = Input;

export const SearchInput: FC<ISearchProps> = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <Search
      placeholder="Search"
      allowClear
      value={searchText}
      onSearch={handleSearch}
      onChange={(e) => setSearchText(e.target.value)}
      style={{ width: 500 }}
    />
  );
};

export default SearchInput;