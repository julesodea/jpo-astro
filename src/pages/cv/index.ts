import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async () => {
  const filePath = path.join(process.cwd(), 'public', 'julesodea-cv.pdf');
  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="julesodea-cv.pdf"',
    },
  });
};
