import { tableContainerStyles, tableStyles } from '@shadow-panda/styled-system/recipes'

export default function Example() {
  return (
    <div className={tableContainerStyles()}>
      <table className={tableStyles()}>
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
