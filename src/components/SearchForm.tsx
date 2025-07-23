import { Form, Input } from '@heroui/react'
import { SearchIcon } from 'lucide-react'
import { useRef, useState } from 'react';
import { useNavigate } from "react-router";

type FormData = {
  query: string
}

const Search = () => {
  const [formData, setFormData] = useState<FormData>({ query: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  let navigate = useNavigate();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.query.trim()) {
      setFormData({ ...formData, query: '' });
      if (inputRef.current) {
        inputRef.current.blur();
      }
      navigate(`/search?q=${formData.query}`);
    }
  }
  return (
    <Form onSubmit={handleSearch}>
      <Input
        name="query"
        value={formData.query}
        onChange={handleChange}
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "cursor-text!",
          ],
        }}
        placeholder="Type to search..."
        radius="lg"
        startContent={
          <SearchIcon />
        }
      />
    </Form>
  )
}

export default Search