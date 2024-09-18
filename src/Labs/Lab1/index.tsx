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
    </div>
    );
    }