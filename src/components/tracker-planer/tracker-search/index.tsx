import { Input } from 'antd';
import { FC, useState } from 'react';

interface ISearchProps {}

const { Search } = Input;

export const SearchInput: FC<ISearchProps> = ({}) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = (searchText: string) => {
    //To DO: Implement search functionality
  };

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
