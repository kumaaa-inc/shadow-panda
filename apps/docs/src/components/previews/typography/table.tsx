import { typographyTableContainer, typographyTable } from '@shadow-panda/styled-system/recipes'

export default function Example() {
  return (
    <div className={typographyTableContainer()}>
      <table className={typographyTable()}>
        <thead>
          <tr>
            <th>King's Treasury</th>
            <th>People's happiness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empty</td>
            <td>Overflowing</td>
          </tr>
          <tr>
            <td>Modest</td>
            <td>Satisfied</td>
          </tr>
          <tr>
            <td>Full</td>
            <td>Ecstatic</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
