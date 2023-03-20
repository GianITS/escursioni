import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';

export const SearchBar: React.FunctionComponent<{
  search: string;
  setSearch: (sideOpen: string) => void;
}> = (props) => {
  const {search, setSearch} = props;
  return (
    <div className="search-bar">
        <Form className="input-search-bar">
          <InputGroup>
            <Form.Control
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
              placeholder="Cerca..."
            />
          </InputGroup>
        </Form>
      </div>
  )
}
