const DOCUMENT_TYPES = Object.freeze({
  PDF: "pdf",
  WORD: "word",
  IMAGE: "image",
  TEXT: "text",
});

const mockDocuments = [
  {
    id: "resume-2025",
    name: "Updated Resume",
    type: DOCUMENT_TYPES.PDF,
    sizeInBytes: 185_632,
    updatedAt: "2025-01-12T09:15:00.000Z",
    url: "/docs/resume.pdf",
  },
  {
    id: "strategy-brief",
    name: "2025 Strategy Brief",
    type: DOCUMENT_TYPES.WORD,
    sizeInBytes: 96_841,
    updatedAt: "2025-02-03T13:42:00.000Z",
    url: "/docs/strategy-brief.docx",
  },
  {
    id: "portfolio-shot",
    name: "Portfolio Hero Image",
    type: DOCUMENT_TYPES.IMAGE,
    sizeInBytes: 1_246_377,
    updatedAt: "2025-02-20T17:08:00.000Z",
    url: "/img/burhanuddin-main.jpg",
  },
  {
    id: "speaking-notes",
    name: "Conference Speaking Notes",
    type: DOCUMENT_TYPES.TEXT,
    sizeInBytes: 14_220,
    updatedAt: "2025-02-01T07:25:00.000Z",
    url: "/docs/speaking-notes.txt",
  },
];

/**
 * Fetches the latest document metadata for the admin dashboard.
 * Replace with a real data source (database, S3, etc.) once the backend is wired.
 */
export async function getDocuments() {
  // TODO: Wire this up to the documents API once available.
  return mockDocuments;
}

export { DOCUMENT_TYPES };

