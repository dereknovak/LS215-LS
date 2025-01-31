/* 
These two regexes opperate differently.
The first one checks for either `ABC` or `abc` while the second checks for 
either `A`/`a` followed by `B`/`b` followed by `C`/`c`.

If we had to match against `AbC` or `abC`, the second would match but the
first would not.
*/