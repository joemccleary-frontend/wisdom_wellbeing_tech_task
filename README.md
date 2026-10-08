# Resource Centre

A single page app for the HA | Wisdom Wellbeing frontend tech task. It shows wellbeing resources grouped by category, lets you search them by title or tag, and opens the full details of a resource when you click it.

## Getting started

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev     # start the app
npm test        # run the tests
npm run build   # type-check and build
```

## Features

- Resources are grouped by category on load, in the order from the brief: Podcasts, Articles, Newsletters, Recipes, Fitness, Meditation. Empty categories aren't shown.
- Each card shows the title, thumbnail, time in minutes and no more than 3 tags.
- **Search by title or tag.** It ignores case and surrounding spaces and matches part of a word. Categories with no matches are hidden, and a message is shown if nothing matches.
- **Resource details.** Clicking a card opens a dialog with all of the resource's data, including the description, every tag and the date uploaded. It closes with the Close button or the Escape key.

## Tech stack

React, TypeScript, Vite, Tailwind CSS, Vitest and React Testing Library.

## Approach

I built this test first, following Red, Green, Refactor. Each behaviour has a `test:` commit with a failing test, then a `feat:` commit with the simplest code to make it pass, and a `refactor:` commit where the code could be improved.

A good example in the history is `groupByCategory`. It starts by returning an empty array, then handles one resource, then several categories, and finally the category order. The order test led to a simpler implementation than the one before it.

The tests find elements by role and label, the way a user or screen reader would, rather than testing internals. Because of this, restyling the page didn't break any tests.

## Decisions

- **One list of categories.** `CATEGORIES` sets the display order, and the `Category` type is made from it, so a misspelt category in the data is a type error.
- **Field names kept from the brief**, including `date_uploaded`.
- **Logic in pure functions.** Grouping, searching and date formatting live in `src/utils` and are tested on their own.
- **Derived state isn't stored.** The filtered list is worked out on each render from the data and the search text, so it can't get out of sync.
- **Filter, then group.** This means empty categories disappear from search results without extra code.
- **3 tags on the card, all tags in the details.** The brief limits the card, but the details should show all the data.
- **Dates formatted in UTC.** `"2025-07-10"` is read as midnight UTC, so without this, people west of the UK would see 9 July.
- **Native `<dialog>` for the details**, so the browser handles Escape, keeps focus inside the dialog and blocks the page behind it. jsdom doesn't support opening dialogs, so `setupTests.ts` adds a small stand-in for the tests.
- **Card titles are real buttons**, so cards work with the keyboard and screen readers.

## Accessibility

- **Page structure:** one `<h1>`, an `<h2>` per category and an `<h3>` per resource, inside a `<main>` landmark.
- **Category sections** are labelled by their heading, so screen reader users can jump between categories.
- **Search** has a visible label rather than relying on placeholder text, and uses `type="search"`.
- **Cards** use a real button for the title, so they work with Tab and Enter. The button's click area covers the whole card, and the card shows a focus ring.
- **Thumbnails** have empty alt text because they're decorative and the title sits next to them. Describing them would make screen readers repeat the title.
- **Tags** are a list labelled "Tags", so screen readers announce how many there are.
- **The details dialog** uses the native `<dialog>` element, which keeps focus inside, closes on Escape and blocks the page behind it. It's named by its heading, so it's announced as the resource's title.
- **Tests** find elements by role and accessible name, so a missing label or a button that isn't a button would fail a test.

**Not yet checked:** I haven't tested with a real screen reader or run a colour contrast check. The "no results" message isn't announced to screen readers as you type, which an `aria-live` region would fix.

## With more time

- Sort by date or category (the third optional feature), built test-first like the others.
- Load the data with React Query to add loading and error states and make it easy to switch to a real API.
- Playwright tests for things jsdom can't check, like Escape closing the dialog and focus returning to the card.
- A scrolling row per category. The column layout works for one resource per category but wouldn't suit a category with lots of resources.
- A fallback image if a thumbnail fails to load, plus lazy loading.
- Improved visual design, it looks very boilerplate.

## How this was built

I built this with guidance from an AI assistant. I typed and ran each step myself, following the test-first process, and can explain the decisions above.
