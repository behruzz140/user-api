import "./table.css";

function Table() {
  return (
    <table>
      <caption>Home Work - 1</caption>
      <thead>
        <tr>
          <th className="trName" scope="col">
            #
          </th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Active</th>
          <th scope="col">Count</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="rowNumber">1</td>
          <td scope="row">Leonard</td>
          <td>Hofstadter</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>

        <tr>
          <td className="rowNumber">2</td>
          <td scope="row">Sheldon</td>
          <td> Cooper</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
        <tr>
          <td className="rowNumber">3</td>
          <td scope="row">Howard</td>
          <td> Wolowitz</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
        <tr>
          <td className="rowNumber">4</td>
          <td scope="row">Raj</td>
          <td>Koothrappali</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
        <tr>
          <td className="rowNumber">5</td>
          <td scope="row">Penny</td>
          <td>Maks</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
        <tr>
          <td className="rowNumber">6</td>
          <td scope="row">Bernadette</td>
          <td> Rostenkowski</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
        <tr>
          <td className="rowNumber">7</td>
          <td scope="row">Amy Farrah </td>
          <td>Fowler</td>
          <td>+998 77 064 0682</td>
          <td>
            <label>
              <input type="checkbox" class="option-input checkbox" />
            </label>
          </td>
          <td>
            <label>
              <input
                className="h-[30px] indent-2.5"
                type="number"
                placeholder="0"
              />
            </label>
          </td>{" "}
          <td className="userGap">
            <i class="fa-solid fa-user-plus"></i>
            <i class="fa-solid fa-user-minus"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
