# typescript_parse_solution

I created a TypeScript parser.

It walks through a grid of characters looking for a string.

We can comment out the goLeft and goUp functions and it will only use the goDown and goRight strategy.


I followed a stackoverflow article that desribed the problem and outlined an algorithm.

The algorithm is a typical pattern seen in parsers where the is a recursive call the follows a path to an termination. In this case the termination can be an invalid charcater or a successful match. In source code every line would be lifted to an internal representation that equates to a semantic type. In this case the keyword is the symbol and the line of code begins with every charater in a grid. Every character begins a new stack. When the symbol is found in the grid following the rules the stack is printed containing the location. The location is the address and is akin to the internal representation or operation, sort of like GIMPLE and GENERIC, but don't take that too far. The algorithm stops recursing through the characters when there is no match to the next character following the rules terminating the function call. 

I used X and Y but this may be better as row and column. The reason for X and Y is the print statement uses paranthesis, reminding me of a Point. Of course, this could be many thingfs. If I stuck to row and column I would use brackets.
