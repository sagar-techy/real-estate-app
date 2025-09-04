# Real Estate App (React + Vite + Tailwind + Firebase)

Pixel-accurate, responsive real estate UI based on the Figma brief. It implements:
- Home (Hero, What We Do, Featured, For Sale, For Rent, Newsletter, Footer)
- Listings (API data, filter by type: sale/rent, search)
- Auth (Signup, Login) using Firebase Authentication
- React Router for navigation
- TailwindCSS for styling

## Quickstart
```bash
npm install
npm run dev
```

## API
We consume the assignment API:
```
https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing
```
> The sample schema doesn't include `type`. To enable the required filter, we derive a stable pseudo-type:
> - odd `id` => `sale`
> - even `id` => `rent`

## Firebase Setup
1. Create a Firebase project and enable **Email/Password** sign-in.
2. Create a web app and copy credentials.
3. Create `.env` file in the project root:
```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=1:xxx:web:xxx
```
4. Run the app. Signup will redirect to Login; login redirects to Home.

## Folder Structure
```
src/
  assets/
  components/
  context/
  pages/
  routes/
  services/
  styles/
```

## Deploy
- Vercel: connect repo and deploy
- Netlify: `npm run build` then deploy `dist/`

## Notes
- Tailwind color tokens (`brand`) are set to match a modern real estate palette; tweak to match Figma exactly.
- Add ESLint/Prettier if needed.
