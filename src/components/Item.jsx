import "../components/Item.css";
export default function Item(props) {
  const { data, deleteCat } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        {data.name}
        <button className="delete" onClick={() => deleteCat(data.id)}>
          ลบข้อมูล
        </button>
      </li>
    </>
  );
}
