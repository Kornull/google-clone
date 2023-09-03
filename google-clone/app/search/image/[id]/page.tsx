type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `${id} - Google Clone search`,
    description: 'Word search Google Clone',
  };
}

const WebSearch = () => {
  return <div>WebSearch</div>;
};

export default WebSearch;
