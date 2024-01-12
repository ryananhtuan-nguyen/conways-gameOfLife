# Conway's Game of Life

We're going to make our very own version of Conway's Game of Life. We'll render the game out to the console. We recommend building this using test-driven development (writing the tests before implementing them).

## Setup

### 0. Cloning and installation
- [ ] Clone the repository, navigate into it, and install packages with `npm i`

- [ ] Run all the tests with `npm test`, or a single test with `npm test isOverPopulated`, for example

---
## Requirements

### 1. Understanding the game

- [ ] Watch an example of Conway's running [here](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/). And a truly breathtaking implementation [here](https://copy.sh/life/?gist=f3413564b1fa9c69f2bad4b0400b8090&step=512)

- [ ] See the rules section of [the Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules). The rules are straightforward but with those simple rules some pretty cool complexity emerges

> Note that a rule for our system is that array indices **should not wrap around the edges**. That means when counting a cell's neighbours that a corner cell will have only three neighbours and an edge cell will have five neighbours. The rest will have eight.

### 2. Planning the app

- [ ] Before we start, think about how this will work. What are the things we're going to need to build? 
  <details style="padding-left: 2em">
    <summary>More about planning</summary>

    Are you going to start big and drill down (from the board down to a cell and its neighbours), or start small and expand (from a cell and its neighbours to the board)? There is no right answer, just your preference.

    Regardless of where you start, focus on a single task. If that task feels overwhelming, break it down into smaller tasks. Try to come up with as many small tasks as you can. When you start to write code, be very intentional about what you aim to achieve.
  </details>

_After_ you and your pair have given this some thought and you have a list of tasks and an order you'll complete them, validate your thinking with the tips below.

- [ ] Validate your plan
  <details style="padding-left: 2em":>
    <summary>Tips</summary>

    These are some of the tasks you'll need to complete **(not necessarily in this order)**. Don't reveal more detailed instructions until you have an opinion about how you'll accomplish a specific task.

    Before you start coding any of these steps, have a read of this "creating a board" section. If it feels manageable for you, go ahead and create the board and then decide what to do next. 

    <details style="padding-left: 2em":>
      <summary>1. Creating a board</summary>

    There are a couple of ways you can approach this. The most common is to use an array of arrays to create a matrix of rows and columns. Each item in the inner array is an object that represents a cell. The other way is to use a single long array. Each approach has advantages and disadvantages. With the matrix you'll have nested loops (outer loop being rows and inner loop being columns), but you'll be able to reference a cell with row/col (x/y) coordinates. Using a single array means you won't have nested arrays, but you'll have to calculate the location of every cell using the size of the board.

    You will either want to start with a specific board state or a random board. While you're creating the cells of the board, you should have a function that gives each cell of your board either a random state or a predefined state. If you want to use a predefined one, you might consider hard coding the matrix into its own file and importing (requiring) it. 

    You could use `true` and `false` to represent "alive" and "dead". 

    </details>
    <br />
    Or, if creating the board feels too stretchy as a starting point, picture the board as a matrix (array of arrays) where each sub-array represents a row and contains `true` and `false` values for alive and dead cells in that row. Maybe mock up what this data would look like. Then work on determining whether a cell is underpopulated, overpopulated or resurrectable, with this imaginary board in mind. You'll still need to build the board, but you can do it later once you've got into the rhythm of the challenge.

    <details style="padding-left: 2em":>
      <summary>2. Determining whether a cell is underpopulated, overpopulated or resurrectable</summary>

    The rules section of [the Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules) says that "any live cell with fewer than two live neighbours dies, as if by underpopulation". Implement the `isUnderPopulated()` function so that it determines whether the current cell does or doesn't have fewer than two live neighbours. 
    
    To see whether you're returning the right responses, run the corresponding test. If you decide to read the test for clues, note that the one test is testing nine different scenarios, and expecting an appropriate (simple!) response in each scenario. Read the test carefully -- can you understand how it's testing so many scenarios in one test?
    
    **Hint:** this function does not require complicated logic, so if you're doing something complicated it might be a good idea to ask one of your facilitators to help make sure you're on the right track.

    Once you have that running, use the same process to determine whether a cell is overpopulated or resurrectable. 

    </details>
    <br />
    For these next steps, you'll need a clear understanding of the structure of the board, either from having already built the board, or from having some mock board data in front of you. 

    <details style="padding-left: 2em":>
      <summary>3. Determining if a cell is on an edge</summary>

    The first row is 0. So if you decrement the row of any cell and it is less than 0, you know the cell is on the top edge. The same is true for the first column. To determine if a cell is on the right or bottom edge, you'll need to know the size of the board. If the board isn't square, you'll need the width and height of the board.

    </details>

    <details style="padding-left: 2em":>
      <summary>4. Getting a list of all of the neighbours of a cell</summary>

    To do this you're going to need to know if the cell in question is on an edge because this will determine how many neighbours it has. One approach is to increment and decrement the row and column of the current cell and determine if it is valid based on the size of the board. If it's valid, it's a neighbour.

    </details>

    <details style="padding-left: 2em":>
      <summary>5. Counting the number of neighbours that are alive</summary>

    This is just a matter of looping over all of the neighbours and checking their state. 

    </details>

    <details style="padding-left: 2em":>
      <summary>6. Determining the next state of a cell based on its neighbours</summary>

    To know the next state of the cell, you need to know how many alive neighbours it has. You'll also need a function that can return the next state based on the number of alive neighbours.

    </details>
    <br />
    If you haven't yet created the board, you'll want to do that (see the tip above that you read earlier) before working on the next steps. 

    <details style="padding-left: 2em":>
      <summary>7. Displaying a board (in a loop)</summary>

    You need to loop over each of the cells, but you can decide to print a row at a time with `console.log` or each cell using `process.stdout.write`. If you use `stdout`, you can use `\n` to end a line.

    </details>

    <details style="padding-left: 2em":>
      <summary>8. Determining the next board state</summary>

    Using the helper functions you've built so far, you can determine the state of each cell in a new board, based on how many alive neighbours it had in the old board.

    </details>

    <details style="padding-left: 2em":>
      <summary>9. Making the board refresh automatically so that it looks animated</summary>

    Try using [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) so that the next board state displays automatically after a set amount of time. 
    
    You could also try temporarily using [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) during your development process, so that the board just changes once (from the starting state to the first new state) after a set amount of time. 

    </details>

  </details>

### 3. Building the app

- [ ] Now you're ready to build! Create the game using your plans from step 2

  <details style="padding-left: 2em">
    <summary>Tip</summary>

    Printing to the console and getting the formatting right will be a challenge. Your instructor can help if needed, but try it for yourself first. Check out the Node package [clear](https://www.npmjs.com/package/clear).
  </details>

---

## Stretch

* Can you get it working in the browser? Feel free to consult with an instructor for help before you start.

* Can you write it without loops?


## Further reading

* [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=conways)
