## Event Calendar

A web app implementation of an event calendar app.

### Features:
- Frontend written in Reactjs (Vite) compatible with a Supabase backend
- Basic user authentication with JWT
- Create/Edit/Delete events with details (Title, Description, Start/End Time)
- Intuitive UI with shadcn/ui
- Calendar toggles between Monthly/Weekly views
- Events stored in Supabase database
- Privacy focused: no event data leaks!

## Dev

- Clone this project to your local machine using `git`

  ```bash
  git clone https://github.com/tomkndn/event-calendar/
  cd event-calendar
  ```
- Set up the backend by configuring Supabase:

  1. Create a new project on [Supabase](https://supabase.com/).
  2. Set up your database and tables (e.g., `events`, `users`).
  3. Copy the Supabase URL and API key to your `.env` file.

- Install the required packages for frontend:

  ```bash
  bun/npm install
  ```

- Start the React frontend:

  ```bash
  bun/npm run dev
  ```

- The app will be available at `http://localhost:3000`.

Demo: [Live URL](https://event-calender-tomkndn.netlify.app/)
