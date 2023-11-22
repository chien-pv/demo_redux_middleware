function Item({ id, title }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>
        <button className="btn btn-danger">DELETE</button>
      </td>
    </tr>
  );
}
export default Item;
