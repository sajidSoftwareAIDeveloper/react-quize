import './sstyle.css'
export default function UserInput({onselect1,onselect2,onselect3,onselect4,percent}){

  return <>
      <h3> who is the become a PM of 2024 MLA election</h3>
      <table >

        <tr>
          <td>A</td>
          <td>
            <button class='button1' onClick={onselect1}>
                {((percent.first)>0)?(percent.first)+'%':''}
            </button>
         </td>
        </tr>

        <tr>
          <td>B</td>
          <td>
             <button class='button2' onClick={onselect2} > 
                {((percent.second)>0 )?percent.second+'%':''}
            </button>
          </td>
        </tr>

        <tr>
          <td>C</td>
          <td>
             <button class='button3' onClick={onselect3} > 
                {((percent.third)>0)?percent.third+'%':''}
            </button>
          </td>
        </tr>

        <tr>
          <td>D</td>
          <td>
             <button class='button4' onClick={onselect4} > 
                {((percent.last)>0)?percent.last+'%':''}

            </button>
          </td>
        </tr>

        <tr>
          <td></td>
          <progress 
            value={(percent.first)}
            max={100}
            prefix='2'
            
          >
          </progress>
        </tr>
      </table>
    </>
}