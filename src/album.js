import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Anirudh</td>
            <td>Chill bro</td>
          </tr>
          <tr>
            <td scope='row'>Yuvan</td>
            <td>Yuvan drug</td>
          </tr>
          <tr>
            <td scope='row'>Rahman</td>
            <td>Retro Hits</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
