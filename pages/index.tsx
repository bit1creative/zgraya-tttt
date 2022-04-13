import type { NextPage } from 'next';
import axios from 'axios';

import HomePageLayout from '../layout/HomePageLayout';
import UserCard from '../components/UserCard';

const Home: NextPage = ({ user }: any) => {
  return (
    <HomePageLayout>
      <UserCard user={user} />
    </HomePageLayout>
  );
};

export async function getServerSideProps() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return {
      props: {
        user: res.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}

export default Home;
