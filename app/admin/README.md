# Admin Dashboard

## Setup

### Environment Variables

Create a `.env.local` file in the project root and add:

```
ADMIN_PASSWORD=your_secure_password_here
```

**Important**: The `ADMIN_PASSWORD` environment variable is required for the admin authentication system to work. Without it, the admin dashboard will not be accessible.

## Authentication

The admin dashboard is protected by password-based authentication:
- Session cookies expire after 1 hour
- Cookies are cleared when the browser window closes
- Password is validated against the `ADMIN_PASSWORD` environment variable

## Follow-ups

- Integrate `getDocuments` with the actual persistence layer (e.g., S3, Supabase, or database) through a Next.js API route.
- Replace the mock uploader placeholder in `FileUploadPanel` with a mutation that calls the upcoming `POST /api/documents` endpoint and surfaces progress/error states.
- Add optimistic UI patterns and refetch logic once the API layer is in place to keep the document list in sync.

