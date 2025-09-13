// In: /app/api/auth/[...nextauth]/route.ts

import { handlers } from '@/auth'; // Import the handlers object

export const { GET, POST } = handlers; // Destructure and export GET and POST