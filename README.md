## Brian's Dev Notes for Fakelandia

### Achievements :trophy:
- Very pleased with the use of a hamburger menu on small screens
- I made use of the TextInput and SelectInput reusable components and validation from the Aliens assignment solution. I loved implementing these. I know it was overkill, but I gained good experience.
- Very chuffed that I managed to get the Confession Form to write back to the Misdemeanour table. The use of Context really clicked for me here.
- I like splitting out the hooks and context providers, this felt appropriate to keep things clean and reusable

### Struggles :persevere:
- Only managed to get one test working for the hook fetchMisdemeanours.
- Could not get test working for the main components ConfessForm and MisdeameanoursList.
    - The test constantly gave me errors that seemed to relate to jest or typescript config.
    - Made many changes from googling the problem, to no avail.
    - Decided to submit without those most tests.
- The CSS was a struggle, especially because I couldn't get Tailwind working. I'm happy with the result but it took way too long.

### Future Refactoring and To-Do :hammer:
- Styling
  - this could use some cleanup, I'm sure I have duplicated unnecessarily over the various CSS files.
  - the form reacts well to screen size changes; however, I could do more here with @media queries.
  - I've implemented OOCSS and BEM as best as I can but only on the main components (ConfessForm and MisdemeanoursList), this should be implemented on rest of components.
  - Same goes for accessibility, this can be extended much further than currently implemented.
- Components
  - Still need to add a footer
  - When submitting the confess form for "I just want to talk" it should clear the form. 
- Other
  - Would like to do a full code review and see what I can do better and remove any repetition
