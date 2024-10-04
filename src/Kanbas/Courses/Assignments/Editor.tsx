export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container p-4">
      {/* Assignment Name */}
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control w-100 mb-3" />
        </div>
      </div>

      {/* Description */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="form-control w-100 mb-3 p-3">
            <p>The assignment is available online</p>
            <p>
              Submit a link to the landing page of your Web application running on Netlify.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The Kanbas application should include a link to navigate back to the landing page.
            </p>
          </div>
        </div>
     
   
       

        <br></br>
        <br />
        
     
          
      {/* Points */}
      <div className="row mb-3">
        <div className="col-12 text-end">
          <label htmlFor="wd-points" className="me-2">Points</label>
          <input id="wd-points" value={100} className="form-control d-inline-block w-50" />
        </div>
      </div>

          
        <div className="row mb-3">
          <div className="col-12 text-end">
              <label htmlFor="wd-group">Assignment Group</label>
              <select id="wd-group" className="form-control d-inline-block w-50" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS" className="form-control d-inline-block w-50">ASSIGNMENTS</option>
              </select>
          </div>
        </div>
        

        <div className="row mb-3">
        <div className="col-12 text-end">
           <label htmlFor="wd-display-grade-as">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control d-inline-block w-50" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
              </select>
              </div>
              </div>

        <div className="row mb-3">
        <div className="col-12 text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-submission-type" className="form-control d-inline-block w-50" defaultValue="Online">
                <option value="Online">Online</option>
              </select>
              </div>
              </div>
        

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
          
          
     
      </div></div>
  );}
  
  