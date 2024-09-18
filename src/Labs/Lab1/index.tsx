export default function Lab1() {
    return (
    <div id="wd-lab1">
    <h2>Lab 1</h2>
    <h3>HTML Examples</h3>
    <div id="wd-h-tag">
    <h4>Heading Tags</h4>
    ...
    </div>
    <div id="wd-p-tag">
    <h4>Paragraph Tag</h4>
    <p id="wd-p-1"> ... </p>
    <p id="wd-p-2">
    This is the first paragraph. The paragraph tag is used to format
    vertical gaps between long pieces of text like this one.
    </p>
    <p id="wd-p-3">
    This is the second paragraph. Even though there is a deliberate white
    gap between the paragraph above and this paragraph, by default
    browsers render them as one contiguous piece of text as shown here on
    the right.
    </p>
    <p id="wd-p-4">
    This is the third paragraph. Wrap each paragraph with the paragraph
    tag to tell browsers to render the gaps.
    </p>
    </div>
    <div id="wd-lists">
    <h4>List Tags</h4>
    <h5>Ordered List Tag</h5>
    How to make pancakes:
    <ol id="wd-your-favorite-recipe">
    <li>Heat the pan.</li>
    <li>Cook the meat.</li>
    <li>Add tofu.</li>
    </ol>
    <h5>Unordered List Tag</h5>
    My favorite books (in no particular order)
    <ul id="wd-my-books">
    <li>Dune</li>
    <li>Lord of the Rings</li>
    <li>Ender's Game</li>
    <li>Red Mars</li>
    <li>The Forever War</li>
    </ul>
    Your favorite books (in no particular order)
    <ul id="wd-your-books">
    {/* complete on your own */}
    </ul>
    </div>
    <div id="wd-tables">
    <h4>Table Tag</h4>
    <table border={1} width="100%">
    <thead>
    <tr>
    <th>Quiz</th>
    <th>Topic</th>
    <th>Date</th>
    <th>Grade</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Q1</td>
    <td>HTML</td>
    <td>2/3/21</td>
    <td>85</td>
    </tr>
    <tr>
    <td>Q2</td>
    <td>CSS</td>
    <td>2/10/21</td>
    <td>90</td>
    </tr>
    <tr>
    <td>Q3</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q4</td>
    <td>JavaScript</td>
    <td>3/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q5</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q6</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q7</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q8</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q9</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    <tr>
    <td>Q10</td>
    <td>JavaScript</td>
    <td>2/17/21</td>
    <td>95</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
    <td colSpan={3}>Average</td>
    <td>94.9</td>
    </tr>
    </tfoot>
    </table>
    </div>
    <div id="wd-images">
    <h4>Image tag</h4>
    Loading an image from the internet:
    <br />
    <img id="wd-starship"
    width="400px"
    src="https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358480-QB4FPW98SIE28C82E87X/interstellar_ron_burnett_critical_approaches?format=1500w"
    />
    <br />
    Loading a local image:
    <br />
    <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
    </div>
    <div id="wd-forms">
    <h4>Form Elements</h4>
    <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
    value="Wonderland" title="The last name" />
    <h5>Text boxes</h5>
    <label>Biography:</label><br/>
    <textarea id="wd-textarea" cols={60} rows={10}>Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.</textarea>
    </form>
    </div>
    <h5 id="wd-buttons">Buttons</h5>
    <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
    Hello World!
    </button>
    <h5>File upload</h5>
<input id="wd-upload" type="file"/>
<h5 id="wd-radio-buttons">Radio buttons</h5>
<label>Favorite movie genre:</label><br />
<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />
<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />
<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />
<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>
<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>
<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>
<h5>Select one</h5>
<label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
<option value="COMEDY">Comedy</option>
<option value="DRAMA">Drama</option>
<option selected value="SCIFI">
Science Fiction</option>
<option value="FANTASY">Fantasy</option>
</select>
<h5>Select many</h5>
<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
<option selected value="COMEDY">Comedy</option>
<option value="DRAMA">Drama</option>
<option selected value="SCIFI">
Science Fiction</option>
<option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>
<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
placeholder="jdoe@somewhere.com"
id="wd-text-fields-email"/><br/>
<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
id="wd-text-fields-salary-start"
placeholder="1000"
value="100000"/><br/>
<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
placeholder="Doe"
max="5"
value="4"/><br/>
<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
id="wd-text-fields-dob"
value="2000-01-21"/><br/>

<h4>Anchor tag</h4>
Please 
<a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
to get dummy text<br/>

<h4>Anchor tag</h4>
Please 
<a id="wd-github" href="https://github.com/DucianX/kanbas-react-web-app-cd5610-fa24"> click here </a>
to jump to github<br/>
    </div>
    );
    }