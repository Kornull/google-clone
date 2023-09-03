type PropsBtn = {
  style: string;
  name: string;
  data: string;
  onClick: (data: string) => void;
};

export const SearchHeaderButton = ({ style, name, data, onClick }: PropsBtn) => {
  return (
    <button className={style} onClick={() => onClick(data)}>
      {name}
    </button>
  );
};
