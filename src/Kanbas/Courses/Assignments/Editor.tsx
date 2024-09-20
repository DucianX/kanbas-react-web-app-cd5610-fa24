export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br></br>
        <br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
       
        <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.

        </textarea>
        <br></br>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-entry"></label>
            </td>
            <td>
              <label htmlFor="wd-submission-type">Online Entry Options</label><br></br>

              <input type="checkbox" name="entry-options" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="entry-options" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="entry-options" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="entry-options" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="entry-options" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
            <br></br>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
             <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
        
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to"></label>
            </td>
            <td>
            <input id="wd-assign-to" defaultValue="Everyone">
              </input>
            </td>
          </tr>
          <br></br>
          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date"></label>
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
            <input id="wd-due-date" value="2024-05-13" type="date">
            </input>
            </td>
          </tr>
          <br></br>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from"></label>
            </td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
                <input id="wd-available-from" value="2024-05-06" type="date">
                </input>
            </td>
            <td>
                <input id="wd-available-until" value="2024-05-20" type="date">
                </input>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
                <hr></hr>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            
            <td align="right">
              <button type="button">Cancel</button>
              <button type="submit">Save</button>
            </td>
          </tr>
          
          
        </table>
      </div>
  );}
  
  