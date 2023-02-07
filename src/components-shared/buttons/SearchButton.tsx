import Button from '@/components-shared/buttons';
import SearchIcon from '@/img/search.svg';
import { useRouter } from 'next/router';

function SearchButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/search');
  };

  return (
    <Button onClick={handleClick}>
      <SearchIcon />
    </Button>
  );
}

export default SearchButton;
